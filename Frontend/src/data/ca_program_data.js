/**
 * Campus Ambassador (CA) Program Data Configuration
 * ----------------------------------------------------
 * This file contains all the static and dynamic content for the Campus Ambassador page.
 * Developers and content managers can modify the text, numbers, deadlines, and links here
 * without needing to alter any React component or styling logic.
 */

export const caHeroData = {
  eyebrow: "IIT Hyderabad · Elan & nVision",
  headline: "BECOME THE FACE OF ELAN & nVISION ON YOUR CAMPUS!",
  subHeadline:
    "You're not here to just share a poster. You're here to build a movement — one campus, one community, one mission at a time.",
  primaryCTA: "Apply Now →",
  secondaryCTA: "See What's In It For You ↓",
  stats: [
    { label: "Colleges Represented", value: "500+", suffix: "" },
    { label: "Combined Reach", value: "100K+", suffix: "" },
    { label: "Ambassadors Onboarded", value: "1,200+", suffix: "" },
    { label: "Editions Strong", value: "17", suffix: "" },
  ],
};

export const caOverviewData = {
  tag: "WHAT IS THE CA PROGRAM",
  title: "The Role That Puts You at the Centre",
  lead: "The Campus Ambassador Program is how Elan & ηVision reaches beyond IIT Hyderabad — and it works because of one person on every campus who actually cares: you.",
  description:
    "As a CA, you're the bridge between your college and our core team. You bring the fest to your campus before your campus even reaches ours — through content, conversations, and community.",
  highlight:
    "This isn't an internship you forget about in two weeks. It's a mission-based program where every action you take is tracked, rewarded, and recognised.",
};

export const caWhyJoinData = [
  {
    number: "01",
    title: "Lead Your Campus",
    description:
      "You become Elan & ηVision where you study. The buzz, the sign-ups, the college contingent that shows up — that's built by you.",
    icon: "crown",
  },
  {
    number: "02",
    title: "Build a Real Network",
    description:
      "Ambassadors across 500+ colleges. Organisers, fellow CAs, sponsors. The people you meet here don't disappear after the fest ends.",
    icon: "network",
  },
  {
    number: "03",
    title: "Represent IIT Hyderabad",
    description:
      "Carry the name of one of India's premier technical institutes into your own campus, with your name attached to it.",
    icon: "institution",
  },
  {
    number: "04",
    title: "Gain Skills That Actually Transfer",
    description:
      "Outreach, marketing, content, on-ground event management — not theoretical, all of it hands-on, all of it yours to put on a resume.",
    icon: "rocket",
  },
];

export const caResponsibilitiesData = [
  {
    title: "Campus Publicity",
    description:
      "Publicise Elan & ηVision on your campus — sharing posts, promoting official content, and becoming the go-to point of contact for your college.",
  },
  {
    title: "Organise Events & Workshops",
    description:
      "Organise events, workshops, and sessions about Elan & ηVision with dedicated support and resources from our core team.",
  },
  {
    title: "Host Selection Rounds",
    description:
      "Run elimination and selection rounds in your college or city to shortlist participants for premier competitions and hackathons.",
  },
  {
    title: "On-Ground Collaboration",
    description:
      "Collaborate on-ground directly with the IIT Hyderabad core team for city-level activations and outreach events.",
  },
  {
    title: "Complete Core Missions",
    description:
      "Execute regular outreach, content, and event missions assigned periodically by the core team — each earning points on the leaderboard.",
  },
  {
    title: "Drive & Assist Registrations",
    description:
      "Help peers understand how to sign up, use your referral code, and participate in competitions and workshops.",
  },
  {
    title: "Ground Truth Insights",
    description:
      "Give us the ground reality — tell us what students actually look forward to, and flag where our communication can improve.",
  },
  {
    title: "Build & Lead a College Contingent",
    description:
      "Assemble, mentor, and register a delegation from your college for our flagship events, and assist in coordinating their fest travel.",
  },
];

