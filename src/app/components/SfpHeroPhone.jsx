"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const P = {
  cart: (
    <>
      <circle cx="9" cy="20" r="1.5" />
      <circle cx="18" cy="20" r="1.5" />
      <path d="M2 3h3l2.6 11.5a1 1 0 0 0 1 .8h8.8a1 1 0 0 0 1-.8L20 7H6" />
    </>
  ),
  bell: (
    <>
      <path d="M6 16v-5a6 6 0 0 1 12 0v5l2 2H4z" />
      <path d="M10 21a2 2 0 0 0 4 0" />
    </>
  ),
  pdf: (
    <>
      <path d="M6 2h8l5 5v15H6z" />
      <path d="M14 2v5h5" />
      <text
        x="12.5"
        y="17"
        textAnchor="middle"
        fontSize="5.5"
        fontWeight="700"
        fill="currentColor"
        stroke="none"
      >
        PDF
      </text>
    </>
  ),
  shaker: (
    <>
      <path d="M7 8h10l-1 13H8z" />
      <path d="M8 4h8v4H8z" />
      <path d="M10 4V2h4v2" />
      <path d="M9.5 14h5" />
    </>
  ),
  mat: (
    <>
      <rect x="3" y="8" width="18" height="8" rx="4" />
      <circle cx="17" cy="12" r="2.2" />
      <path d="M6.5 10.5h6" />
    </>
  ),
  dumbbell: <path d="M6 7v10M18 7v10M3 10v4M21 10v4M6 12h12" />,
  box: (
    <>
      <path d="M3 7l9-4 9 4v10l-9 4-9-4z" />
      <path d="M3 7l9 4 9-4M12 11v10" />
    </>
  ),
  pound: (
    <>
      <circle cx="12" cy="12" r="9" />
      <text
        x="12"
        y="16.5"
        textAnchor="middle"
        fontSize="12"
        fontWeight="700"
        fill="currentColor"
        stroke="none"
      >
        £
      </text>
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

// Illustrative example orders only.
const ORDERS = [
  { k: "pdf", t: "12-week strength plan", s: "PDF delivered", p: 49 },
  { k: "shaker", t: "Whey protein", s: "sent to fulfilment", p: 34.99 },
  { k: "box", t: "Starter bundle", s: "paid with Apple Pay", p: 59 },
  { k: "mat", t: "Yoga mat", s: "sent to fulfilment", p: 29 },
  { k: "dumbbell", t: "Dumbbell set", s: "sent to fulfilment", p: 69 },
];

const FLOATS = [
  { i: 0, k: "pdf", pos: { left: "0%", top: "22%" }, dur: "6s", del: "0s" },
  {
    i: 1,
    k: "shaker",
    pos: { right: "0%", top: "28%" },
    dur: "7s",
    del: "-2s",
  },
  { i: 3, k: "mat", pos: { left: "1%", top: "64%" }, dur: "6.5s", del: "-1s" },
  {
    i: 4,
    k: "dumbbell",
    pos: { right: "2%", top: "70%" },
    dur: "7.5s",
    del: "-3s",
  },
];

function useCountUp(target) {
  const [v, setV] = useState(target);
  const from = useRef(target);
  useEffect(() => {
    const start = from.current;
    const t0 = performance.now();
    let raf;
    const step = (now) => {
      const k = Math.min(1, (now - t0) / 700);
      const val = start + (target - start) * (1 - Math.pow(1 - k, 3));
      from.current = val;
      setV(val);
      if (k < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target]);
  return v;
}

export default function SfpHeroPhone() {
  const uid = useRef(3);
  const tilt = useRef(null);
  const [feed, setFeed] = useState(() =>
    [ORDERS[2], ORDERS[0], ORDERS[1]].map((o, i) => ({ ...o, id: i })),
  );
  const [stats, setStats] = useState({ total: 142.99, count: 3 });
  const [ring, setRing] = useState(0);
  const [pops, setPops] = useState([]);
  const shown = useCountUp(stats.total);

  const add = useCallback((i) => {
    const o = ORDERS[i];
    const id = ++uid.current;
    setFeed((f) => [{ ...o, id }, ...f].slice(0, 3));
    setStats((s) =>
      s.total > 350
        ? { total: o.p, count: 1 }
        : { total: s.total + o.p, count: s.count + 1 },
    );
    setRing((r) => r + 1);
    setPops((p) => [...p, { id, text: `+£${o.p.toFixed(2)}` }]);
    setTimeout(() => setPops((p) => p.filter((x) => x.id !== id)), 1500);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const seq = [3, 0, 4, 1, 2];
    let n = 0;
    const id = setInterval(() => {
      if (!document.hidden) add(seq[n++ % seq.length]);
    }, 2800);
    return () => clearInterval(id);
  }, [add]);

  const onMove = (e) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    tilt.current?.style.setProperty("--ry", `${x * 10}deg`);
    tilt.current?.style.setProperty("--rx", `${-y * 8}deg`);
  };
  const onLeave = () => {
    tilt.current?.style.setProperty("--ry", "0deg");
    tilt.current?.style.setProperty("--rx", "0deg");
  };

  return (
    <div
      className="sfp-hv2"
      role="group"
      aria-label="Example store activity"
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      <div className="sfp-hv2-cart" aria-hidden="true">
        <Ico n="cart" />
        <span className="sfp-hv2-badge" key={stats.count}>
          {stats.count}
        </span>
      </div>
      <div className="sfp-hv2-bell" aria-hidden="true">
        <span key={ring} className={ring ? "sfp-ring" : undefined}>
          <Ico n="bell" />
        </span>
        <i />
      </div>

      {FLOATS.map((f) => (
        <button
          type="button"
          key={f.k}
          className="sfp-fl"
          style={{ ...f.pos, "--dur": f.dur, "--del": f.del }}
          aria-label={`Add ${ORDERS[f.i].t} order to the example`}
          onClick={() => add(f.i)}
        >
          <span className="sfp-fl-i">
            <Ico n={f.k} />
          </span>
        </button>
      ))}
      <span className="sfp-coin" aria-hidden="true">
        <Ico n="pound" />
      </span>

      <div className="sfp-tilt" ref={tilt}>
        <div className="sfp-phone" aria-hidden="true">
          <div className="sfp-lock-time">02:14</div>
          <div className="sfp-lock-date">Tuesday</div>
          {feed.map((o, i) => (
            <div className="sfp-note sfp-note-in" key={o.id}>
              <span className="sfp-ni">
                <Ico n={o.k} />
              </span>
              <div>
                <div className="sfp-nh">
                  <span>Your store</span>
                  <span>
                    {i === 0 ? "now" : i === 1 ? "moments ago" : "earlier"}
                  </span>
                </div>
                <strong>New order · £{o.p.toFixed(2)}</strong>
                <span>
                  {o.t}, {o.s}
                </span>
              </div>
            </div>
          ))}
          <div className="sfp-lock-foot">
            £{shown.toFixed(2)} while you slept
          </div>
        </div>
        {pops.map((p) => (
          <span className="sfp-pop" key={p.id} aria-hidden="true">
            {p.text}
          </span>
        ))}
      </div>
      <p className="sfp-hv2-hint">
        Example activity. Tap an item to add an order.
      </p>
    </div>
  );
}
