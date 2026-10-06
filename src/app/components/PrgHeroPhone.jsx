"use client";

import { useEffect, useRef, useState } from "react";

const P = {
  chat: (
    <path d="M21 12a8.5 8.5 0 0 1-12.6 7.4L3 21l1.7-5A8.5 8.5 0 1 1 21 12z" />
  ),
  bell: (
    <>
      <path d="M6 16v-5a6 6 0 0 1 12 0v5l2 2H4z" />
      <path d="M10 21a2 2 0 0 0 4 0" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </>
  ),
  bolt: <path d="M13 2L4 14h7l-1 8 9-12h-7z" />,
  tag: (
    <>
      <path d="M20.6 13.4l-7.2 7.2a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z" />
      <circle cx="7.5" cy="7.5" r="1.3" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4M9 15l2 2 4-4" />
    </>
  ),
};

const Ico = ({ n }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {P[n]}
  </svg>
);

// Illustrative example conversation only.
const MSGS = [
  { r: "in", t: "Hi, saw your 12-week programme. Is it right for me?" },
  {
    r: "out",
    t: "Hi Sam! It's built for busy people who want to lose fat and build strength. What's your goal, and how many days can you train?",
  },
  { r: "in", t: "Lose 10kg, 4 days a week" },
  {
    r: "out",
    t: "Great fit. Free call with the coach: Thu 10:00 or Fri 17:30?",
  },
  { r: "in", t: "Thu 10:00 please" },
  { r: "out", t: "Booked for Thu 10:00. A reminder is on its way." },
];

const STEPS = [
  ["Replied", 2],
  ["Qualified", 4],
  ["Booked", 6],
];

const FLOATS = [
  {
    k: "bolt",
    l: "Instant reply",
    to: 2,
    pos: { left: "0%", top: "24%" },
    dur: "6s",
    del: "0s",
  },
  {
    k: "tag",
    l: "Qualified",
    to: 4,
    pos: { right: "0%", top: "30%" },
    dur: "7s",
    del: "-2s",
  },
  {
    k: "calendar",
    l: "Call booked",
    to: 6,
    pos: { left: "2%", top: "66%" },
    dur: "6.5s",
    del: "-1s",
  },
];

export default function PrgHeroPhone() {
  const tilt = useRef(null);
  const [n, setN] = useState(4);
  const [typing, setTyping] = useState(null);
  const [ring, setRing] = useState(0);
  const [leads, setLeads] = useState(1);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (n >= MSGS.length) {
      const t = setTimeout(() => setN(1), 3500);
      return () => clearTimeout(t);
    }
    const next = MSGS[n];
    const t1 = setTimeout(() => setTyping(next.r), 900);
    const t2 = setTimeout(
      () => {
        setTyping(null);
        setN(n + 1);
        if (next.r === "in") setRing((r) => r + 1);
        if (n + 1 === MSGS.length) setLeads((l) => l + 1);
      },
      900 + (next.r === "out" ? 1400 : 700),
    );
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      setTyping(null);
    };
  }, [n]);

  const jump = (to) => {
    setTyping(null);
    setN(to);
  };

  const onMove = (e) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = e.currentTarget.getBoundingClientRect();
    tilt.current?.style.setProperty(
      "--ry",
      `${((e.clientX - r.left) / r.width - 0.5) * 10}deg`,
    );
    tilt.current?.style.setProperty(
      "--rx",
      `${-((e.clientY - r.top) / r.height - 0.5) * 8}deg`,
    );
  };
  const onLeave = () => {
    tilt.current?.style.setProperty("--ry", "0deg");
    tilt.current?.style.setProperty("--rx", "0deg");
  };

  const start = Math.max(0, n - (typing ? 3 : 4));
  const vis = MSGS.slice(start, n);
  const foot =
    n >= 6
      ? "Qualified and booked while you were offline"
      : n >= 4
        ? "Qualified. Offering call times…"
        : "Replying instantly…";

  return (
    <div
      className="prg-hv2"
      role="group"
      aria-label="Example lead conversation"
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      <div className="prg-hv2-cart" aria-hidden="true">
        <Ico n="user" />
        <span className="prg-hv2-badge" key={leads}>
          {leads}
        </span>
      </div>
      <div className="prg-hv2-bell" aria-hidden="true">
        <span key={ring} className={ring ? "prg-ring" : undefined}>
          <Ico n="bell" />
        </span>
        <i />
      </div>

      {FLOATS.map((f) => (
        <button
          type="button"
          key={f.k}
          className="prg-fl"
          style={{ ...f.pos, "--dur": f.dur, "--del": f.del }}
          aria-label={`Jump to step: ${f.l}`}
          onClick={() => jump(f.to)}
        >
          <span className="prg-fl-i">
            <Ico n={f.k} />
          </span>
        </button>
      ))}
      <span className="prg-coin" aria-hidden="true">
        <Ico n="chat" />
      </span>

      <div className="prg-tilt" ref={tilt}>
        <div className="prg-phone prg-chatphone" aria-hidden="true">
          <div className="prg-chat-h">
            <b>New lead</b>
            <span>Today, 21:47</span>
          </div>
          <div className="prg-steps">
            {STEPS.map(([l, at]) => (
              <span key={l} className={n >= at ? "on" : undefined}>
                {l}
              </span>
            ))}
          </div>
          {vis.map((m, i) => (
            <div className={`prg-bub prg-${m.r} prg-bub-a`} key={start + i}>
              {m.t}
            </div>
          ))}
          {typing && (
            <div className={`prg-bub prg-${typing} prg-typing`}>
              <i />
              <i />
              <i />
            </div>
          )}
          <div className="prg-lock-foot">{foot}</div>
        </div>
      </div>
      <p className="prg-hv2-hint">
        Example chat. Tap an icon to jump to that step.
      </p>
    </div>
  );
}