export const caJourneySteps = [
  {
    step: "01",
    title: "Apply",
    summary: "Fill out the simple application form. One step, and you're in the evaluation pipeline.",
  },
  {
    step: "02",
    title: "Get Selected",
    summary:
      "Shortlisting is based on communication, outreach zeal, and social media presence. An active Instagram/LinkedIn with genuine engagement helps.",
  },
  {
    step: "03",
    title: "Onboard",
    summary:
      "Welcome session with the core team, a short training cohort, role doc, an activity calendar, and your dedicated coordinator.",
  },
  {
    step: "04",
    title: "Complete Missions",
    summary:
      "Every action — a verified registration, a workshop promoted, a piece of content, or campus activation — earns leaderboard points.",
  },
  {
    step: "05",
    title: "Climb the Leaderboard",
    summary:
      "Track your verified progress in real time. Higher points unlock tiers of recognition, exclusive merchandise, and cash prizes.",
  },
  {
    step: "06",
    title: "Live the Fest",
    summary:
      "Walk into Elan & ηVision at IIT Hyderabad knowing your campus showed up with pride because of your leadership.",
  },
];

export const caPointsData = {
  intro:
    "Action → Points → Recognition. Every verified activity earns you points on the CA leaderboard. Every CA is scored individually, so your effort is always directly visible.",
  activities: [
    { activity: "Verified Registration", points: 10, category: "Outreach" },
    { activity: "Verified Participation (Competition/Workshop/Fest)", points: 20, category: "Participation" },
    { activity: "Club / Society Collaboration", points: 25, category: "Community" },
    { activity: "Successful On-ground Get-together / Meetup", points: 50, category: "Events" },
    { activity: "Major Campus Activation Event", points: 100, category: "Flagship" },
    { activity: "High-Quality Original Content / Reel", points: "10 – 30", category: "Media" },
    { activity: "College Contingent Milestone Reached", points: "50 – 150", category: "Milestone" },
  ],
  specialRecognitions: [
    { title: "Best Content Creator", desc: "Recognising original, high-engagement visual storytelling." },
    { title: "Best College Network", desc: "Awarded to the CA uniting the highest active student community." },
    { title: "Top Registration Driver", desc: "For driving the maximum verified participants across events." },
    { title: "Best Workshop Promoter", desc: "For exceptional advocacy of technical learning cohorts." },
  ],
};

export const caRewardsData = [
  {
    title: "Official IITH Certificate",
    desc: "Issued upon hitting a minimum activity threshold (e.g. 10 verified registrations) — authenticated by IIT Hyderabad.",
    tag: "Credential",
  },
  {
    title: "Exclusive Fest Merch & Goodies",
    desc: "Limited-edition Elan & ηVision CA apparel, badges, stickers, and festival swag delivered to your door.",
    tag: "Swag",
  },
  {
    title: "Grand Leaderboard Prizes",
    desc: "Top 3 CAs win premium electronic gadgets and prize pools worth ₹50,000+; Top 10 receive exclusive collector merch.",
    tag: "Prizes",
  },
  {
    title: "Complimentary Fest Accommodation",
    desc: "Free on-campus stay at IIT Hyderabad during the 3 days of Elan & ηVision for top-performing ambassadors.",
    tag: "Perk",
  },
  {
    title: "Workshop & Event Passes",
    desc: "Free or subsidized access to flagship tech and cultural workshops scaled to your activity milestones.",
    tag: "Access",
  },
  {
    title: "Referral Discount Codes",
    desc: "Teams registering using your custom referral code unlock discounts, while crediting points directly to your profile.",
    tag: "Rewards",
  },
  {
    title: "Travel Sponsorship Coupons",
    desc: "Special travel vouchers and coupons through official logistics and transit partners.",
    tag: "Transit",
  },
  {
    title: "Internship & Networking Opportunities",
    desc: "Direct recommendation letters, recruiter connections, and internship opportunities for high-impact performers.",
    tag: "Career",
  },
];

