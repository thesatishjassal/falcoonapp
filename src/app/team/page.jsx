import { DM_Sans, Fraunces } from "next/font/google";
import "./team.css";

const CALENDLY = "https://calendly.com/thesatishjassal/free-strategy-call-uk";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const DESCRIPTION =
  "Meet the Falcoon team: the strategist, designer, developer, writer and video editor who build funnels for UK fitness professionals.";

export const metadata = {
  title: "Our Team | Falcoon",
  description: DESCRIPTION,
  alternates: { canonical: "/team" },
  openGraph: {
    title: "Our Team | Falcoon",
    description: DESCRIPTION,
    locale: "en_GB",
    type: "website",
    siteName: "Falcoon",
  },
};

const TEAM = [
  {
    id: "satish",
    name: "Satish Jassal",
    role: "Founder & Strategy Engineer",
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
    id: "hoshima",
    name: "Hoshima Mahey",
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

function TeamCard({ member }) {
  const initials = member.name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

  return (
    <article className="tm-card">
      <div className="tm-avatar" aria-hidden="true">
        {initials}
      </div>
      <h2 className="tm-name">{member.name}</h2>
      <div className="tm-role">{member.role}</div>
      <p className="tm-bio">{member.bio}</p>
    </article>
  );
}

export default function TeamPage() {
  return (
    <main className={`tm-page ${dmSans.variable} ${fraunces.variable}`}>
      {/* HERO */}
      <section className="tm-hero">
        <div className="tm-c">
          <div className="tm-eyebrow">The people behind Falcoon</div>
          <h1 className="tm-h1">
            One team, <em>start to finish.</em>
          </h1>
          <p>
            No handoffs between departments. The same {TEAM.length} people who
            scope your funnel are the ones who{" "}
            <span className="tm-ul tm-green">design it, build it</span>, and
            support it after launch.
          </p>
        </div>
      </section>

      {/* TEAM */}
      <section className="tm-sec">
        <div className="tm-c">
          <div className="tm-grid">
            {TEAM.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="tm-cta">
        <div className="tm-c">
          <div className="tm-label">Work with us</div>
          <h2>
            Meet the team on a <em>free call.</em>
          </h2>
          <p>Fixed pricing, no hidden fees, no obligation.</p>
          <a
            href={CALENDLY}
            className="tm-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Free Website Audit <span>→</span>
          </a>
        </div>
      </section>
    </main>
  );
}
