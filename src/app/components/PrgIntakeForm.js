"use client";

/*
  PrgIntakeForm: "Fill in one form" for the Sell Fitness Programmes page.
  4 short steps, progress bar, inline validation, saved draft.
  Posts multipart form data to /api/intake (the same route as the
  counselling page), which forwards it to your Make.com webhook.
  Listens for the "prg-plan" event from PrgPlanPicker to pre-fill the plan.
*/

import { useEffect, useRef, useState } from "react";

const DRAFT_KEY = "prg-intake-draft-v1";
const MAX_PROGRAMMES = 3;
const MAX_FILE_MB = 5;

const STEPS = [
  { id: "you", title: "About you", hint: "So we can set up your accounts." },
  { id: "programme", title: "Your programme", hint: "What you sell, who it's for and how people join." },
  { id: "brand", title: "Your brand", hint: "How your page looks and sounds." },
  { id: "plan", title: "Plan and send", hint: "Last check before we start." },
];

const BUILDS = [
  ["programme", "Programme Launch: £499 one-time"],
  ["system", "Client System Launch: £699 one-time"],
];
const CARES = [
  ["none", "No Care: I'll run it myself"],
  ["care", "Care: £49/month"],
  ["growth", "Growth Care: £89/month"],
];

const EMPTY = {
  fullName: "",
  practiceName: "",
  email: "",
  phone: "",
  website: "",
  instagram: "",
  programmes: [{ name: "", price: "", billing: "monthly", weeks: "12" }],
  format: "mix",
  whoFor: "",
  calls: "free",
  whatsapp: "setup",
  leads: "instagram",
  bio: "",
  colours: "",
  build: "system",
  care: "care",
  annual: false,
  ads: false,
  results: false,
  consent: false,
};

const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
const phoneOk = (v) => v.replace(/[^\d]/g, "").length >= 10;

function validate(step, d, files) {
  const e = {};
  if (step === 0) {
    if (!d.fullName.trim()) e.fullName = "Enter your full name.";
    if (!d.practiceName.trim()) e.practiceName = "Enter your brand or business name.";
    if (!emailOk(d.email)) e.email = "Enter an email address like name@example.com.";
    if (!phoneOk(d.phone)) e.phone = "Enter a mobile number we can reach you on.";
  }
  if (step === 1) {
    d.programmes.forEach((p, i) => {
      if (!p.name.trim()) e[`g${i}name`] = `Name programme ${i + 1}.`;
      if (!(Number(p.price) > 0)) e[`g${i}price`] = `Enter a price in pounds for programme ${i + 1}.`;
    });
    if (d.whoFor.trim().length < 20) e.whoFor = "Tell us who your programme is for (a sentence is fine).";
  }
  if (step === 2) {
    if (d.bio.trim().length < 40) e.bio = "Write at least a couple of sentences (40+ characters).";
    const f = files.logo;
    if (f && f.size > MAX_FILE_MB * 1024 * 1024) e.logo = `Choose an image under ${MAX_FILE_MB} MB.`;
  }
  if (step === 3) {
    if (d.build === "programme" && d.whatsapp !== "none")
      e.build = "WhatsApp replies come with Client System Launch. Choose it, or pick \"No WhatsApp\" in step 2.";
    if (!d.results) e.results = "Please confirm this before we start.";
    if (!d.consent) e.consent = "Tick this box so we can contact you and set things up.";
  }
  return e;
}

function Field({ id, label, hint, error, optional, children }) {
  return (
    <div className={`pgf-field${error ? " pgf-has-err" : ""}`}>
      <label htmlFor={id}>
        {label} {optional && <span className="pgf-opt">(optional)</span>}
      </label>
      {hint && <p className="pgf-hint" id={`${id}-hint`}>{hint}</p>}
      {children}
      {error && <p className="pgf-err" id={`${id}-err`}>{error}</p>}
    </div>
  );
}
const describedBy = (id, hint, error) =>
  [hint ? `${id}-hint` : null, error ? `${id}-err` : null].filter(Boolean).join(" ") || undefined;

