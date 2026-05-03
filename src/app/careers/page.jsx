// Falcoon Careers Page — careers.jsx
// Paste into your Next.js pages/careers.jsx or app/careers/page.jsx

"use client";
import { useState } from "react";
import Link from "next/link";

import ApplyModal from "../components/applymodal";

const ROLES = [
  {
    id: 1,
    title: "Full-Stack Developer",
    type: "Full-time",
    location: "Remote · India",
    dept: "Engineering",
    badge: "🛠️",
    desc: "Build and scale our fitness SaaS platform. You'll work across Next.js, Node.js, and cloud infra to ship features used by hundreds of gym owners.",
    skills: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    id: 2,
    title: "UI/UX Designer",
    type: "Full-time",
    location: "Remote · India",
    dept: "Design",
    badge: "🎨",
    desc: "Own the end-to-end design process — from user research to pixel-perfect Figma files. You care about craft as much as conversion.",
    skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
  },
  {
    id: 3,
    title: "Fitness Business Consultant",
    type: "Contract",
    location: "Hybrid · Punjab",
    dept: "Growth",
    badge: "💪",
    desc: "Help gym owners understand how Falcoon can transform their business. You know the fitness industry and can translate tech into results.",
    skills: ["Fitness Industry", "Sales", "CRM", "Strategy"],
  },
  {
    id: 4,
    title: "Growth & Performance Marketer",
    type: "Full-time",
    location: "Remote · India",
    dept: "Marketing",
    badge: "📈",
    desc: "Drive qualified leads through paid, organic, and referral channels. Own our funnel from awareness to activation.",
    skills: ["Meta Ads", "SEO", "Analytics", "Copywriting"],
  },
  {
    id: 5,
    title: "Customer Success Manager",
    type: "Full-time",
    location: "Remote · India",
    dept: "Support",
    badge: "🤝",
    desc: "Be the bridge between our clients and our product. Onboard gym owners, resolve blockers, and drive long-term retention.",
    skills: ["Onboarding", "Retention", "Communication", "CRM"],
  },
];

const PERKS = [
  {
    icon: "🌍",
    title: "Remote First",
    desc: "Work from anywhere in India. Results over attendance.",
  },
  {
    icon: "📚",
    title: "Learning Budget",
    desc: "₹20,000/year for courses, books, and conferences.",
  },
  {
    icon: "🏥",
    title: "Health Coverage",
    desc: "Medical insurance for you and your family.",
  },
  {
    icon: "⚡",
    title: "Fast Decisions",
    desc: "No bureaucracy. Ship, learn, and iterate quickly.",
  },
  {
    icon: "🎯",
    title: "Equity Options",
    desc: "Early team members get ESOPs. Grow with us.",
  },
  {
    icon: "🏋️",
    title: "Gym Membership",
    desc: "Free membership at any partner gym near you.",
  },
];

const DEPTS = [
  "All",
  "Engineering",
  "Design",
  "Growth",
  "Marketing",
  "Support",
];

