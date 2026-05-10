"use client";

import { useState } from "react";

export default function SupportFloat() {
  const [open, setOpen] = useState(true);

  return (
    <div className="falcoon-support">
      {/* MAIN BUTTON */}
      <button className="falcoon-support__main" onClick={() => setOpen(!open)}>
        💬
      </button>

      {/* OPTIONS */}
      <div className={`falcoon-support__menu ${open ? "active" : ""}`}>
        <a
          href="https://wa.me/+91 7888467258"
          target="_blank"
          className="falcoon-support__item whatsapp"
        >
          <span>WhatsApp Chat</span>
        </a>

        <a href="tel:++91 7888467258" className="falcoon-support__item call">
          <span>Call Us</span>
        </a>

        <a href="/faqpage" className="falcoon-support__item help">
          <span>Help Center</span>
        </a>
      </div>
    </div>
  );
}