export default function PrgIntakeForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState(EMPTY);
  const [files, setFiles] = useState({ logo: null });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [trap, setTrap] = useState("");
  const headRef = useRef(null);
  const summaryRef = useRef(null);
  const loaded = useRef(false);

  useEffect(() => {
    try {
      const saved = JSON.parse(window.localStorage.getItem(DRAFT_KEY) || "null");
      if (saved && typeof saved === "object") setData({ ...EMPTY, ...saved });
    } catch {}
    loaded.current = true;
    // Plan chosen in the pricing picker pre-fills step 4
    const onPlan = (ev) => {
      const p = ev.detail || {};
      setData((d) => ({ ...d, build: p.build ?? d.build, care: p.care ?? d.care, annual: !!p.annual, ads: !!p.ads, whatsapp: p.build === "programme" ? "none" : d.whatsapp === "none" ? "setup" : d.whatsapp }));
    };
    window.addEventListener("prg-plan", onPlan);
    return () => window.removeEventListener("prg-plan", onPlan);
  }, []);
  useEffect(() => {
    if (!loaded.current || status === "done") return;
    try {
      window.localStorage.setItem(DRAFT_KEY, JSON.stringify(data));
    } catch {}
  }, [data, status]);

  const set = (key) => (e) => {
    const v = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setData((d) => ({ ...d, [key]: v }));
  };
  const setProg = (i, key) => (e) =>
    setData((d) => ({ ...d, programmes: d.programmes.map((p, j) => (j === i ? { ...p, [key]: e.target.value } : p)) }));
  const addProg = () =>
    setData((d) => ({ ...d, programmes: [...d.programmes, { name: "", price: "", billing: "monthly", weeks: "12" }] }));
  const removeProg = (i) => setData((d) => ({ ...d, programmes: d.programmes.filter((_, j) => j !== i) }));

  const goTo = (n) => {
    setStep(n);
    setErrors({});
    requestAnimationFrame(() => headRef.current?.focus());
  };
  const showErrors = (e) => {
    setErrors(e);
    if (Object.keys(e).length) {
      requestAnimationFrame(() => summaryRef.current?.focus());
      return true;
    }
    return false;
  };
  const next = () => {
    if (!showErrors(validate(step, data, files))) goTo(step + 1);
  };

  const submit = async (ev) => {
    ev.preventDefault();
    if (step < STEPS.length - 1) return next();
    if (showErrors(validate(step, data, files))) return;
    setStatus("sending");
    try {
      const fd = new FormData();
      Object.entries(data).forEach(([k, v]) => fd.append(k, k === "programmes" ? JSON.stringify(v) : String(v)));
      fd.append("plan", `${data.build}${data.care === "none" ? "" : `+${data.care}`}${data.annual ? " (annual)" : ""}`);
      fd.append("source", "sell-fitness-programmes");
      if (files.logo) fd.append("logo", files.logo);
      fd.append("company_website", trap);
      fd.append("submittedAt", new Date().toISOString());
      const res = await fetch("/api/intake", { method: "POST", body: fd });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("done");
      try {
        window.localStorage.removeItem(DRAFT_KEY);
      } catch {}
      requestAnimationFrame(() => headRef.current?.focus());
    } catch {
      setStatus("failed");
    }
  };

  // WhatsApp automation comes with Client System Launch. Never switch the
  // plan silently: show a note in step 2 and ask in step 4 instead.
  const needsSystem = data.whatsapp !== "none" && data.build === "programme";

  const errList = Object.entries(errors);
  const pct = Math.round((step / STEPS.length) * 100);

  if (status === "done") {
    return (
      <div className="pgf pgf-done" role="status">
        <h3 ref={headRef} tabIndex={-1}>Thank you, that&apos;s step 1 done.</h3>
        <p>Here&apos;s what happens next:</p>
        <ol className="pgf-next">
          <li><b>Next:</b> we email you your Stripe link (about 10 minutes on your phone).</li>
          <li><b>Then:</b> if you chose WhatsApp, forward us the one-time code Meta sends you.</li>
          <li><b>After that:</b> you get a preview of your page to approve. No meetings needed.</li>
        </ol>
      </div>
    );
  }

  return (
    <form className="pgf" onSubmit={submit} noValidate aria-labelledby="pgf-title">
      <div className="pgf-top">
        <ol className="pgf-steps" aria-label="Form progress">
          {STEPS.map((s, i) => (
            <li key={s.id} className={i < step ? "pgf-done-step" : i === step ? "pgf-now" : ""} aria-current={i === step ? "step" : undefined}>
              <span className="pgf-dot" aria-hidden="true">{i < step ? "✓" : i + 1}</span>
              <span className="pgf-step-t">{s.title}</span>
            </li>
          ))}
        </ol>
        <div className="pgf-bar" aria-hidden="true"><span style={{ width: `${Math.max(pct, 6)}%` }} /></div>
      </div>

      <h3 id="pgf-title" ref={headRef} tabIndex={-1}>Step {step + 1} of {STEPS.length}: {STEPS[step].title}</h3>
      <p className="pgf-sub">{STEPS[step].hint} Your answers save on this device as you go.</p>

      {errList.length > 0 && (
        <div className="pgf-summary" ref={summaryRef} tabIndex={-1} role="alert">
          <b>Please fix {errList.length === 1 ? "this" : `these ${errList.length} things`}:</b>
          <ul>{errList.map(([k, msg]) => <li key={k}>{msg}</li>)}</ul>
        </div>
      )}

      <div className="pgf-trap" aria-hidden="true">
        <label htmlFor="prg_company_website">Leave this empty</label>
        <input id="prg_company_website" tabIndex={-1} autoComplete="off" value={trap} onChange={(e) => setTrap(e.target.value)} />
      </div>

      {step === 0 && (
        <div className="pgf-grid">
          <Field id="fullName" label="Full name" error={errors.fullName}>
            <input id="fullName" autoComplete="name" value={data.fullName} onChange={set("fullName")} aria-invalid={!!errors.fullName} aria-describedby={describedBy("fullName", false, errors.fullName)} />
          </Field>
          <Field id="practiceName" label="Brand or business name" hint="As you want it on your page." error={errors.practiceName}>
            <input id="practiceName" autoComplete="organization" value={data.practiceName} onChange={set("practiceName")} aria-invalid={!!errors.practiceName} aria-describedby={describedBy("practiceName", true, errors.practiceName)} />
          </Field>
          <Field id="email" label="Email we can reach you on" error={errors.email}>
            <input id="email" type="email" inputMode="email" autoComplete="email" value={data.email} onChange={set("email")} aria-invalid={!!errors.email} aria-describedby={describedBy("email", false, errors.email)} />
          </Field>
          <Field id="phone" label="Mobile number" hint="For new-lead alerts. We never share it." error={errors.phone}>
            <input id="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="07..." value={data.phone} onChange={set("phone")} aria-invalid={!!errors.phone} aria-describedby={describedBy("phone", true, errors.phone)} />
          </Field>
          <Field id="instagram" label="Instagram or TikTok handle" optional>
            <input id="instagram" placeholder="@yourname" value={data.instagram} onChange={set("instagram")} />
          </Field>
          <Field id="website" label="Current website or link-in-bio" hint="Leave blank if you don't have one." optional>
            <input id="website" inputMode="url" placeholder="yourname.co.uk" value={data.website} onChange={set("website")} aria-describedby="website-hint" />
          </Field>
        </div>
      )}

      {step === 1 && (
        <>
          <fieldset className="pgf-set">
            <legend>Your programme <span className="pgf-opt">(up to {MAX_PROGRAMMES})</span></legend>
            {data.programmes.map((p, i) => (
              <div className="pgf-session pgf-prog" key={i}>
                <Field id={`g${i}name`} label="Programme name" error={errors[`g${i}name`]}>
                  <input id={`g${i}name`} placeholder="12-week fat loss programme" value={p.name} onChange={setProg(i, "name")} aria-invalid={!!errors[`g${i}name`]} aria-describedby={describedBy(`g${i}name`, false, errors[`g${i}name`])} />
                </Field>
                <Field id={`g${i}price`} label="Price (£)" error={errors[`g${i}price`]}>
                  <input id={`g${i}price`} inputMode="decimal" value={p.price} onChange={setProg(i, "price")} aria-invalid={!!errors[`g${i}price`]} aria-describedby={describedBy(`g${i}price`, false, errors[`g${i}price`])} />
                </Field>
                <Field id={`g${i}billing`} label="Billed">
                  <select id={`g${i}billing`} value={p.billing} onChange={setProg(i, "billing")}>
                    <option value="monthly">Monthly</option>
                    <option value="once">One-off</option>
                  </select>
                </Field>
                <Field id={`g${i}weeks`} label="Weeks">
                  <input id={`g${i}weeks`} inputMode="numeric" value={p.weeks} onChange={setProg(i, "weeks")} />
                </Field>
                {data.programmes.length > 1 && (
                  <button type="button" className="pgf-remove" onClick={() => removeProg(i)} aria-label={`Remove ${p.name || `programme ${i + 1}`}`}>Remove</button>
                )}
              </div>
            ))}
            {data.programmes.length < MAX_PROGRAMMES && (
              <button type="button" className="pgf-add" onClick={addProg}>+ Add another programme</button>
            )}
          </fieldset>

          <Field id="whoFor" label="Who is it for?" hint="For example: busy professionals who want to lose fat around a full-time job." error={errors.whoFor}>
            <textarea id="whoFor" rows={3} value={data.whoFor} onChange={set("whoFor")} aria-invalid={!!errors.whoFor} aria-describedby={describedBy("whoFor", true, errors.whoFor)} />
          </Field>

          <div className="pgf-grid">
            <fieldset className="pgf-set pgf-radios">
              <legend>How do people join?</legend>
              <label><input type="radio" name="calls" value="free" checked={data.calls === "free"} onChange={set("calls")} /> Free discovery call first</label>
              <label><input type="radio" name="calls" value="paid" checked={data.calls === "paid"} onChange={set("calls")} /> Paid consultation first</label>
              <label><input type="radio" name="calls" value="direct" checked={data.calls === "direct"} onChange={set("calls")} /> They buy straight from the page</label>
            </fieldset>
            <fieldset className="pgf-set pgf-radios">
              <legend>WhatsApp</legend>
              <label><input type="radio" name="whatsapp" value="have" checked={data.whatsapp === "have"} onChange={set("whatsapp")} /> I have a WhatsApp Business number</label>
              <label><input type="radio" name="whatsapp" value="setup" checked={data.whatsapp === "setup"} onChange={set("whatsapp")} /> Set one up for me</label>
              <label><input type="radio" name="whatsapp" value="none" checked={data.whatsapp === "none"} onChange={set("whatsapp")} /> No WhatsApp, email only</label>
            </fieldset>
            {needsSystem && (
              <p className="pgf-note" role="status">
                WhatsApp replies come with <b>Client System Launch (£699)</b>. You can switch plans in step 4, or choose &quot;No WhatsApp&quot; to stay on Programme Launch.
              </p>
            )}
            <Field id="format" label="How is it delivered?">
              <select id="format" value={data.format} onChange={set("format")}>
                <option value="app">Coaching app</option>
                <option value="pdf">PDF plans</option>
                <option value="live">Live or 1:1 coaching</option>
                <option value="mix">A mix</option>
              </select>
            </Field>
            <Field id="leads" label="Where do most leads come from?">
              <select id="leads" value={data.leads} onChange={set("leads")}>
                <option value="instagram">Instagram</option>
                <option value="tiktok">TikTok</option>
                <option value="ads">Paid ads</option>
                <option value="referrals">Referrals</option>
                <option value="mix">A mix</option>
              </select>
            </Field>
          </div>
        </>
      )}

      {step === 2 && (
        <div className="pgf-grid">
          <Field id="bio" label="About you and your coaching" hint="Your background and what makes your coaching different. 2–4 sentences." error={errors.bio}>
            <textarea id="bio" rows={5} maxLength={800} value={data.bio} onChange={set("bio")} aria-invalid={!!errors.bio} aria-describedby={describedBy("bio", true, errors.bio)} />
            <span className="pgf-count" aria-live="polite">{data.bio.length}/800</span>
          </Field>
          <Field id="logo" label="Logo" hint={`JPG, PNG or SVG, under ${MAX_FILE_MB} MB.`} error={errors.logo} optional>
            <input id="logo" type="file" accept="image/jpeg,image/png,image/svg+xml" onChange={(e) => setFiles({ logo: e.target.files?.[0] || null })} aria-invalid={!!errors.logo} aria-describedby={describedBy("logo", true, errors.logo)} />
            {files.logo && <span className="pgf-file">✓ {files.logo.name}</span>}
          </Field>
          <Field id="colours" label="Brand colours or a store you like" optional>
            <input id="colours" placeholder="Black and gold" value={data.colours} onChange={set("colours")} />
          </Field>
          <p className="pgf-hint">Client results and photos come later, and only with your clients&apos; permission. No need to attach them here.</p>
        </div>
      )}

      {step === 3 && (
        <>
          <div className="pgf-grid">
            <fieldset className={`pgf-set pgf-radios pgf-plans${errors.build ? " pgf-has-err" : ""}`}>
              <legend>Your build</legend>
              {BUILDS.map(([v, l]) => (
                <label key={v}>
                  <input type="radio" name="build" value={v} checked={data.build === v} onChange={set("build")} /> {l}
                </label>
              ))}
              {errors.build && <p className="pgf-err">{errors.build}</p>}
            </fieldset>
            <fieldset className="pgf-set pgf-radios pgf-plans">
              <legend>Monthly care</legend>
              {CARES.map(([v, l]) => (
                <label key={v}>
                  <input type="radio" name="care" value={v} checked={data.care === v} onChange={set("care")} /> {l}
                  {v === "care" && <span className="pgf-pill">Most popular</span>}
                </label>
              ))}
            </fieldset>
          </div>
          {data.care !== "none" && (
            <label className="pgf-check">
              <input type="checkbox" checked={data.annual} onChange={set("annual")} />
              Pay a year of Care upfront and save £100 on the build
            </label>
          )}
          <label className="pgf-check">
            <input type="checkbox" checked={data.ads} onChange={set("ads")} />
            Add Meta and Google Ads setup (£149 one-time, ad budget paid to Meta or Google)
          </label>
          <div className={`pgf-field${errors.results ? " pgf-has-err" : ""}`}>
            <label className="pgf-check">
              <input type="checkbox" checked={data.results} onChange={set("results")} aria-invalid={!!errors.results} aria-describedby={errors.results ? "results-err" : undefined} />
              I understand Falcoon builds the system and can&apos;t guarantee client numbers, and any testimonials I share are real and used with permission.
            </label>
            {errors.results && <p className="pgf-err" id="results-err">{errors.results}</p>}
          </div>
          <div className={`pgf-field${errors.consent ? " pgf-has-err" : ""}`}>
            <label className="pgf-check">
              <input type="checkbox" checked={data.consent} onChange={set("consent")} aria-invalid={!!errors.consent} aria-describedby={errors.consent ? "consent-err" : undefined} />
              I agree to be contacted about my setup.
            </label>
            {errors.consent && <p className="pgf-err" id="consent-err">{errors.consent}</p>}
          </div>
          <p className="pgf-sub">No payment is taken here. We confirm your plan by email first.</p>
        </>
      )}

      {status === "failed" && <p className="pgf-summary" role="alert">Sorry, that didn&apos;t send. Please try again. Your answers are still here.</p>}

      <div className="pgf-nav">
        {step > 0 ? <button type="button" className="pgf-back" onClick={() => goTo(step - 1)}>← Back</button> : <span />}
        {step < STEPS.length - 1 ? (
          <button type="button" className="prg-btn prg-d" onClick={next}>Next: {STEPS[step + 1].title} <span aria-hidden="true">→</span></button>
        ) : (
          <button type="submit" className="prg-btn prg-d" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send my details"} <span aria-hidden="true">→</span></button>
        )}
      </div>
    </form>
  );
}