export default function CareersPage() {
  const [activeDept, setActiveDept] = useState("All");
  const [openRole, setOpenRole] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");
  const filtered =
    activeDept === "All" ? ROLES : ROLES.filter((r) => r.dept === activeDept);

  return (
    <main className="careers">
      {/* ── HERO ── */}
      <section className="careers__hero">
        <div className="falcoon-container">
          <div className="careers__hero-inner">
            <span className="careers__eyebrow">We're hiring</span>
            <h1 className="careers__hero-title">
              Build the future of
              <br />
              <span className="careers__hero-accent">fitness businesses</span>
            </h1>
            <p className="careers__hero-desc">
              Join a small, ambitious team helping gym owners across India grow
              smarter with technology. Remote-friendly, fast-moving, and
              genuinely fun.
            </p>
            <div className="careers__hero-stats">
              <div className="careers__stat">
                <span className="careers__stat-num">12</span>
                <span className="careers__stat-label">Team members</span>
              </div>
              <div className="careers__stat-divider" />
              <div className="careers__stat">
                <span className="careers__stat-num">5</span>
                <span className="careers__stat-label">Open roles</span>
              </div>
              <div className="careers__stat-divider" />
              <div className="careers__stat">
                <span className="careers__stat-num">100%</span>
                <span className="careers__stat-label">Remote-friendly</span>
              </div>
            </div>
          </div>
        </div>
        <div className="careers__hero-blob" aria-hidden />
      </section>

      {/* ── PERKS ── */}
      <section className="careers__perks">
        <div className="falcoon-container">
          <h2 className="careers__section-title">Why Falcoon?</h2>
          <p className="careers__section-sub">
            We believe great people deserve great environments.
          </p>
          <div className="careers__perks-grid">
            {PERKS.map((p) => (
              <div className="careers__perk-card" key={p.title}>
                <span className="careers__perk-icon">{p.icon}</span>
                <h3 className="careers__perk-title">{p.title}</h3>
                <p className="careers__perk-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPEN ROLES ── */}
      <section className="careers__roles">
        <div className="falcoon-container">
          <h2 className="careers__section-title">Open Positions</h2>
          <p className="careers__section-sub">Find your place on the team.</p>

          {/* Filter tabs */}
          <div className="careers__filters">
            {DEPTS.map((d) => (
              <button
                key={d}
                className={`careers__filter-btn ${
                  activeDept === d ? "careers__filter-btn--active" : ""
                }`}
                onClick={() => setActiveDept(d)}
              >
                {d}
              </button>
            ))}
          </div>

          {/* Role cards */}
          <div className="careers__roles-list">
            {filtered.map((role) => (
              <div key={role.id} className="careers__role-card">
                <div
                  className="careers__role-header"
                  onClick={() =>
                    setOpenRole(openRole === role.id ? null : role.id)
                  }
                >
                  <div className="careers__role-left">
                    <span className="careers__role-badge">{role.badge}</span>
                    <div>
                      <h3 className="careers__role-title">{role.title}</h3>
                      <div className="careers__role-meta">
                        <span className="careers__role-tag careers__role-tag--dept">
                          {role.dept}
                        </span>
                        <span className="careers__role-tag">{role.type}</span>
                        <span className="careers__role-tag">
                          📍 {role.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  <span
                    className={`careers__role-chevron ${
                      openRole === role.id ? "open" : ""
                    }`}
                  >
                    ▼
                  </span>
                </div>

                {openRole === role.id && (
                  <div className="careers__role-body">
                    <p className="careers__role-desc">{role.desc}</p>
                    <div className="careers__role-skills">
                      {role.skills.map((s) => (
                        <span className="careers__skill-tag" key={s}>
                          {s}
                        </span>
                      ))}
                    </div>
                    <div className="careers__role-actions">
                      <button
                        className="careers__apply-btn falcoon-btn falcoon-btn--dark"
                        onClick={() => {
                          setSelectedRole(role.title);
                          setIsModalOpen(true);
                        }}
                      >
                        Apply Now →
                      </button>
                      <a
                        href="https://calendly.com/thesatishjassal/falcoon-fitness-business-strategy-call"
                        className="careers__chat-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        📞 Chat first
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {filtered.length === 0 && (
              <div className="careers__empty">
                <span>🔍</span>
                <p>
                  No open roles in this department right now.
                  <br />
                  Check back soon or send us a general application.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
      <ApplyModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        role={selectedRole}
      />
      {/* ── GENERAL APPLICATION CTA ── */}
      <section className="careers__cta">
        <div className="falcoon-container">
          <div className="careers__cta-inner">
            <h2 className="careers__cta-title">Don't see your role?</h2>
            <p className="careers__cta-desc">
              We're always looking for exceptional people. Send us your story
              and we'll reach out when the right opportunity opens up.
            </p>
            <a
              href="mailto:thesatishjassal@gmail.com?subject=General Application"
              className="careers__cta-btn"
            >
              Send a General Application ✉️
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
