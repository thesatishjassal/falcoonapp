import { CALENDLY } from "./prgPricingdata";

// secondary: "pricing" (default) or "budget". center: centre the pair.
// dark: only set on sections where the existing .prg-d button is needed (final CTA).
export default function PrgCtaPair({
  secondary = "pricing",
  center = false,
  dark = false,
}) {
  const isBudget = secondary === "budget";
  return (
    <div className={`prg-ctas${center ? " prg-ctas-c" : ""}`}>
      <a
        href={CALENDLY}
        className={`prg-btn${dark ? " prg-d" : ""}`}
        target="_blank"
        rel="noopener"
      >
        Book free website audit <span>→</span>
      </a>
      <a href={isBudget ? "#budget" : "#pricing"} className="prg-btn-ghost">
        {isBudget ? "Estimate your budget" : "See pricing"}
      </a>
    </div>
  );
}
