 "use client";

/*
  SfpIntakeForm: "Fill in one form" for the Sell Fitness Products page.
  4 short steps, progress bar, inline validation, saved draft.
  Posts multipart form data to /api/intake (the same route as the
  counselling page), which forwards it to your Make.com webhook.
  Listens for the "sfp-plan" event from SfpPlanPicker to pre-fill the plan.
*/

import { useEffect, useRef, useState } from "react";

const DRAFT_KEY = "sfp-intake-draft-v1";
const MAX_PRODUCTS = 10;
const MAX_FILE_MB = 5;

const STEPS = [
  { id: "you", title: "About you", hint: "So we can set up your accounts." },
  { id: "products", title: "Your products", hint: "What you sell and for how much." },
  { id: "brand", title: "Your brand", hint: "How your store looks and sounds." },
  { id: "plan", title: "Plan and send", hint: "Last check before we start." },
];

const BUILDS = [
  ["digital", "Digital Launch: £499 one-time"],
  ["store", "Store Launch: £699 one-time"],
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
  products: [{ name: "", kind: "digital", price: "" }],
  fulfilment: "none",
  platform: "unsure",
  bio: "",
  colours: "",
  build: "digital",
  care: "care",
  annual: false,
  ads: false,
  claims: false,
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
    d.products.forEach((p, i) => {
      if (!p.name.trim()) e[`p${i}name`] = `Name product ${i + 1}.`;
      if (!(Number(p.price) > 0)) e[`p${i}price`] = `Enter a price in pounds for product ${i + 1}.`;
    });
    const physical = d.products.some((p) => p.kind === "physical");
    if (physical && d.fulfilment === "none")
      e.fulfilment = "You've added a physical product. Tell us how orders will be shipped.";
  }
  if (step === 2) {
    if (d.bio.trim().length < 40) e.bio = "Write at least a couple of sentences (40+ characters).";
    const f = files.logo;
    if (f && f.size > MAX_FILE_MB * 1024 * 1024) e.logo = `Choose an image under ${MAX_FILE_MB} MB.`;
  }
  if (step === 3) {
    const digitalOnly = d.products.every((p) => p.kind === "digital");
    if (d.build === "digital" && !digitalOnly)
      e.build = "Digital Launch is for digital products only. Choose Store Launch for physical products.";
    if (!d.claims) e.claims = "Please confirm this so we can publish your product pages.";
    if (!d.consent) e.consent = "Tick this box so we can contact you and set things up.";
  }
  return e;
}

function Field({ id, label, hint, error, optional, children }) {
  return (
    <div className={`sff-field${error ? " sff-has-err" : ""}`}>
      <label htmlFor={id}>
        {label} {optional && <span className="sff-opt">(optional)</span>}
      </label>
      {hint && <p className="sff-hint" id={`${id}-hint`}>{hint}</p>}
      {children}
      {error && <p className="sff-err" id={`${id}-err`}>{error}</p>}
    </div>
  );
}
const describedBy = (id, hint, error) =>
  [hint ? `${id}-hint` : null, error ? `${id}-err` : null].filter(Boolean).join(" ") || undefined;

