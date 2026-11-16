"use client";

/*
  ScnIntakeForm: the "Fill in one form" step.
  4 short steps, a progress bar, inline validation and a saved draft.
  Sends multipart form data to /api/intake, which forwards it to your
  Make.com custom webhook (see app/api/intake/route.js).
*/

import { useEffect, useRef, useState } from "react";

const DRAFT_KEY = "scn-intake-draft-v1";

const STEPS = [
  { id: "you", title: "About you", hint: "So we can set up your accounts." },
  { id: "sessions", title: "Your sessions", hint: "What clients can book and pay for." },
  { id: "brand", title: "Your page", hint: "How you look and sound." },
  { id: "plan", title: "Plan and send", hint: "Last check before we start." },
];

const BODIES = ["BACP", "UKCP", "NCPS", "BPS", "Other", "Not a member yet"];

const PLANS = [
  ["launch", "Launch: £499 one-time"],
  ["care", "Launch + Care: £499 + £49/month"],
  ["growth", "Growth Care: £499 + £89/month"],
];

const EMPTY = {
  fullName: "",
  practiceName: "",
  email: "",
  phone: "",
  website: "",
  body: "",
  membership: "",
  sessions: [{ name: "First session", minutes: "50", price: "75" }],
  payment: "full",
  cancelNotice: "48",
  video: "meet",
  availability: "",
  bio: "",
  colours: "",
  plan: "care",
  annual: false,
  ico: "",
  consent: false,
};

const MAX_FILE_MB = 5;
const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
const phoneOk = (v) => v.replace(/[^\d]/g, "").length >= 10;

function validate(step, d, files) {
  const e = {};
  if (step === 0) {
    if (!d.fullName.trim()) e.fullName = "Enter your full name.";
    if (!d.practiceName.trim()) e.practiceName = "Enter your practice or business name.";
    if (!emailOk(d.email)) e.email = "Enter an email address like name@example.com.";
    if (!phoneOk(d.phone)) e.phone = "Enter the mobile number you'll use for WhatsApp.";
    if (!d.body) e.body = "Choose your professional body.";
  }
  if (step === 1) {
    d.sessions.forEach((s, i) => {
      if (!s.name.trim()) e[`s${i}name`] = "Name this session.";
      if (!(Number(s.minutes) > 0)) e[`s${i}minutes`] = "Enter the length in minutes.";
      if (!(Number(s.price) > 0)) e[`s${i}price`] = "Enter the price in pounds.";
    });
    if (!d.availability.trim()) e.availability = "Tell us roughly when you see clients.";
  }
  if (step === 2) {
    if (d.bio.trim().length < 40) e.bio = "Write at least a couple of sentences (40+ characters).";
    for (const key of ["photo", "logo"]) {
      const f = files[key];
      if (f && f.size > MAX_FILE_MB * 1024 * 1024) e[key] = `Choose an image under ${MAX_FILE_MB} MB.`;
    }
    if (!files.photo) e.photo = "Add a photo of you for your page.";
  }
  if (step === 3) {
    if (!d.consent) e.consent = "Tick this box so we can contact you and set things up.";
  }
  return e;
}

/* Small helpers keep every field accessible in the same way. */
function Field({ id, label, hint, error, optional, children }) {
  return (
    <div className={`scf-field${error ? " scf-has-err" : ""}`}>
      <label htmlFor={id}>
        {label} {optional && <span className="scf-opt">(optional)</span>}
      </label>
      {hint && <p className="scf-hint" id={`${id}-hint`}>{hint}</p>}
      {children}
      {error && (
        <p className="scf-err" id={`${id}-err`}>
          {error}
        </p>
      )}
    </div>
  );
}

const describedBy = (id, hint, error) =>
  [hint ? `${id}-hint` : null, error ? `${id}-err` : null].filter(Boolean).join(" ") || undefined;

