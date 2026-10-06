"use client";
import { useState, useMemo, useEffect, useRef } from "react";

/* ---- EDIT THESE ----
   CORE and SUPPORT come from your live Pricing page.
   Add-on prices below are PLACEHOLDERS: replace with your real rates. */
const CORE = 149;
const SUPPORT = { label: "Ongoing support", price: 39 };
const ADDONS = [
  { id: "wa", name: "WhatsApp reminders", price: 49, desc: "Reminders go to the client's phone, so fewer no-shows." },
  { id: "sms", name: "SMS reminders", price: 39, desc: "Text reminders before every call." },
  { id: "group", name: "Group session booking", price: 79, desc: "Sell seats in a group Q&A with a capacity limit." },
  { id: "types", name: "Extra session type", price: 59, desc: "A second bookable call, e.g. 30-min check-in alongside a 45-min consult." },
  { id: "dd", name: "GoCardless Direct Debit", price: 49, desc: "Take monthly coaching payments after the first call." },
  { id: "crm", name: "CRM and follow-up automation", price: 89, desc: "Zapier/Make/HubSpot flow that sends your next offer after the call." },
];
const NOTES = [
  "Hosting and your domain are free for the first year.",
  "Ad budgets and tool subscriptions (WhatsApp API, CRM, Zoom, etc.) are billed by those providers.",
  "You use your own Stripe, PayPal or GoCardless account, so payments land with you.",
  "This is an estimate. We confirm the final quote after reading your requirements.",
];
const gbp = (n) => "£" + n.toLocaleString("en-GB");