export const caKitData = [
  { title: "Social Media Templates", desc: "Ready-to-post Instagram stories, square posts, and high-impact reel assets." },
  { title: "Curated Captions & Hashtags", desc: "Pre-written, punchy copy tested for maximum student engagement." },
  { title: "Personalised Referral Code", desc: "Your unique tracking code offering your friends discounts and awarding you points." },
  { title: "Event Pitch Decks & PDFs", desc: "Official descriptions, prize pools, and rulebooks for every competition." },
  { title: "WhatsApp Broadcast Copy", desc: "Concise, high-conversion message drafts ready to drop in college group chats." },
  { title: "Direct Core Team Hotline", desc: "Dedicated student coordinator on call to answer any queries and support your events." },
];

export const caTimelineData = [
  {
    phase: "Phase 01",
    date: "Early September",
    title: "Announcement & Guidelines",
    desc: "Official announcement goes live — program guidelines, perks catalog, and application forms open nationwide.",
  },
  {
    phase: "Phase 02",
    date: "Till Sept 21",
    title: "Applications Window",
    desc: "Applications open across campuses nationwide with continuous rolling review and candidate shortlisting.",
  },
  {
    phase: "Phase 03",
    date: "Late September",
    title: "Onboarding & Pilot Batch",
    desc: "Selected ambassadors inducted; kit distributed; pilot missions launched to test workflow and coordinator pairing.",
  },
  {
    phase: "Phase 04",
    date: "October",
    title: "Workshops & Tech Verticals",
    desc: "Focus shifts to premier workshops, hackathons, and technical competition preliminary outreach.",
  },
  {
    phase: "Phase 05",
    date: "November – December",
    title: "Fest Full Throttle",
    desc: "Intensive all-hands push across cultural events, pro-nites teaser campaigns, and contingent registration drives.",
  },
  {
    phase: "Phase 06",
    date: "February",
    title: "Awards & Deliverables",
    desc: "Official certificates, cash rewards, and curated goodie kits dispatched to all eligible ambassadors.",
  },
];

export const caCodeOfConductData = [
  "Only share official, verified content — refrain from unofficial claims regarding prize money, dates, or sponsors.",
  "Represent yourself accurately as an official Campus Ambassador, not core fest administrative staff.",
  "Never submit fraudulent registrations, duplicate accounts, or falsified screenshots — zero tolerance policy leading to instant termination.",
  "Never commercialise or resell referral privileges or ambassador merchandise for unauthorized personal profit.",
  "Route any disputes, event hurdles, or participant concerns promptly through your dedicated coordinator.",
  "Provide advance written notice if an assigned on-ground activity or milestone cannot be completed.",
];

export const caFaqData = [
  {
    question: "Who is eligible to apply for the Campus Ambassador program?",
    answer:
      "Any student currently enrolled in an undergraduate, postgraduate, or diploma program at any recognized college or university across India is eligible to apply.",
  },
  {
    question: "Is there a selection process involved?",
    answer:
      "Yes. When applications exceed campus slots, our team shortlists applicants based on communication skills, previous campus involvement, marketing drive, and social media reach.",
  },
  {
    question: "What happens if my academic schedule causes me to go inactive?",
    answer:
      "We understand that exams happen! If you anticipate a busy week, simply inform your coordinator. Two weeks of silence triggers a routine check-in. Inactivity beyond four weeks without prior notice may result in releasing the role to waitlisted candidates.",
  },
  {
    question: "How and when are my points tracked and updated?",
    answer:
      "Points are verified by your coordinator upon submission of simple proof (registration receipts, event photos, post links) and updated on the leaderboard regularly.",
  },
  {
    question: "Do I need to form a team or can I work solo?",
    answer:
      "The program is built around individual initiative and tracking. You don't need a team to be a CA, though you can collaborate with your college clubs and form a student contingent for the fest.",
  },
  {
    question: "What if I need to step down from the program?",
    answer:
      "Life happens! You can step down cleanly at any time by giving your coordinator a brief heads-up. No hard feelings, and any verified points up to that date will still be acknowledged.",
  },
];
