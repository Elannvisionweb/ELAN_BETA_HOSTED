import React, { useState, useMemo } from "react";
import { Helmet } from "react-helmet";
import VerticalMarquee from "/src/components/VerticalMarquee/VerticalMarquee.jsx";
import ApplyModal from "./components/ApplyModal.jsx";
import FAQAccordion from "./components/FAQAccordion.jsx";
import { caFaqData } from "/src/data/ca_program_data.js";
import "./CampusAmbassador.css";

// Official assets
import festCrowdImg from "/src/assets/images/20.jpg";
import festLogoImg from "/src/assets/logo/white_horizontal_no_bg_cropped_left.png";

export default function CampusAmbassador() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("outreach");
  const [activeSimulatorTasks, setActiveSimulatorTasks] = useState([0, 1, 3]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Interactive task list for the points & rewards calculator
  const simulatorTasks = [
    { id: 0, title: "Drive 10 Verified Event Registrations", points: 100, tag: "OUTREACH" },
    { id: 1, title: "Share Official Fest Announcements on Social Media", points: 30, tag: "MEDIA" },
    { id: 2, title: "Host a College Club / Society Collaboration Meet", points: 50, tag: "COMMUNITY" },
    { id: 3, title: "Coordinate Campus Prelims / Selection Round", points: 100, tag: "FLAGSHIP" },
    { id: 4, title: "Lead a 25+ Student Contingent to IIT Hyderabad", points: 150, tag: "CONTINGENT" },
    { id: 5, title: "Distribute Official Posters & Class Announcements", points: 40, tag: "PUBLICITY" },
  ];

  const totalPoints = useMemo(() => {
    return activeSimulatorTasks.reduce((acc, id) => {
      const task = simulatorTasks.find((t) => t.id === id);
      return acc + (task ? task.points : 0);
    }, 0);
  }, [activeSimulatorTasks]);

  const toggleSimulatorTask = (id) => {
    setActiveSimulatorTasks((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  // Unlocked milestone rewards tier
  const unlockedTier = useMemo(() => {
    if (totalPoints >= 300) {
      return {
        name: "Platinum Delegate",
        tierCode: "TIER 04 / PLATINUM",
        perks: [
          "Free 3-Day Stay at IIT Hyderabad Hostels",
          "VIP Artist & Backstage Pass for Pro-Nites",
          "Letter of Recommendation Authenticated by IITH",
          "Grand Incentive Share (₹50,000+ Pool)",
          "Official Fest Hoodie & Collector Swag Box",
        ],
        progress: 100,
      };
    } else if (totalPoints >= 180) {
      return {
        name: "Gold Ambassador",
        tierCode: "TIER 03 / GOLD",
        perks: [
          "Free 3-Day Stay at IIT Hyderabad Hostels",
          "Signed Certificate of Excellence from IIT Hyderabad",
          "Complimentary Access to Flagship Workshops",
          "Official Fest Crew T-Shirt & Goodies Kit",
        ],
        progress: 75,
      };
    } else if (totalPoints >= 80) {
      return {
        name: "Silver Representative",
        tierCode: "TIER 02 / SILVER",
        perks: [
          "Official Certificate of Organization from IIT Hyderabad",
          "Subsidized Workshop Passes",
          "Custom Referral Discounts for Friends",
          "CA Leadership Network Directory Access",
        ],
        progress: 45,
      };
    } else {
      return {
        name: "Bronze Cadet",
        tierCode: "TIER 01 / BRONZE",
        perks: [
          "Official Ambassador Induction Kit",
          "Direct WhatsApp Coordinator Pairing",
          "Exclusive Referral Tracking Code",
        ],
        progress: 20,
      };
    }
  }, [totalPoints]);

  // Responsibility pillars
  const rolePillars = [
    {
      id: "outreach",
      title: "Campus Publicity & Buzz",
      subtitle: "Become the official voice of Elan & ηVision where you study",
      pointsBadge: "+10 TO +30 PTS",
      highlights: [
        "Circulate official announcements across student WhatsApp groups, Discord servers, and college channels.",
        "Secure permission to put up official festival posters and flyers on college noticeboards.",
        "Introduce flagship competitions during departmental meetings, club sessions, and college assemblies.",
      ],
      tip: "Partner with your college's technical or cultural clubs for official student body endorsement.",
    },
    {
      id: "competitions",
      title: "Host Campus Prelims",
      subtitle: "Discover, shortlist, and mentor talent from your institute",
      pointsBadge: "+50 TO +100 PTS",
      highlights: [
        "Coordinate campus-level preliminary elimination rounds for music, dance, dramatics, or coding hackathons.",
        "Help winning teams complete direct qualification and registration for IIT Hyderabad finals.",
        "Work directly with our event managers for judging rubrics, question banks, and certificates.",
      ],
      tip: "Hosting prelims establishes you as the recognized festival coordinator for your city.",
    },
    {
      id: "social",
      title: "Digital Media & Outreach",
      subtitle: "Drive engagement through campus takeovers and official assets",
      pointsBadge: "+20 TO +40 PTS",
      highlights: [
        "Share festival promo reels, pro-nite artist line-up announcements, and teaser drops.",
        "Create student reaction videos and campus Q&A stories using official Elan media packs.",
        "Tag @elan_nvision for features on our official 40k+ student Instagram community.",
      ],
      tip: "We provide ready-to-post high-resolution templates, captions, and tags so you never start from scratch.",
    },
    {
      id: "contingent",
      title: "Lead College Contingent",
      subtitle: "Assemble and escort your college delegation to IIT Hyderabad",
      pointsBadge: "+100 TO +200 PTS",
      highlights: [
        "Assemble a delegation of 20+ students to represent your college across cultural and tech arenas.",
        "Assist participants with itinerary, registration passes, and on-ground check-in at IIT Hyderabad.",
        "Contingent leaders receive dedicated hostel block allotment and VIP artist arena passes.",
      ],
      tip: "Leading a registered college contingent is the fastest route to unlocking free on-campus stay.",
    },
  ];

  // Authentic student testimonials
  const testimonials = [
    {
      quote:
        "Leading the 45-student contingent from CBIT to Elan & ηVision was the undisputed highlight of my third year. We stayed in the IIT Hyderabad hostels, attended soundchecks, and watched the pro-nites from the VIP enclosure. The signed certificate also gave my resume significant weight during campus placements.",
      name: "Rahul Verma",
      college: "Chaitanya Bharathi Institute of Technology (CBIT), Hyderabad",
      role: "Lead Campus Ambassador · 45-Student Contingent",
      tag: "Free Hostel Stay & VIP Access Unlocked",
    },
    {
      quote:
        "The coordinator support was top-notch. Whenever I needed rulebooks, custom referral links, or event decks for my college clubs, the IITH team answered immediately. The points leaderboard is completely transparent, and receiving the official fest hoodie and cash incentive was rewarding.",
      name: "Ananya Sharma",
      college: "BITS Pilani, Hyderabad Campus",
      role: "Campus Ambassador · Top 10 Leaderboard",
      tag: "Top 10 Rank · Cash & Swag",
    },
    {
      quote:
        "Organizing the prelim selection round in Warangal gave me real on-ground management experience that theoretical classes could never teach. You get to interact directly with core organizers and ambassadors from across 500+ colleges nationwide.",
      name: "Karthik Nair",
      college: "National Institute of Technology (NIT), Warangal",
      role: "Outreach Ambassador · Coordinated Prelims",
      tag: "Official IITH Recommendation",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Campus Ambassador Program | Elan & ηVision IIT Hyderabad</title>
        <meta
          name="description"
          content="Represent your campus at Elan & ηVision, IIT Hyderabad. Unlock free on-campus stay, VIP concert passes, authenticated certificates, and cash incentives."
        />
      </Helmet>

      {/* Persistent vertical registration ticker */}
      <VerticalMarquee />

      <main className="ca-mono-page">
        {/* =================================================================
            1. HERO SECTION: Minimalist, Editorial, Cohesive
            ================================================================= */}
        <section className="ca-hero-mono">
          <div className="ca-hero-left">
            <div className="ca-mono-eyebrow">
              <span className="ca-eyebrow-dash">—</span>
              <span>IIT HYDERABAD · ELAN & ηVISION 2026</span>
              <span className="ca-eyebrow-sep">/</span>
              <span className="ca-eyebrow-edition">EDITION 17</span>
            </div>

            <h1 className="ca-hero-title">
              CAMPUS AMBASSADOR PROGRAM
            </h1>

            <p className="ca-hero-desc">
              Represent your institution at South India's largest techno-cultural festival. Lead your college delegation to IIT Hyderabad, unlock <strong>free on-campus accommodation</strong>, <strong>VIP concert passes</strong>, and a <strong>signed credential</strong> authenticated by IIT Hyderabad.
            </p>

            <div className="ca-hero-actions">
              <button
                className="ca-btn-skewed-primary"
                onClick={() => setIsApplyModalOpen(true)}
              >
                APPLY AS AMBASSADOR →
              </button>
              <button
                className="ca-btn-skewed-outline"
                onClick={() => scrollToSection("ca-perks-section")}
              >
                VIEW PERKS & REWARDS ↓
              </button>
            </div>

            {/* Clean Telemetry Stats */}
            <div className="ca-hero-stats-row">
              <div className="ca-stat-item">
                <span className="ca-stat-val">500+</span>
                <span className="ca-stat-lbl">Colleges Connected</span>
              </div>
              <div className="ca-stat-sep" />
              <div className="ca-stat-item">
                <span className="ca-stat-val">100K+</span>
                <span className="ca-stat-lbl">Fest Footfall</span>
              </div>
              <div className="ca-stat-sep" />
              <div className="ca-stat-item">
                <span className="ca-stat-val">₹50K+</span>
                <span className="ca-stat-lbl">Prize Pool</span>
              </div>
              <div className="ca-stat-sep" />
              <div className="ca-stat-item">
                <span className="ca-stat-val">FREE STAY</span>
                <span className="ca-stat-lbl">At IIT Hyderabad</span>
              </div>
            </div>
          </div>

          {/* Right Column: Sleek Monochrome VIP Delegate Pass */}
          <div className="ca-hero-right">
            <div className="ca-pass-wrapper">
              <div className="ca-pass-lanyard">
                <div className="ca-lanyard-strap-mono">
                  <span>ELAN & ηVISION · OFFICIAL DELEGATE</span>
                </div>
                <div className="ca-lanyard-buckle" />
              </div>

              <div className="ca-delegate-card">
                <div className="ca-delegate-card-top">
                  <img src={festLogoImg} alt="Elan Logo" className="ca-delegate-logo" />
                  <span className="ca-delegate-serial">2026</span>
                </div>

                <div className="ca-delegate-header-strip">
                  <span className="ca-delegate-pass-type">OFFICIAL AMBASSADOR PASS</span>
                  <span className="ca-delegate-status-pill">ACTIVE</span>
                </div>

                <div className="ca-delegate-user-box">
                  <div className="ca-user-avatar-frame">
                    <span>PHOTO</span>
                  </div>
                  <div className="ca-user-meta">
                    <span className="ca-user-title">COLLEGE DELEGATE</span>
                    <span className="ca-user-sub">CAMPUS AMBASSADOR</span>
                    <span className="ca-user-inst">IIT HYDERABAD</span>
                  </div>
                </div>

                <div className="ca-delegate-clearances">
                  <div className="ca-clearance-row">
                    <span className="ca-clearance-k">CLEARANCE</span>
                    <span className="ca-clearance-v">ALL FEST ARENAS + HOSTEL</span>
                  </div>
                  <div className="ca-clearance-row">
                    <span className="ca-clearance-k">PRO-NITES</span>
                    <span className="ca-clearance-v">VIP ENCLOSURE + BACKSTAGE</span>
                  </div>
                  <div className="ca-clearance-row">
                    <span className="ca-clearance-k">CREDENTIAL</span>
                    <span className="ca-clearance-v">AUTHENTICATED IITH CERTIFICATE</span>
                  </div>
                </div>

                <div className="ca-delegate-barcode-box">
                  <div className="ca-mono-barcode" />
                  <span className="ca-barcode-num">AUTH-IITH-CA2026-00429</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            2. THE BIG FOUR PERKS: High-Contrast Minimalist Cards
            ================================================================= */}
        <section className="ca-mono-section" id="ca-perks-section">
          <div className="ca-section-lead">
            <span className="ca-section-eyebrow">— INCENTIVES & PRIVILEGES</span>
            <h2 className="ca-section-heading">WHAT YOU EARN AS AMBASSADOR</h2>
            <p className="ca-section-subtext">
              Tangible rewards and credentials designed for real student impact. No fluff, no empty corporate titles.
            </p>
          </div>

          <div className="ca-perks-editorial-grid">
            {/* Perk 1 */}
            <div className="ca-editorial-card">
              <div className="ca-editorial-top">
                <span className="ca-editorial-num">01</span>
                <span className="ca-editorial-tag">HOSTEL ACCOMMODATION</span>
              </div>
              <h3 className="ca-editorial-title">FREE STAY AT IIT HYDERABAD</h3>
              <p className="ca-editorial-desc">
                Live directly inside IIT Hyderabad campus for all 3 days of the festival. Free student hostel accommodation and food court vouchers for qualified ambassadors and contingent leads.
              </p>
              <ul className="ca-editorial-checklist">
                <li>Zero accommodation or hostel lodging costs</li>
                <li>Stay with your friends and fellow college contingent</li>
                <li>24/7 on-campus festival access to arenas and informal stages</li>
              </ul>
            </div>

            {/* Perk 2 */}
            <div className="ca-editorial-card">
              <div className="ca-editorial-top">
                <span className="ca-editorial-num">02</span>
                <span className="ca-editorial-tag">CONCERT ENCLOSURE</span>
              </div>
              <h3 className="ca-editorial-title">VIP PRO-NITE & BACKSTAGE PASSES</h3>
              <p className="ca-editorial-desc">
                Skip the crowds. Get exclusive VIP arena access and soundcheck/backstage entry to high-voltage celebrity concert nights, EDM arenas, and pro-nites.
              </p>
              <ul className="ca-editorial-checklist">
                <li>Front-row VIP enclosure for all 3 concert nights</li>
                <li>Exclusive artist lounge and soundcheck access</li>
                <li>Express festival entry — no waiting in general queues</li>
              </ul>
            </div>

            {/* Perk 3 */}
            <div className="ca-editorial-card">
              <div className="ca-editorial-top">
                <span className="ca-editorial-num">03</span>
                <span className="ca-editorial-tag">CAREER CREDENTIAL</span>
              </div>
              <h3 className="ca-editorial-title">IIT HYDERABAD SIGNED CREDENTIAL</h3>
              <p className="ca-editorial-desc">
                An official Certificate of Organization authenticated by IIT Hyderabad faculty conveners, plus personalized Letters of Recommendation for top performers.
              </p>
              <ul className="ca-editorial-checklist">
                <li>Verified credential link to add directly to LinkedIn & resumes</li>
                <li>Signed Letter of Recommendation (LOR) for top performers</li>
                <li>Proof of real-world leadership, outreach, and event coordination</li>
              </ul>
            </div>

            {/* Perk 4 */}
            <div className="ca-editorial-card">
              <div className="ca-editorial-top">
                <span className="ca-editorial-num">04</span>
                <span className="ca-editorial-tag">CASH & MERCHANDISE</span>
              </div>
              <h3 className="ca-editorial-title">₹50,000+ CASH POOL & SWAG DROP</h3>
              <p className="ca-editorial-desc">
                Earn cash incentives through direct referral registrations, compete for top 3 leaderboard cash pools, and receive limited-edition Elan hoodies, crew tees, and swag kits.
              </p>
              <ul className="ca-editorial-checklist">
                <li>₹50,000+ grand prize pool distributed to top ambassadors</li>
                <li>Direct cash commissions & referral discounts for classmates</li>
                <li>Limited-edition Elan hoodie, collector badges, and sticker pack</li>
              </ul>
            </div>
          </div>
        </section>

        {/* =================================================================
            3. WHAT YOU ACTUALLY DO: Clean Tabbed View Matching Competitions
            ================================================================= */}
        <section className="ca-mono-section" id="ca-roles-section">
          <div className="ca-section-lead">
            <span className="ca-section-eyebrow">— RESPONSIBILITIES & EXPECTATIONS</span>
            <h2 className="ca-section-heading">WHAT DOES A CAMPUS AMBASSADOR DO?</h2>
            <p className="ca-section-subtext">
              Designed around student schedules: 2 to 3 hours a week, completely flexible around coursework and exams.
            </p>
          </div>

          <div className="ca-pills-bar">
            {rolePillars.map((p) => (
              <button
                key={p.id}
                className={`ca-pill-item ${activeTab === p.id ? "active" : ""}`}
                onClick={() => setActiveTab(p.id)}
              >
                {p.title.toUpperCase()}
              </button>
            ))}
          </div>

          {(() => {
            const currentPillar = rolePillars.find((p) => p.id === activeTab) || rolePillars[0];
            return (
              <div className="ca-pillar-detail-box">
                <div className="ca-pillar-detail-head">
                  <div>
                    <h3 className="ca-pillar-detail-title">{currentPillar.title}</h3>
                    <p className="ca-pillar-detail-sub">{currentPillar.subtitle}</p>
                  </div>
                  <span className="ca-pillar-pts-tag">{currentPillar.pointsBadge}</span>
                </div>

                <div className="ca-pillar-detail-body">
                  <div className="ca-pillar-tasks">
                    <span className="ca-body-section-title">Core Activities:</span>
                    <ul className="ca-pillar-task-list">
                      {currentPillar.highlights.map((h, i) => (
                        <li key={i}>
                          <span className="ca-task-bullet">—</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="ca-pillar-tip-card">
                    <span className="ca-tip-eyebrow">COORDINATOR ADVICE</span>
                    <p className="ca-tip-body">{currentPillar.tip}</p>
                    <div className="ca-tip-footer">
                      <span>✓ 1-on-1 IITH Student Coordinator Assigned to You</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </section>

        {/* =================================================================
            4. GAMIFIED POINTS & REWARDS SIMULATOR
            ================================================================= */}
        <section className="ca-mono-section" id="ca-simulator-section">
          <div className="ca-section-lead">
            <span className="ca-section-eyebrow">— TRANSPARENT LEADERBOARD</span>
            <h2 className="ca-section-heading">POINTS & REWARDS SIMULATOR</h2>
            <p className="ca-section-subtext">
              Select missions below to calculate your estimated score and preview the tier rewards you unlock.
            </p>
          </div>

          <div className="ca-sim-split">
            {/* Left: Task checklist */}
            <div className="ca-sim-tasks-panel">
              <span className="ca-panel-header-text">Select Activities You Can Accomplish:</span>
              <div className="ca-sim-tasks-list">
                {simulatorTasks.map((t) => {
                  const isChecked = activeSimulatorTasks.includes(t.id);
                  return (
                    <div
                      key={t.id}
                      className={`ca-sim-task-card ${isChecked ? "active" : ""}`}
                      onClick={() => toggleSimulatorTask(t.id)}
                    >
                      <div className="ca-sim-check-box">
                        {isChecked && <span>✓</span>}
                      </div>
                      <div className="ca-sim-task-meta">
                        <span className="ca-sim-task-name">{t.title}</span>
                        <span className="ca-sim-task-category">{t.tag}</span>
                      </div>
                      <span className="ca-sim-task-pts">+{t.points} PTS</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Milestone calculation output */}
            <div className="ca-sim-output-panel">
              <div className="ca-sim-score-card">
                <span className="ca-output-lbl">ESTIMATED SCORE</span>
                <div className="ca-output-points-wrap">
                  <span className="ca-output-points-num">{totalPoints}</span>
                  <span className="ca-output-points-sub">POINTS</span>
                </div>
              </div>

              <div className="ca-sim-tier-box">
                <span className="ca-tier-code">{unlockedTier.tierCode}</span>
                <h3 className="ca-tier-title">{unlockedTier.name}</h3>

                <div className="ca-tier-meter">
                  <div
                    className="ca-tier-meter-fill"
                    style={{ width: `${unlockedTier.progress}%` }}
                  />
                </div>

                <div className="ca-tier-unlocked-items">
                  <span className="ca-tier-items-title">UNLOCKED PRIVILEGES:</span>
                  <ul className="ca-tier-items-list">
                    {unlockedTier.perks.map((p, i) => (
                      <li key={i}>
                        <span className="ca-tier-bullet">✦</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className="ca-btn-skewed-primary sim-btn"
                  onClick={() => setIsApplyModalOpen(true)}
                >
                  CLAIM AMBASSADOR SPOT →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
            5. AMBASSADOR STORIES: High-Fashion Editorial Testimonials
            ================================================================= */}
        <section className="ca-mono-section" id="ca-stories-section">
          <div className="ca-section-lead">
            <span className="ca-section-eyebrow">— STUDENT EXPERIENCES</span>
            <h2 className="ca-section-heading">FROM FORMER AMBASSADORS</h2>
            <p className="ca-section-subtext">
              Real college students from across India who represented Elan & ηVision on their campuses.
            </p>
          </div>

          <div className="ca-stories-editorial-grid">
            {testimonials.map((t, idx) => (
              <div className="ca-story-box" key={idx}>
                <div className="ca-story-tag-pill">{t.tag}</div>
                <p className="ca-story-text">"{t.quote}"</p>
                <div className="ca-story-byline">
                  <h4 className="ca-story-name">{t.name}</h4>
                  <p className="ca-story-college">{t.college}</p>
                  <span className="ca-story-role">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =================================================================
            6. AMBASSADOR STARTER KIT: What You Receive On Day 1
            ================================================================= */}
        <section className="ca-mono-section" id="ca-kit-section">
          <div className="ca-section-lead">
            <span className="ca-section-eyebrow">— ONBOARDING DELIVERABLES</span>
            <h2 className="ca-section-heading">THE AMBASSADOR STARTER KIT</h2>
            <p className="ca-section-subtext">
              You won't have to design posters or write marketing copy. On Day 1, we hand you a complete toolkit:
            </p>
          </div>

          <div className="ca-kit-editorial-row">
            <div className="ca-kit-cell">
              <span className="ca-kit-cell-idx">01</span>
              <h4>Instagram & Reel Media Pack</h4>
              <p>High-resolution stories, square posters, and video reels formatted and ready to post.</p>
            </div>

            <div className="ca-kit-cell">
              <span className="ca-kit-cell-idx">02</span>
              <h4>WhatsApp Broadcast Drafts</h4>
              <p>Short, punchy copy tested for maximum student click-through and zero spam feel.</p>
            </div>

            <div className="ca-kit-cell">
              <span className="ca-kit-cell-idx">03</span>
              <h4>Custom Discount Referral Code</h4>
              <p>Your unique tracking link that gives your classmates discounts while earning you points.</p>
            </div>

            <div className="ca-kit-cell">
              <span className="ca-kit-cell-idx">04</span>
              <h4>1-on-1 IITH Coordinator</h4>
              <p>Direct WhatsApp & call access to a core team coordinator ready to solve any hurdle.</p>
            </div>

            <div className="ca-kit-cell">
              <span className="ca-kit-cell-idx">05</span>
              <h4>Official Pitch Decks & PDFs</h4>
              <p>Complete rulebooks, event schedules, and cash prize breakdowns for all competitions.</p>
            </div>
          </div>
        </section>

        {/* =================================================================
            7. FOUR-STEP JOURNEY FLOW
            ================================================================= */}
        <section className="ca-mono-section" id="ca-journey-section">
          <div className="ca-section-lead">
            <span className="ca-section-eyebrow">— PROGRAM ROADMAP</span>
            <h2 className="ca-section-heading">4 STEPS TO IIT HYDERABAD</h2>
            <p className="ca-section-subtext">
              No lengthy interviews or complicated prerequisites.
            </p>
          </div>

          <div className="ca-journey-grid">
            <div className="ca-journey-card">
              <span className="ca-journey-num">01</span>
              <h4>Submit Application</h4>
              <p>Takes under 2 minutes. Enter your college, branch, and contact details. Zero fees.</p>
            </div>

            <div className="ca-journey-card">
              <span className="ca-journey-num">02</span>
              <h4>Get Onboarded</h4>
              <p>Welcome call with your coordinator, receive your CA toolkit and custom referral code.</p>
            </div>

            <div className="ca-journey-card">
              <span className="ca-journey-num">03</span>
              <h4>Complete Missions</h4>
              <p>Promote events, refer participants, host prelims, and climb the live points leaderboard.</p>
            </div>

            <div className="ca-journey-card">
              <span className="ca-journey-num">04</span>
              <h4>Live The Fest at IITH</h4>
              <p>Check into your campus hostel, claim your VIP pro-nite pass, and enjoy the madness.</p>
            </div>
          </div>
        </section>

        {/* =================================================================
            8. FREQUENTLY ASKED QUESTIONS
            ================================================================= */}
        <section className="ca-mono-section" id="ca-faq-section">
          <div className="ca-section-lead">
            <span className="ca-section-eyebrow">— INQUIRIES & DETAILS</span>
            <h2 className="ca-section-heading">FREQUENTLY ASKED QUESTIONS</h2>
            <p className="ca-section-subtext">
              Everything you need to know before submitting your application.
            </p>
          </div>

          <div className="ca-mono-faq-wrap">
            <FAQAccordion faqs={caFaqData} />
          </div>
        </section>

        {/* =================================================================
            9. CLOSING CALL TO ACTION
            ================================================================= */}
        <section className="ca-mono-cta">
          <div className="ca-cta-inner">
            <span className="ca-cta-eyebrow">— LIMITED CAMPUS SLOTS AVAILABLE</span>
            <h2 className="ca-cta-heading">YOUR COLLEGE DESERVES TO BE AT IIT HYDERABAD. LEAD THEM THERE.</h2>
            <p className="ca-cta-sub">
              Applications are reviewed on a rolling basis. Top campus slots fill up fast — secure your delegation credentials today.
            </p>
            <button
              className="ca-btn-skewed-primary cta-btn-large"
              onClick={() => setIsApplyModalOpen(true)}
            >
              APPLY NOW FOR CA 2026 →
            </button>
          </div>
        </section>
      </main>

      {/* Application Popup Modal */}
      <ApplyModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
      />
    </>
  );
}