export default function SfpIntakeForm() {
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
      setData((d) => ({ ...d, build: p.build ?? d.build, care: p.care ?? d.care, annual: !!p.annual, ads: !!p.ads }));
    };
    window.addEventListener("sfp-plan", onPlan);
    return () => window.removeEventListener("sfp-plan", onPlan);
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
  const setProduct = (i, key) => (e) =>
    setData((d) => ({ ...d, products: d.products.map((p, j) => (j === i ? { ...p, [key]: e.target.value } : p)) }));
  const addProduct = () =>
    setData((d) => ({ ...d, products: [...d.products, { name: "", kind: "digital", price: "" }] }));
  const removeProduct = (i) => setData((d) => ({ ...d, products: d.products.filter((_, j) => j !== i) }));

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
      Object.entries(data).forEach(([k, v]) => fd.append(k, k === "products" ? JSON.stringify(v) : String(v)));
      fd.append("plan", `${data.build}${data.care === "none" ? "" : `+${data.care}`}${data.annual ? " (annual)" : ""}`);
      fd.append("source", "sell-fitness-products");
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

  // Physical products need a store: switch the build automatically
  const needsStore = data.products.some((p) => p.kind === "physical");
  useEffect(() => {
    if (needsStore && data.build === "digital") setData((d) => ({ ...d, build: "store" }));
  }, [needsStore, data.build]);

  const errList = Object.entries(errors);
  const pct = Math.round((step / STEPS.length) * 100);
  const hasPhysical = data.products.some((p) => p.kind === "physical");

  if (status === "done") {
    return (
      <div className="sff sff-done" role="status">
        <h3 ref={headRef} tabIndex={-1}>Thank you, that&apos;s step 1 done.</h3>
        <p>Here&apos;s what happens next:</p>
        <ol className="sff-next">
          <li><b>Next:</b> we email you a secure link to upload product files and photos, plus your Stripe link.</li>
          <li><b>Then:</b> verify Stripe (or Shopify Payments) on your phone. About 10 minutes.</li>
          <li><b>After that:</b> you get a preview of your store to approve. No meetings needed.</li>
        </ol>
      </div>
    );
  }

  return (
    <form className="sff" onSubmit={submit} noValidate aria-labelledby="sff-title">
      <div className="sff-top">
        <ol className="sff-steps" aria-label="Form progress">
          {STEPS.map((s, i) => (
            <li key={s.id} className={i < step ? "sff-done-step" : i === step ? "sff-now" : ""} aria-current={i === step ? "step" : undefined}>
              <span className="sff-dot" aria-hidden="true">{i < step ? "✓" : i + 1}</span>
              <span className="sff-step-t">{s.title}</span>
            </li>
          ))}
        </ol>
        <div className="sff-bar" aria-hidden="true"><span style={{ width: `${Math.max(pct, 6)}%` }} /></div>
      </div>

      <h3 id="sff-title" ref={headRef} tabIndex={-1}>Step {step + 1} of {STEPS.length}: {STEPS[step].title}</h3>
      <p className="sff-sub">{STEPS[step].hint} Your answers save on this device as you go.</p>

      {errList.length > 0 && (
        <div className="sff-summary" ref={summaryRef} tabIndex={-1} role="alert">
          <b>Please fix {errList.length === 1 ? "this" : `these ${errList.length} things`}:</b>
          <ul>{errList.map(([k, msg]) => <li key={k}>{msg}</li>)}</ul>
        </div>
      )}

      <div className="sff-trap" aria-hidden="true">
        <label htmlFor="sfp_company_website">Leave this empty</label>
        <input id="sfp_company_website" tabIndex={-1} autoComplete="off" value={trap} onChange={(e) => setTrap(e.target.value)} />
      </div>

      {step === 0 && (
        <div className="sff-grid">
          <Field id="fullName" label="Full name" error={errors.fullName}>
            <input id="fullName" autoComplete="name" value={data.fullName} onChange={set("fullName")} aria-invalid={!!errors.fullName} aria-describedby={describedBy("fullName", false, errors.fullName)} />
          </Field>
          <Field id="practiceName" label="Brand or business name" hint="As you want it on your store." error={errors.practiceName}>
            <input id="practiceName" autoComplete="organization" value={data.practiceName} onChange={set("practiceName")} aria-invalid={!!errors.practiceName} aria-describedby={describedBy("practiceName", true, errors.practiceName)} />
          </Field>
          <Field id="email" label="Email we can reach you on" error={errors.email}>
            <input id="email" type="email" inputMode="email" autoComplete="email" value={data.email} onChange={set("email")} aria-invalid={!!errors.email} aria-describedby={describedBy("email", false, errors.email)} />
          </Field>
          <Field id="phone" label="Mobile number" hint="For order alerts. We never share it." error={errors.phone}>
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
          <fieldset className="sff-set">
            <legend>What do you sell? <span className="sff-opt">(up to {MAX_PRODUCTS})</span></legend>
            {data.products.map((p, i) => (
              <div className="sff-session sff-product" key={i}>
                <Field id={`p${i}name`} label="Product name" error={errors[`p${i}name`]}>
                  <input id={`p${i}name`} placeholder="12-week strength plan" value={p.name} onChange={setProduct(i, "name")} aria-invalid={!!errors[`p${i}name`]} aria-describedby={describedBy(`p${i}name`, false, errors[`p${i}name`])} />
                </Field>
                <Field id={`p${i}kind`} label="Type">
                  <select id={`p${i}kind`} value={p.kind} onChange={setProduct(i, "kind")}>
                    <option value="digital">Digital</option>
                    <option value="physical">Physical</option>
                  </select>
                </Field>
                <Field id={`p${i}price`} label="Price (£)" error={errors[`p${i}price`]}>
                  <input id={`p${i}price`} inputMode="decimal" value={p.price} onChange={setProduct(i, "price")} aria-invalid={!!errors[`p${i}price`]} aria-describedby={describedBy(`p${i}price`, false, errors[`p${i}price`])} />
                </Field>
                {data.products.length > 1 && (
                  <button type="button" className="sff-remove" onClick={() => removeProduct(i)} aria-label={`Remove ${p.name || `product ${i + 1}`}`}>Remove</button>
                )}
              </div>
            ))}
            {data.products.length < MAX_PRODUCTS && (
              <button type="button" className="sff-add" onClick={addProduct}>+ Add another product</button>
            )}
          </fieldset>

          <div className="sff-grid">
            <fieldset className={`sff-set sff-radios${errors.fulfilment ? " sff-has-err" : ""}`} aria-describedby={errors.fulfilment ? "fulfilment-err" : undefined}>
              <legend>Shipping physical orders</legend>
              <label><input type="radio" name="fulfilment" value="none" checked={data.fulfilment === "none"} onChange={set("fulfilment")} /> I only sell digital products</label>
              <label><input type="radio" name="fulfilment" value="have" checked={data.fulfilment === "have"} onChange={set("fulfilment")} /> I have a fulfilment partner</label>
              <label><input type="radio" name="fulfilment" value="help" checked={data.fulfilment === "help"} onChange={set("fulfilment")} /> Help me choose one</label>
              <label><input type="radio" name="fulfilment" value="self" checked={data.fulfilment === "self"} onChange={set("fulfilment")} /> I ship orders myself</label>
              {errors.fulfilment && <p className="sff-err" id="fulfilment-err">{errors.fulfilment}</p>}
            </fieldset>
            <fieldset className="sff-set sff-radios">
              <legend>Payments today</legend>
              <label><input type="radio" name="platform" value="unsure" checked={data.platform === "unsure"} onChange={set("platform")} /> Nothing yet, set it up for me</label>
              <label><input type="radio" name="platform" value="stripe" checked={data.platform === "stripe"} onChange={set("platform")} /> I have Stripe</label>
              <label><input type="radio" name="platform" value="shopify" checked={data.platform === "shopify"} onChange={set("platform")} /> I have Shopify</label>
              <label><input type="radio" name="platform" value="other" checked={data.platform === "other"} onChange={set("platform")} /> Something else (PayPal, Stan Store…)</label>
            </fieldset>
          </div>
          {hasPhysical && (
            <p className="sff-sub">Physical products need <b>Store Launch</b>. We&apos;ll pre-select it in step 4.</p>
          )}
        </>
      )}

      {step === 2 && (
        <div className="sff-grid">
          <Field id="bio" label="About you and your products" hint="Who your products are for and what makes them different. 2–4 sentences." error={errors.bio}>
            <textarea id="bio" rows={5} maxLength={800} value={data.bio} onChange={set("bio")} aria-invalid={!!errors.bio} aria-describedby={describedBy("bio", true, errors.bio)} />
            <span className="sff-count" aria-live="polite">{data.bio.length}/800</span>
          </Field>
          <Field id="logo" label="Logo" hint={`JPG, PNG or SVG, under ${MAX_FILE_MB} MB.`} error={errors.logo} optional>
            <input id="logo" type="file" accept="image/jpeg,image/png,image/svg+xml" onChange={(e) => setFiles({ logo: e.target.files?.[0] || null })} aria-invalid={!!errors.logo} aria-describedby={describedBy("logo", true, errors.logo)} />
            {files.logo && <span className="sff-file">✓ {files.logo.name}</span>}
          </Field>
          <Field id="colours" label="Brand colours or a store you like" optional>
            <input id="colours" placeholder="Black and lime green" value={data.colours} onChange={set("colours")} />
          </Field>
          <p className="sff-hint">Product photos and files come later, through a secure upload link we email you. No need to attach them here.</p>
        </div>
      )}

      {step === 3 && (
        <>
          <div className="sff-grid">
            <fieldset className={`sff-set sff-radios sff-plans${errors.build ? " sff-has-err" : ""}`}>
              <legend>Your build</legend>
              {BUILDS.map(([v, l]) => (
                <label key={v}>
                  <input type="radio" name="build" value={v} checked={data.build === v} disabled={hasPhysical && v === "digital"} onChange={set("build")} /> {l}
                </label>
              ))}
              {errors.build && <p className="sff-err">{errors.build}</p>}
            </fieldset>
            <fieldset className="sff-set sff-radios sff-plans">
              <legend>Monthly care</legend>
              {CARES.map(([v, l]) => (
                <label key={v}>
                  <input type="radio" name="care" value={v} checked={data.care === v} onChange={set("care")} /> {l}
                  {v === "care" && <span className="sff-pill">Most popular</span>}
                </label>
              ))}
            </fieldset>
          </div>
          {data.care !== "none" && (
            <label className="sff-check">
              <input type="checkbox" checked={data.annual} onChange={set("annual")} />
              Pay a year of Care upfront and save £100 on the build
            </label>
          )}
          <label className="sff-check">
            <input type="checkbox" checked={data.ads} onChange={set("ads")} />
            Add Meta and Google Ads setup (£149 one-time, ad budget paid to Meta or Google)
          </label>
          <div className={`sff-field${errors.claims ? " sff-has-err" : ""}`}>
            <label className="sff-check">
              <input type="checkbox" checked={data.claims} onChange={set("claims")} aria-invalid={!!errors.claims} aria-describedby={errors.claims ? "claims-err" : undefined} />
              I&apos;m responsible for my product descriptions and any health claims, and any reviews I share are from real customers.
            </label>
            {errors.claims && <p className="sff-err" id="claims-err">{errors.claims}</p>}
          </div>
          <div className={`sff-field${errors.consent ? " sff-has-err" : ""}`}>
            <label className="sff-check">
              <input type="checkbox" checked={data.consent} onChange={set("consent")} aria-invalid={!!errors.consent} aria-describedby={errors.consent ? "consent-err" : undefined} />
              I agree to be contacted about my setup.
            </label>
            {errors.consent && <p className="sff-err" id="consent-err">{errors.consent}</p>}
          </div>
          <p className="sff-sub">No payment is taken here. We confirm your plan by email first.</p>
        </>
      )}

      {status === "failed" && <p className="sff-summary" role="alert">Sorry, that didn&apos;t send. Please try again. Your answers are still here.</p>}

      <div className="sff-nav">
        {step > 0 ? <button type="button" className="sff-back" onClick={() => goTo(step - 1)}>← Back</button> : <span />}
        {step < STEPS.length - 1 ? (
          <button type="button" className="sfp-btn sfp-d" onClick={next}>Next: {STEPS[step + 1].title} <span aria-hidden="true">→</span></button>
        ) : (
          <button type="submit" className="sfp-btn sfp-d" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send my details"} <span aria-hidden="true">→</span></button>
        )}
      </div>
    </form>
  );
}