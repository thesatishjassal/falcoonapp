"use client";

import "./team.css";

/* ─────────────────────────────────────────────
   TEAM DATA
───────────────────────────────────────────── */

const TEAM = [
  {
    id: "satish",
    name: "Satish Jassal",
    role: "CEO & Strategy Engineer",
    bio: "Plans the funnel before a single page gets built — audience, offer, and the numbers that need to work.",
  },
  {
    id: "parmod",
    name: "Parmod Aheer",
    role: "Graphic Designer & UI/UX Designer",
    bio: "Turns your offer into a landing page people actually want to read to the end, and buy from.",
  },
  {
    id: "twinkle",
    name: "Twinkle Sharma",
    role: "Video Editor",
    bio: "Cuts the VSLs, ad creative, and social clips that carry your funnel's message.",
  },
  {
    id: "ashima",
    name: "Ashima",
    role: "Social Media Marketer & Full-Stack Developer",
    bio: "Keeps your brand active across social while also building out the tech behind your funnel.",
  },
  {
    id: "hoshia",
    name: "Hoshia Mahey",
    role: "Sr. Sales Executive",
    bio: "Talks new clients through what a funnel needs before the team ever starts building.",
  },
  {
    id: "ashima-dev",
    name: "Ashima",
    role: "Full Stack Developer",
    bio: "Builds the checkout, hosting, and integrations so every funnel loads fast and never drops a sale.",
  },
  {
    id: "munit",
    name: "Munit Ralh",
    role: "Content Writer",
    bio: "Writes the copy that carries each funnel — landing pages, emails, and ad scripts that actually get read.",
  },
];

/* ─────────────────────────────────────────────
   TEAM CARD
───────────────────────────────────────────── */

function TeamCard({ member }) {
  const initials = member.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <div className="team-card">
      <div className="team-avatar">{initials}</div>

      <h3 className="team-name">{member.name}</h3>
      <div className="team-role">{member.role}</div>

      <p className="team-bio">{member.bio}</p>
    </div>
  );
}

/* ─────────────────────────────────────────────
   TEAM PAGE
───────────────────────────────────────────── */

export default function TeamPage() {
  return (
    <div className="wrap">
      <div className="hero">
        <div className="hero-eyebrow">The people behind Falcoon</div>

        <h1>One team, start to finish.</h1>

        <p>
          No handoffs between departments. The same six people who scope
          your funnel are the ones who design it, build it, and support it
          after launch.
        </p>
      </div>

      <div className="team-grid">
        {TEAM.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
}