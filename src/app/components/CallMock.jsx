"use client";

import { useState } from "react";

const PEOPLE = {
  one: ["You (Coach)", "Client"],
  group: ["You (Coach)", "Client 1", "Client 2", "Client 3", "Client 4", "Client 5"],
};

/** Interactive video-call mock: mic and camera can be toggled. */
export default function CallMock({ variant = "one", title, badge }) {
  const [mic, setMic] = useState(true);
  const [cam, setCam] = useState(true);

  return (
    <div className="fc-win">
      <div className="fc-win__bar">
        <div className="fc-dots" aria-hidden="true"><i /><i /><i /></div>
        <div className="fc-win__title">{title}</div>
        <div className="fc-badge">{badge}</div>
      </div>

      <div className={`fc-tiles fc-tiles--${variant}`}>
        {PEOPLE[variant].map((name, i) => {
          const you = i === 0;
          const cls = [
            "fc-tile",
            `fc-tile--${i + 1}`,
            you && mic ? "is-speaking" : "",
            you && !cam ? "is-off" : "",
          ].join(" ");
          return (
            <div key={name} className={cls}>
              <span className="fc-tile__off">Camera off</span>
              <span className="fc-tile__name">
                {name}
                {you && !mic ? " · muted" : ""}
              </span>
            </div>
          );
        })}
      </div>

      <div className="fc-ctrls">
        <button type="button" aria-pressed={mic} onClick={() => setMic((v) => !v)} className={mic ? "" : "is-off"}>
          {mic ? "Mic on" : "Mic off"}
        </button>
        <button type="button" aria-pressed={cam} onClick={() => setCam((v) => !v)} className={cam ? "" : "is-off"}>
          {cam ? "Camera on" : "Camera off"}
        </button>
        <span aria-hidden="true">Share</span>
        <span className="end" aria-hidden="true">Leave</span>
      </div>
    </div>
  );
}