export default function ScnPricing() {
  const [picked, setPicked] = useState([]);
  const [support, setSupport] = useState(false);
  const [open, setOpen] = useState(false);
  const [bar, setBar] = useState(false);
  const [done, setDone] = useState(false);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const [f, setF] = useState({ name: "", email: "", phone: "", notes: "" });
  const first = useRef(null);

  const addons = ADDONS.filter((a) => picked.includes(a.id));
  const total = useMemo(() => CORE + addons.reduce((s, a) => s + a.price, 0), [addons]);
  const toggle = (id) => setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    first.current?.focus();
    const esc = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", esc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", esc);
    };
  }, [open]);

  async function submit(e) {
    e.preventDefault();
    setBusy(true);
    setErr("");
    try {
      const r = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...f,
          service: "Sell Consultations",
          core: CORE,
          addons: addons.map((a) => ({ id: a.id, name: a.name, price: a.price })),
          support,
          estimate: total,
        }),
      });
      if (!r.ok) throw new Error();
      setDone(true);
    } catch {
      setErr("We couldn't send that. Try again, or email hello@falcoon.in with your details.");
    }
    setBusy(false);
  }

  const Summary = ({ cta = true }) => (
    <>
      <div className="scp-line"><span>Consultation funnel</span><b>{gbp(CORE)}</b></div>
      {addons.map((a) => (
        <div className="scp-line" key={a.id}><span>{a.name}</span><b>+{gbp(a.price)}</b></div>
      ))}
      <div className="scp-total"><span>Estimated total, paid once</span><b>{gbp(total)}</b></div>
      {support && <div className="scp-line scp-mo"><span>{SUPPORT.label}</span><b>{gbp(SUPPORT.price)}/mo</b></div>}
      {cta && <button className="scn-btn scp-cta" onClick={() => setOpen(true)}>Request a quote</button>}
    </>
  );

  return (
    <section className="scn-sec scp" id="pricing">
      <div className="scn-c">
        <div className="scn-head" style={{ maxWidth: 720 }}>
          <h2>Simple pricing. <em>Build it your way.</em></h2>
          <p className="scn-lead">Start from {gbp(CORE)} paid once, then add only what your calls need. The total updates as you choose.</p>
        </div>

        <div className="scp-grid">
          <div>
            <div className="scp-core">
              <div>
                <h3>Core consultation funnel</h3>
                <ul>
                  <li>Landing page, checkout and thank-you page</li>
                  <li>Copywriting for every page</li>
                  <li>On-page SEO basics, fully mobile responsive</li>
                  <li>Email notifications set up</li>
                  <li>Hosting and domain free for year one</li>
                </ul>
              </div>
              <b>{gbp(CORE)}<small>one-time</small></b>
            </div>

            <h3 className="scp-h">Add-ons</h3>
            <div className="scp-addons">
              {ADDONS.map((a) => (
                <label key={a.id} className={"scp-ad" + (picked.includes(a.id) ? " on" : "")}>
                  <input type="checkbox" checked={picked.includes(a.id)} onChange={() => toggle(a.id)} />
                  <span><strong>{a.name}</strong><small>{a.desc}</small></span>
                  <b>+{gbp(a.price)}</b>
                </label>
              ))}
              <label className={"scp-ad" + (support ? " on" : "")}>
                <input type="checkbox" checked={support} onChange={() => setSupport(!support)} />
                <span><strong>{SUPPORT.label} (optional)</strong><small>Help after launch. Billed monthly, cancel any time.</small></span>
                <b>{gbp(SUPPORT.price)}/mo</b>
              </label>
            </div>

            <ul className="scp-notes">{NOTES.map((n) => <li key={n}>{n}</li>)}</ul>
          </div>

          <aside className="scp-side" aria-label="Pricing summary">
            <h3>Your estimate</h3>
            <Summary />
          </aside>
        </div>
      </div>

      {/* Mobile expandable bar */}
      <div className={"scp-bar" + (bar ? " open" : "")}>
        {bar && <div className="scp-bar-body"><Summary cta={false} /></div>}
        <div className="scp-bar-row">
          <button className="scp-bar-t" aria-expanded={bar} onClick={() => setBar(!bar)}>
            <small>Estimated total {bar ? "▾" : "▴"}</small><b>{gbp(total)}</b>
          </button>
          <button className="scn-btn" onClick={() => setOpen(true)}>Request a quote</button>
        </div>
      </div>

      {/* Quote drawer */}
      {open && (
        <div className="scp-ov" onClick={() => setOpen(false)}>
          <div className="scp-dr" role="dialog" aria-modal="true" aria-label="Request a quote" onClick={(e) => e.stopPropagation()}>
            <button className="scp-x" onClick={() => setOpen(false)} aria-label="Close">×</button>
            {done ? (
              <div className="scp-done">
                <h3>Quote request sent</h3>
                <p>Thanks {f.name.split(" ")[0]}. We'll review your requirements and email a final quote to {f.email}.</p>
                <div className="scp-box"><Summary cta={false} /></div>
                <button className="scn-btn" onClick={() => { setOpen(false); setDone(false); }}>Back to the page</button>
              </div>
            ) : (
              <form onSubmit={submit}>
                <h3>Request your quote</h3>
                <p className="scp-sub">Sell consultations funnel. Adjust anything below and the total updates.</p>

                <fieldset>
                  <legend>Add-ons</legend>
                  {ADDONS.map((a) => (
                    <label key={a.id} className="scp-mini">
                      <input type="checkbox" checked={picked.includes(a.id)} onChange={() => toggle(a.id)} />
                      <span>{a.name}</span><b>+{gbp(a.price)}</b>
                    </label>
                  ))}
                  <label className="scp-mini">
                    <input type="checkbox" checked={support} onChange={() => setSupport(!support)} />
                    <span>{SUPPORT.label}</span><b>{gbp(SUPPORT.price)}/mo</b>
                  </label>
                </fieldset>

                <div className="scp-box"><Summary cta={false} /></div>

                <label className="scp-f">Your name
                  <input ref={first} required value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} autoComplete="name" />
                </label>
                <label className="scp-f">Email
                  <input required type="email" value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} autoComplete="email" />
                </label>
                <label className="scp-f">Phone or WhatsApp (optional)
                  <input type="tel" value={f.phone} onChange={(e) => setF({ ...f, phone: e.target.value })} autoComplete="tel" />
                </label>
                <label className="scp-f">Requirements or questions
                  <textarea rows={4} value={f.notes} onChange={(e) => setF({ ...f, notes: e.target.value })} placeholder="e.g. I offer 45-min consults and a monthly group Q&A" />
                </label>

                {err && <p className="scp-err" role="alert">{err}</p>}
                <button className="scn-btn scp-cta" disabled={busy}>{busy ? "Sending…" : "Request a quote"}</button>
                <p className="scp-fine">No payment now. You'll get a final quote by email.</p>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}