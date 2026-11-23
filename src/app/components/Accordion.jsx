"use client";

import { useId, useState } from "react";

/**
 * Accessible single-open accordion.
 * items: [{ title, body, meta? }]
 */
export default function Accordion({ items, defaultOpen = 0, variant = "light" }) {
  const base = useId();
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={`fc-acc fc-acc--${variant}`}>
      {items.map((item, i) => {
        const isOpen = open === i;
        const btnId = `${base}-b${i}`;
        const panelId = `${base}-p${i}`;

        return (
          <div key={item.title} className="fc-acc__item" data-open={isOpen}>
            <h3 className="fc-acc__heading">
              <button
                id={btnId}
                type="button"
                className="fc-acc__btn"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                {item.meta && <span className="fc-acc__meta">{item.meta}</span>}
                <span className="fc-acc__title">{item.title}</span>
                <span className="fc-acc__icon" aria-hidden="true" />
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={btnId} className="fc-acc__panel">
              <div className="fc-acc__inner">
                <p className="fc-acc__body">{item.body}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
