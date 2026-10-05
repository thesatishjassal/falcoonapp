export const problems = [
  {
    title: "Endless DMs about price and availability",
    body: "Every enquiry turns into a thread of messages before anyone has booked. A booking page answers price, availability and what's included up front.",
  },
  {
    title: "Unpaid calls and no-shows",
    body: "When a call costs the client nothing, it's easy to skip. Payment at booking means everyone who turns up has already committed.",
  },
  {
    title: "Sending meeting links by hand",
    body: "Creating a Zoom or Meet link for every call and pasting it into a message is admin that should happen on its own.",
  },
  {
    title: "Double-booked diaries",
    body: "With your calendar synced, only the slots you're genuinely free for can be booked.",
  },
];

export const funnelSteps = [
  { meta: "01", title: "Discover", body: "A page in your voice that explains who the consultation is for and what they walk away with." },
  { meta: "02", title: "Choose a time", body: "Clients pick from your real availability, with no back-and-forth." },
  { meta: "03", title: "Pay", body: "Payment is taken at the point of booking, so the slot is only held once it's paid." },
  { meta: "04", title: "Confirm", body: "The client gets an instant confirmation with their Zoom or Meet link and calendar invite." },
  { meta: "05", title: "Remind", body: "Automatic reminders before the call, so fewer no-shows and less admin." },
  { meta: "06", title: "Next step", body: "After the call, invite them into coaching or a programme while the conversation is fresh." },
];

export const features = [
  {
    title: "Auto booking funnels",
    body: "A dedicated page where clients choose a time and book themselves in, so there are no DMs, no emails and no waiting for you to reply.",
  },
  {
    title: "Paid Zoom/Meet integration",
    body: "Payment is taken at booking and the Zoom or Google Meet link is sent automatically. The call only exists once it's paid for.",
  },
  {
    title: "Smart calendar sync",
    body: "Bookings drop straight into your calendar and respect your availability, so there are no double-bookings and no manual updates.",
  },
];

export const integrations = [
  {
    id: "payments",
    label: "Payments",
    title: "Get paid at booking",
    body: "Take payment at the moment of booking, by card, PayPal or digital wallet.",
    chips: [
      ["Stripe", "#635bff"],
      ["PayPal", "#003087"],
      ["Apple Pay", "#111111"],
      ["Google Pay", "#4285f4"],
    ],
  },
  {
    id: "video",
    label: "Video calls",
    title: "Meeting links, created for you",
    body: "A unique meeting link is generated for every booking and sent to the client.",
    chips: [
      ["Zoom", "#2d8cff"],
      ["Google Meet", "#00897b"],
      ["Microsoft Teams", "#5059c9"],
    ],
  },
  {
    id: "calendars",
    label: "Calendars",
    title: "Always in sync",
    body: "Your availability is read from your calendar and every booking is written back to it.",
    chips: [
      ["Google Calendar", "#4285f4"],
      ["Outlook", "#0078d4"],
      ["Apple Calendar", "#fa3e3e"],
    ],
  },
  {
    id: "messaging",
    label: "Email & messaging",
    title: "Confirmations and reminders",
    body: "Instant confirmations and timed reminders, sent without you lifting a finger.",
    chips: [
      ["Email", "#ea4335"],
      ["WhatsApp", "#25d366"],
      ["SMS", "#6b6b6b"],
      ["Mailchimp", "#ffb800"],
    ],
  },
  {
    id: "automation",
    label: "Automation & CRM",
    title: "Follow-ups on autopilot",
    body: "Send every booking into your tools and trigger the next offer after the call.",
    chips: [
      ["Zapier", "#ff4a00"],
      ["Make", "#6d00cc"],
      ["HubSpot", "#ff7a59"],
      ["Google Sheets", "#0f9d58"],
      ["Notion", "#222222"],
    ],
  },
  {
    id: "other",
    label: "Your own stack",
    title: "Using something else?",
    body: "If it connects through Zapier or Make, we can wire it into your funnel.",
    chips: [],
  },
];

export const automationNodes = [
  { tool: "Booking page", title: "Client picks a time", text: "Chosen from your real availability." },
  { tool: "Stripe · PayPal", title: "Payment taken", text: "The slot is secured once paid." },
  { tool: "Zoom · Google Meet", title: "Link created", text: "Unique meeting link generated." },
  { tool: "Google · Outlook", title: "Calendar updated", text: "Added for you and the client." },
  { tool: "Email · WhatsApp · SMS", title: "Reminders sent", text: "Fewer no-shows, less admin." },
  { tool: "CRM · Zapier · Make", title: "Follow-up triggered", text: "Next offer sent after the call." },
];

export const partnershipChecks = [
  "Consultation landing page in your brand",
  "Auto booking funnel",
  "Payment at booking",
  "Zoom/Meet links sent automatically",
  "Calendar sync and reminders",
  "Mobile-first experience",
];