export default function ScnIntakeForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState(EMPTY);
  const [files, setFiles] = useState({ photo: null, logo: null });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | done | failed
  const [trap, setTrap] = useState(""); // honeypot, bots fill it, people never see it
  const headRef = useRef(null);
  const summaryRef = useRef(null);
  const loaded = useRef(false);

  /* Restore and save a draft (text only; files can't be stored). */
  useEffect(() => {
    try {
      const saved = JSON.parse(window.localStorage.getItem(DRAFT_KEY) || "null");
      if (saved && typeof saved === "object") setData({ ...EMPTY, ...saved });
    } catch {}
    loaded.current = true;
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
  const setSession = (i, key) => (e) =>
    setData((d) => ({
      ...d,
      sessions: d.sessions.map((s, j) => (j === i ? { ...s, [key]: e.target.value } : s)),
    }));
  const addSession = () =>
    setData((d) => ({ ...d, sessions: [...d.sessions, { name: "", minutes: "50", price: "" }] }));
  const removeSession = (i) =>
    setData((d) => ({ ...d, sessions: d.sessions.filter((_, j) => j !== i) }));
  const setFile = (key) => (e) => setFiles((f) => ({ ...f, [key]: e.target.files?.[0] || null }));

  const goTo = (n) => {
    setStep(n);
    setErrors({});
    requestAnimationFrame(() => headRef.current?.focus());
  };

  const next = () => {
    const e = validate(step, data, files);
    setErrors(e);
    if (Object.keys(e).length) {
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }
    goTo(step + 1);
  };

  const submit = async (ev) => {
    ev.preventDefault();
    if (step < STEPS.length - 1) return next();
    const e = validate(step, data, files);
    setErrors(e);
    if (Object.keys(e).length) {
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }
    setStatus("sending");
    try {
      const fd = new FormData();
      Object.entries(data).forEach(([k, v]) => {
        if (k === "sessions") fd.append(k, JSON.stringify(v));
        else fd.append(k, String(v));
      });
      if (files.photo) fd.append("photo", files.photo);
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

  const errList = Object.entries(errors);
  const pct = Math.round(((status === "done" ? STEPS.length : step) / STEPS.length) * 100);

  if (status === "done") {
    return (
      <div className="scf scf-done" role="status">
        <h3 ref={headRef} tabIndex={-1}>Thank you, that&apos;s step 1 done.</h3>
        <p>We&apos;ve got everything we need to start building. Here&apos;s what happens next:</p>
        <ol className="scf-next">
          <li><b>Within 1 working day:</b> we email you your Stripe link (about 10 minutes on your phone).</li>
          <li><b>Then:</b> we ask you to forward one WhatsApp code.</li>
          <li><b>After that:</b> you get a preview link to approve. No meetings needed.</li>
        </ol>
      </div>
    );
  }

  return (
    <form className="scf" onSubmit={submit} noValidate aria-labelledby="scf-title">
      {/* Progress */}
      <div className="scf-top">
        <ol className="scf-steps" aria-label="Form progress">
          {STEPS.map((s, i) => (
            <li
              key={s.id}
              className={i < step ? "scf-done-step" : i === step ? "scf-now" : ""}
              aria-current={i === step ? "step" : undefined}
            >
              <span className="scf-dot" aria-hidden="true">{i < step ? "✓" : i + 1}</span>
              <span className="scf-step-t">{s.title}</span>
            </li>
          ))}
        </ol>
        <div className="scf-bar" aria-hidden="true">
          <span style={{ width: `${Math.max(pct, 6)}%` }} />
        </div>
      </div>

      <h3 id="scf-title" ref={headRef} tabIndex={-1}>
        Step {step + 1} of {STEPS.length}: {STEPS[step].title}
      </h3>
      <p className="scf-sub">{STEPS[step].hint} Your answers save on this device as you go.</p>

      {errList.length > 0 && (
        <div className="scf-summary" ref={summaryRef} tabIndex={-1} role="alert">
          <b>Please fix {errList.length === 1 ? "this" : `these ${errList.length} things`}:</b>
          <ul>
            {errList.map(([k, msg]) => (
              <li key={k}>{msg}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Honeypot: hidden from people and screen readers */}
      <div className="scf-trap" aria-hidden="true">
        <label htmlFor="company_website">Leave this empty</label>
        <input id="company_website" tabIndex={-1} autoComplete="off" value={trap} onChange={(e) => setTrap(e.target.value)} />
      </div>

      {step === 0 && (
        <div className="scf-grid">
          <Field id="fullName" label="Full name" error={errors.fullName}>
            <input id="fullName" autoComplete="name" value={data.fullName} onChange={set("fullName")}
              aria-invalid={!!errors.fullName} aria-describedby={describedBy("fullName", false, errors.fullName)} />
          </Field>
          <Field id="practiceName" label="Practice name" hint="As you want it on your page." error={errors.practiceName}>
            <input id="practiceName" autoComplete="organization" value={data.practiceName} onChange={set("practiceName")}
              aria-invalid={!!errors.practiceName} aria-describedby={describedBy("practiceName", true, errors.practiceName)} />
          </Field>
          <Field id="email" label="Email we can reach you on" error={errors.email}>
            <input id="email" type="email" inputMode="email" autoComplete="email" value={data.email} onChange={set("email")}
              aria-invalid={!!errors.email} aria-describedby={describedBy("email", false, errors.email)} />
          </Field>
          <Field id="phone" label="Business mobile (for WhatsApp)" hint="Meta will text a code to this number." error={errors.phone}>
            <input id="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="07..." value={data.phone} onChange={set("phone")}
              aria-invalid={!!errors.phone} aria-describedby={describedBy("phone", true, errors.phone)} />
          </Field>
          <Field id="body" label="Professional body" error={errors.body}>
            <select id="body" value={data.body} onChange={set("body")}
              aria-invalid={!!errors.body} aria-describedby={describedBy("body", false, errors.body)}>
              <option value="">Choose one</option>
              {BODIES.map((b) => <option key={b} value={b}>{b}</option>)}
            </select>
          </Field>
          <Field id="membership" label="Membership number" optional>
            <input id="membership" value={data.membership} onChange={set("membership")} />
          </Field>
          <Field id="website" label="Current website or domain" hint="Leave blank if you don't have one. We'll buy one for you." optional>
            <input id="website" inputMode="url" placeholder="yourpractice.co.uk" value={data.website} onChange={set("website")}
              aria-describedby="website-hint" />
          </Field>
        </div>
      )}

      {step === 1 && (
        <>
          <fieldset className="scf-set">
            <legend>Sessions clients can book</legend>
            {data.sessions.map((s, i) => (
              <div className="scf-session" key={i}>
                <Field id={`s${i}name`} label="Session name" error={errors[`s${i}name`]}>
                  <input id={`s${i}name`} value={s.name} onChange={setSession(i, "name")}
                    aria-invalid={!!errors[`s${i}name`]} aria-describedby={describedBy(`s${i}name`, false, errors[`s${i}name`])} />
                </Field>
                <Field id={`s${i}minutes`} label="Minutes" error={errors[`s${i}minutes`]}>
                  <input id={`s${i}minutes`} inputMode="numeric" value={s.minutes} onChange={setSession(i, "minutes")}
                    aria-invalid={!!errors[`s${i}minutes`]} aria-describedby={describedBy(`s${i}minutes`, false, errors[`s${i}minutes`])} />
                </Field>
                <Field id={`s${i}price`} label="Price (£)" error={errors[`s${i}price`]}>
                  <input id={`s${i}price`} inputMode="decimal" value={s.price} onChange={setSession(i, "price")}
                    aria-invalid={!!errors[`s${i}price`]} aria-describedby={describedBy(`s${i}price`, false, errors[`s${i}price`])} />
                </Field>
                {data.sessions.length > 1 && (
                  <button type="button" className="scf-remove" onClick={() => removeSession(i)}
                    aria-label={`Remove ${s.name || "this session"}`}>
                    Remove
                  </button>
                )}
              </div>
            ))}
            {data.sessions.length < 3 && (
              <button type="button" className="scf-add" onClick={addSession}>+ Add another session type</button>
            )}
          </fieldset>

          <div className="scf-grid">
            <fieldset className="scf-set scf-radios">
              <legend>Payment at booking</legend>
              <label><input type="radio" name="payment" value="full" checked={data.payment === "full"} onChange={set("payment")} /> Full price (recommended)</label>
              <label><input type="radio" name="payment" value="deposit" checked={data.payment === "deposit"} onChange={set("payment")} /> A deposit</label>
            </fieldset>
            <fieldset className="scf-set scf-radios">
              <legend>Cancellation notice for a refund</legend>
              <label><input type="radio" name="cancel" value="24" checked={data.cancelNotice === "24"} onChange={set("cancelNotice")} /> 24 hours</label>
              <label><input type="radio" name="cancel" value="48" checked={data.cancelNotice === "48"} onChange={set("cancelNotice")} /> 48 hours</label>
            </fieldset>
            <fieldset className="scf-set scf-radios">
              <legend>Video tool</legend>
              <label><input type="radio" name="video" value="meet" checked={data.video === "meet"} onChange={set("video")} /> Google Meet (free)</label>
              <label><input type="radio" name="video" value="zoom" checked={data.video === "zoom"} onChange={set("video")} /> Zoom (needs Zoom Pro)</label>
              <label><input type="radio" name="video" value="unsure" checked={data.video === "unsure"} onChange={set("video")} /> Not sure, you choose</label>
            </fieldset>
          </div>

          <Field id="availability" label="When do you see clients?" hint="For example: Mon–Thu 9am–6pm, no weekends." error={errors.availability}>
            <textarea id="availability" rows={3} value={data.availability} onChange={set("availability")}
              aria-invalid={!!errors.availability} aria-describedby={describedBy("availability", true, errors.availability)} />
          </Field>
        </>
      )}

      {step === 2 && (
        <div className="scf-grid">
          <Field id="bio" label="A short bio for your page" hint="Who you help and how you work. 2–4 sentences is perfect. Please don't include any client details." error={errors.bio}>
            <textarea id="bio" rows={5} maxLength={800} value={data.bio} onChange={set("bio")}
              aria-invalid={!!errors.bio} aria-describedby={describedBy("bio", true, errors.bio)} />
            <span className="scf-count" aria-live="polite">{data.bio.length}/800</span>
          </Field>
          <Field id="photo" label="Your photo" hint={`JPG or PNG, under ${MAX_FILE_MB} MB.`} error={errors.photo}>
            <input id="photo" type="file" accept="image/jpeg,image/png" onChange={setFile("photo")}
              aria-invalid={!!errors.photo} aria-describedby={describedBy("photo", true, errors.photo)} />
            {files.photo && <span className="scf-file">✓ {files.photo.name}</span>}
          </Field>
          <Field id="logo" label="Logo" hint="If you have one." error={errors.logo} optional>
            <input id="logo" type="file" accept="image/jpeg,image/png,image/svg+xml" onChange={setFile("logo")}
              aria-invalid={!!errors.logo} aria-describedby={describedBy("logo", true, errors.logo)} />
            {files.logo && <span className="scf-file">✓ {files.logo.name}</span>}
          </Field>
          <Field id="colours" label="Brand colours or a website you like" optional>
            <input id="colours" placeholder="Soft green and cream" value={data.colours} onChange={set("colours")} />
          </Field>
        </div>
      )}

      {step === 3 && (
        <>
          <fieldset className="scf-set scf-radios scf-plans">
            <legend>Which plan?</legend>
            {PLANS.map(([v, l]) => (
              <label key={v} className={data.plan === v ? "scf-on" : ""}>
                <input type="radio" name="plan" value={v} checked={data.plan === v} onChange={set("plan")} /> {l}
                {v === "care" && <span className="scf-pill">Most popular</span>}
              </label>
            ))}
          </fieldset>
          {data.plan !== "launch" && (
            <label className="scf-check">
              <input type="checkbox" checked={data.annual} onChange={set("annual")} />
              Pay a year of Care upfront and get setup for £399
            </label>
          )}
          <Field id="ico" label="ICO registration number" hint="If you have one. If not, we'll explain how to register." optional>
            <input id="ico" value={data.ico} onChange={set("ico")} aria-describedby="ico-hint" />
          </Field>
          <div className={`scf-field${errors.consent ? " scf-has-err" : ""}`}>
            <label className="scf-check">
              <input type="checkbox" checked={data.consent} onChange={set("consent")}
                aria-invalid={!!errors.consent} aria-describedby={errors.consent ? "consent-err" : undefined} />
              I agree to be contacted about my setup, and I understand this form is for business details only, not client information.
            </label>
            {errors.consent && <p className="scf-err" id="consent-err">{errors.consent}</p>}
          </div>
          <p className="scf-sub">No payment is taken here. We confirm your plan by email first.</p>
        </>
      )}

      {status === "failed" && (
        <p className="scf-summary" role="alert">
          Sorry, that didn&apos;t send. Please try again. Your answers are still here.
        </p>
      )}

      <div className="scf-nav">
        {step > 0 ? (
          <button type="button" className="scf-back" onClick={() => goTo(step - 1)}>← Back</button>
        ) : <span />}
        {step < STEPS.length - 1 ? (
          <button type="button" className="scn-btn scn-d" onClick={next}>
            Next: {STEPS[step + 1].title} <span aria-hidden="true">→</span>
          </button>
        ) : (
          <button type="submit" className="scn-btn scn-d" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send my details"} <span aria-hidden="true">→</span>
          </button>
        )}
      </div>
    </form>
  );
}