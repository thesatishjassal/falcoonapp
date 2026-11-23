"use client";

import { useId, useRef, useState } from "react";

/**
 * Accessible tabs with arrow-key navigation.
 * tabs: [{ id, label, panel }]  (panel is any React node)
 * All panels are rendered (hidden when inactive) so content stays in the HTML.
 */
export default function Tabs({ tabs, label, variant = "dark", layout = "row" }) {
  const base = useId();
  const [active, setActive] = useState(0);
  const refs = useRef([]);

  const onKeyDown = (e) => {
    const n = tabs.length;
    let next = null;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (active + 1) % n;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (active - 1 + n) % n;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = n - 1;
    if (next !== null) {
      e.preventDefault();
      setActive(next);
      refs.current[next]?.focus();
    }
  };

  return (
    <div className={`fc-tabs fc-tabs--${variant} fc-tabs--${layout}`}>
      <div className="fc-tabs__list" role="tablist" aria-label={label} onKeyDown={onKeyDown}>
        {tabs.map((t, i) => (
          <button
            key={t.id}
            ref={(el) => (refs.current[i] = el)}
            type="button"
            role="tab"
            id={`${base}-t-${t.id}`}
            aria-selected={active === i}
            aria-controls={`${base}-p-${t.id}`}
            tabIndex={active === i ? 0 : -1}
            className="fc-tabs__tab"
            onClick={() => setActive(i)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="fc-tabs__panels">
        {tabs.map((t, i) => (
          <div
            key={t.id}
            role="tabpanel"
            id={`${base}-p-${t.id}`}
            aria-labelledby={`${base}-t-${t.id}`}
            hidden={active !== i}
            className="fc-tabs__panel"
          >
            {t.panel}
          </div>
        ))}
      </div>
    </div>
  );
}
