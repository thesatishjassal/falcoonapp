import { CALENDLY } from "../Sfppricingdata ";

// secondary: "pricing" (default) or "budget". center: centre the pair.
// dark: only set on sections where the existing .sfp-d button is needed (final CTA).
export default function SfpCtaPair({
  secondary = "pricing",
  center = false,
  dark = false,
}) {
  const isBudget = secondary === "budget";
  return (
    <div className={`sfp-ctas${center ? " sfp-ctas-c" : ""}`}>
      <a
        href={CALENDLY}
        className={`sfp-btn${dark ? " sfp-d" : ""}`}
        target="_blank"
        rel="noopener"
      >
        Book free website audit <span>→</span>
      </a>
      <a href={isBudget ? "#budget" : "#pricing"} className="sfp-btn-ghost">
        {isBudget ? "Estimate your budget" : "See pricing"}
      </a>
    </div>
  );
}
