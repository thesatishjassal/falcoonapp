// SAMPLE DATA. Replace with real articles (or load from MDX/CMS) before launch.
export const AUTHOR = {
  name: "Satish Jassal",
  role: "Founder & Strategy Engineer",
};

export const POSTS = [
  {
    slug: "personal-trainer-website-cost-uk",
    title: "How much does a personal trainer website cost in the UK?",
    excerpt:
      "What you're really paying for, where agencies add hidden fees, and how a fixed-price build compares.",
    category: "Pricing",
    date: "2026-10-01",
    readTime: 6,
    // Optional YouTube video. Remove or leave out for posts without one.
    // id = the part after "v=" in the YouTube URL. duration is ISO 8601.
    // video: { id: "YOUR_VIDEO_ID", title: "Personal trainer website cost UK", description: "Short summary of the video.", uploadDate: "2026-10-01", duration: "PT6M30S" },
    sections: [
      {
        h: "Why prices are so hard to compare",
        p: [
          "Agencies price websites in very different ways: one-off builds, monthly retainers, add-on fees for payments or booking. That makes two quotes hard to compare like for like.",
          "Before you compare numbers, compare what's included: design, copy, booking, payments, automation and support after launch.",
        ],
      },
      {
        h: "Questions to ask every provider",
        p: [
          "Ask what is included in the quote, which fees are monthly, who owns the site, and what each extra costs. A good provider answers in writing before you pay.",
          "At Falcoon, a funnel build is a fixed £249 with no hidden fees, so you know the total before we start.",
        ],
      },
    ],
  },
  {
    slug: "direct-debit-for-uk-personal-trainers",
    title: "How to take payments and Direct Debit as a UK personal trainer",
    excerpt:
      "Card, PayPal or Direct Debit? A plain guide to getting paid on time without chasing invoices.",
    category: "Payments",
    date: "2026-09-24",
    readTime: 7,
    sections: [
      {
        h: "Three ways to get paid online",
        p: [
          "Card payments suit one-off sessions and products. PayPal is familiar to many clients. Direct Debit suits monthly coaching because it collects automatically.",
          "Stripe, PayPal and GoCardless cover all three and can be connected to your booking page.",
        ],
      },
      {
        h: "Which should you use?",
        p: [
          "Use cards or PayPal for single bookings and digital programmes. Use Direct Debit for recurring memberships so you stop chasing late payments.",
        ],
      },
    ],
  },
  {
    slug: "get-pt-clients-without-instagram",
    title: "How to get personal training clients without relying on Instagram",
    excerpt:
      "Posting daily and hoping isn't a system. Here's what a simple client-getting funnel looks like instead.",
    category: "Getting clients",
    date: "2026-09-17",
    readTime: 5,
    // Verified real YouTube video (US channel, third-party). Test only: replace with your own UK video.
    // schema:false = embed it, but don't mark it up as Falcoon's own VideoObject.
    video: {
      id: "eUQVpvZPLlU",
      title: "How To Get Personal Training Clients (Sorta Healthy)",
      description:
        "Third-party sample video on getting personal training clients.",
      schema: false,
    },
    sections: [
      {
        h: "The problem with posting and hoping",
        p: [
          "Social media reach changes without warning, and posting takes time you'd rather spend coaching. A funnel gives people one clear place to learn about your offer and book.",
        ],
      },
      {
        h: "What a simple funnel needs",
        p: [
          "A clear offer, a landing page that explains it, a way to book or buy, and automatic follow-up. Each step should have one job.",
        ],
      },
    ],
  },
  {
    slug: "wix-vs-done-for-you-funnel",
    title: "Wix vs a done-for-you funnel for personal trainers",
    excerpt:
      "DIY website builders are cheap to start but cost time. When does a done-for-you funnel make more sense?",
    category: "Comparisons",
    date: "2026-09-10",
    readTime: 6,
    sections: [
      {
        h: "What DIY builders do well",
        p: [
          "Website builders let you launch quickly and control every detail. They work well if you enjoy the process and have time to learn it.",
        ],
      },
      {
        h: "Where done-for-you wins",
        p: [
          "If your time is better spent coaching, a done-for-you build removes design, copy and tool-connecting work. You get a finished system instead of a blank page.",
        ],
      },
    ],
  },
  {
    slug: "stop-client-no-shows",
    title: "How to stop client no-shows with pay-before-session booking",
    excerpt:
      "Clients who've paid turn up. How to set up booking so the session is secured before you speak.",
    category: "Booking",
    date: "2026-09-03",
    readTime: 4,
    sections: [
      {
        h: "Why no-shows happen",
        p: [
          "Free bookings are easy to forget or cancel. When a session is paid for, clients take it more seriously.",
        ],
      },
      {
        h: "How pay-before-session works",
        p: [
          "The client picks a slot, pays at checkout, and receives a confirmation with the Zoom, Meet or Teams link. Your calendar syncs automatically.",
        ],
      },
    ],
  },
  {
    slug: "start-online-coaching-business-uk",
    title: "How to start an online coaching business in the UK",
    excerpt:
      "The offer, the page, the payment and the follow-up: a starter checklist for new online coaches.",
    category: "Getting started",
    date: "2026-08-27",
    readTime: 8,
    sections: [
      {
        h: "Start with one clear offer",
        p: [
          "Decide who you help and what result they get. A narrow offer is easier to explain and easier to sell.",
        ],
      },
      {
        h: "Set up the basics",
        p: [
          "You need a page that explains the offer, a way to take payment, and a booking or onboarding step. Add follow-up messages once those work.",
        ],
      },
    ],
  },
];

export const getPost = (slug) => POSTS.find((p) => p.slug === slug);

export const formatDate = (d) =>
  new Date(d).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
