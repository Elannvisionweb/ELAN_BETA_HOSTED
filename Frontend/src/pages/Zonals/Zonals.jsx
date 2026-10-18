import React, { useState, useEffect, useRef, useCallback } from "react";
import { Helmet } from "react-helmet";
import { useLenis } from "lenis/react";
import VerticalMarquee from "/src/components/VerticalMarquee/VerticalMarquee.jsx";
import {
  zonalsMeta,
  zonalEvents,
  pastArtists,
  generalContacts,
} from "/src/data/zonals_data.js";
import "./Zonals.css";

// SVG Icons matching the website's minimalist aesthetic
const ExternalLinkIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

const CalendarIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
    <line x1="16" x2="16" y1="2" y2="6"/>
    <line x1="8" x2="8" y1="2" y2="6"/>
    <line x1="3" x2="21" y1="10" y2="10"/>
  </svg>
);

const LocationIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const QrIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect width="5" height="5" x="3" y="3" rx="1"/>
    <rect width="5" height="5" x="16" y="3" rx="1"/>
    <rect width="5" height="5" x="3" y="16" rx="1"/>
    <path d="M21 16h-3a2 2 0 0 0-2 2v3"/>
    <path d="M21 21v.01"/>
    <path d="M12 7v3a2 2 0 0 1-2 2H7"/>
    <path d="M3 12h.01"/>
    <path d="M12 3h.01"/>
    <path d="M12 16v.01"/>
    <path d="M16 12h1"/>
    <path d="M21 12v.01"/>
    <path d="M12 21v-1"/>
  </svg>
);

const MailIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

function Zonals() {
  const [isReady, setIsReady] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeModalEvent, setActiveModalEvent] = useState(null);

  // Statistics count-up state
  const [statsValues, setStatsValues] = useState({
    attendees: "50,000+",
    participants: "12,500+",
    competitions: "30+",
    reach: "1.2M+",
    partners: "15+",
  });
  const statsRef = useRef(null);
  const countUpTriggered = useRef(false);

  // ── Animation A: Hero readiness on mount ──────────────────────────────────
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 40);
    return () => clearTimeout(timer);
  }, []);

  // ── Animation B & H: IntersectionObserver for Section Reveals ─────────────
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const revealElements = document.querySelectorAll(".zonals-page .zonal-reveal");
    if (!revealElements.length) return;

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
    return () => revealObserver.disconnect();
  }, []);

  // ── Smooth Sticky Split-Screen Scroll Tracking ───────────────────────────
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const sectionRefs = useRef([]);
  const scrollContainerRef = useRef(null);

  const updateActiveIndex = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const stickyH = window.innerHeight;
    const totalScrollable = rect.height - stickyH;
    if (totalScrollable <= 0) return;

    const scrolled = -rect.top;

    if (scrolled <= 0) {
      if (activeIndexRef.current !== 0) {
        activeIndexRef.current = 0;
        setActiveIndex(0);
      }
      return;
    }

    if (scrolled >= totalScrollable) {
      const last = zonalEvents.length - 1;
      if (activeIndexRef.current !== last) {
        activeIndexRef.current = last;
        setActiveIndex(last);
      }
      return;
    }

    const progress = scrolled / totalScrollable;
    const count = zonalEvents.length;
    const stepSize = 1 / count;
    const deadzone = 0.025; // 2.5% buffer zone completely eliminates boundary flutter

    const current = activeIndexRef.current;
    let next = current;

    // Check forward transition
    if (current < count - 1) {
      const forwardThreshold = (current + 1) * stepSize + deadzone;
      if (progress >= forwardThreshold) {
        next = Math.min(count - 1, Math.floor(progress / stepSize));
      }
    }

    // Check backward transition
    if (current > 0) {
      const backwardThreshold = current * stepSize - deadzone;
      if (progress < backwardThreshold) {
        next = Math.max(0, Math.floor(progress / stepSize));
      }
    }

    if (next !== current) {
      activeIndexRef.current = next;
      setActiveIndex(next);
    }
  }, []);

  // Sync with Lenis RAF frame loop
  const lenis = useLenis(() => {
    updateActiveIndex();
  });

  // RAF-throttled window scroll listener fallback
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateActiveIndex();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [updateActiveIndex]);

  const scrollToEvent = (index) => {
    activeIndexRef.current = index;
    setActiveIndex(index);
    const container = scrollContainerRef.current;
    if (container) {
      const rect = container.getBoundingClientRect();
      const containerTop = window.scrollY + rect.top;
      const totalScrollable = rect.height - window.innerHeight;
      const targetY = containerTop + (index / (zonalEvents.length - 1)) * totalScrollable + 5;
      if (lenis) {
        lenis.scrollTo(targetY, { duration: 0.6, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
      } else {
        window.scrollTo({ top: targetY, behavior: "smooth" });
      }
    } else {
      const steps = sectionRefs.current;
      if (steps && steps[index]) {
        steps[index].scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  // ── Animation G: Statistics Count-Up ──────────────────────────────────────
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const element = statsRef.current;
    if (!element) return;

    // Start with 0 values before count-up triggers
    setStatsValues({
      attendees: "0+",
      participants: "0+",
      competitions: "0+",
      reach: "0.0M+",
      partners: "0+",
    });

    const statsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !countUpTriggered.current) {
          countUpTriggered.current = true;
          statsObserver.unobserve(element);

          const duration = 1200; // ms
          const startTime = performance.now();

          const animateCount = (now) => {
            const elapsed = now - startTime;
            const rawProgress = Math.min(1, elapsed / duration);
            // Smooth easeOutExpo
            const progress = rawProgress === 1 ? 1 : 1 - Math.pow(2, -10 * rawProgress);

            const attendeesVal = Math.floor(progress * 50000).toLocaleString();
            const participantsVal = Math.floor(progress * 12500).toLocaleString();
            const competitionsVal = Math.floor(progress * 30);
            const reachVal = (progress * 1.2).toFixed(1);
            const partnersVal = Math.floor(progress * 15);

            setStatsValues({
              attendees: `${attendeesVal}+`,
              participants: `${participantsVal}+`,
              competitions: `${competitionsVal}+`,
              reach: `${reachVal}M+`,
              partners: `${partnersVal}+`,
            });

            if (rawProgress < 1) {
              requestAnimationFrame(animateCount);
            } else {
              setStatsValues({
                attendees: "50,000+",
                participants: "12,500+",
                competitions: "30+",
                reach: "1.2M+",
                partners: "15+",
              });
            }
          };

          requestAnimationFrame(animateCount);
        }
      },
      { threshold: 0.2 }
    );

    statsObserver.observe(element);
    return () => statsObserver.disconnect();
  }, []);

  const filteredEvents =
    selectedCategory === "all"
      ? zonalEvents
      : zonalEvents.filter((ev) => ev.id === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Elan & ηVision | Zonal Eliminations</title>
        <meta
          name="description"
          content="Zonal Eliminations for Elan & ηVision IIT Hyderabad. Win prize worth ₹2,00,000 and earn a chance to perform live at the Grand Finale."
        />
      </Helmet>

      {/* Standard festival vertical marquee */}
      <VerticalMarquee />

      <main className={`zonals-page ${isReady ? "is-ready" : ""}`}>
        {/* ================= HEADER SECTION (Animation A) ================= */}
        <header className="zonals-header">
          <div className="zonal-hero__top-row">
            <span className="zonal-hero__eyebrow section-pill-tag">
              IIT HYDERABAD PRESENTS • ELAN & ηVISION 2027
            </span>
          </div>
          <div className="zonal-hero__main-row">
            <div className="zonal-title-mask zonal-hero__title-mask">
              <h1 className="zonals-title zonal-title-reveal">Zonal Eliminations</h1>
            </div>
            <div className="zonals-header-meta">
              <span className="zonals-meta-date">10 OCT</span>
              <span className="zonals-meta-sep">/</span>
              <span className="zonals-meta-prize">₹2,00,000 PRIZE WORTH</span>
            </div>
          </div>
          <div className="zonal-hero__divider" />
        </header>

        {/* ================= EDITORIAL OVERVIEW (Animation B) ================= */}
        <section className="zonals-overview-section zonal-reveal" aria-label="About Zonal Eliminations">
          <div className="zonals-intro-block zonal-reveal zonal-reveal--delay-1">
            <p className="zonals-lead-statement">
              {zonalsMeta.intro}
            </p>
            <div className="zonals-format-strip">
              <span className="format-tag">COMPETITION FORMAT</span>
              <p className="format-text">
                This is the first round of competition. Top-performing participants will be invited to
                perform live at the Grand Finale, held during Elan & ηVision at IIT Hyderabad (8th Jan – 10th Jan 2027).
              </p>
            </div>
          </div>

          <div className="zonals-specs-column zonal-reveal zonal-reveal--delay-2">
            <div className="spec-row">
              <span className="spec-label">ELIMINATIONS DATE</span>
              <span className="spec-val">{zonalsMeta.date}</span>
            </div>
            <div className="spec-row">
              <span className="spec-label">TOTAL PRIZE WORTH</span>
              <span className="spec-val">{zonalsMeta.totalPrize}</span>
            </div>
            <div className="spec-row">
              <span className="spec-label">GRAND FINALE</span>
              <span className="spec-val">{zonalsMeta.grandFinale}</span>
            </div>
            <div className="spec-row">
              <span className="spec-label">PARTICIPANT PERKS</span>
              <span className="spec-val">
                Grand Stage Opportunity, Certificates, Concert Access & Official Goodies
              </span>
            </div>
          </div>
        </section>

        {/* ================= STATS STRIP (Animation G Count-Up) ================= */}
        <section
          ref={statsRef}
          className="zonals-stats-strip zonal-reveal"
          aria-label="Festival Metrics"
        >
          <div className="stat-unit zonal-reveal zonal-reveal--delay-1">
            <span className="stat-num">{statsValues.attendees}</span>
            <span className="stat-sub">Attendees</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-unit zonal-reveal zonal-reveal--delay-2">
            <span className="stat-num">{statsValues.participants}</span>
            <span className="stat-sub">Participants</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-unit zonal-reveal zonal-reveal--delay-3">
            <span className="stat-num">{statsValues.competitions}</span>
            <span className="stat-sub">Competitions</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-unit zonal-reveal zonal-reveal--delay-4">
            <span className="stat-num">{statsValues.reach}</span>
            <span className="stat-sub">Social Reach</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-unit zonal-reveal zonal-reveal--delay-5">
            <span className="stat-num">{statsValues.partners}</span>
            <span className="stat-sub">Media Partners</span>
          </div>
        </section>

        {/* ================= FESTIVAL CONTEXT NOTE ================= */}
        <div className="fest-context-note zonal-reveal">
          <p>
            Elan & nVision is the annual techno-cultural fest of IIT Hyderabad and one of the largest
            college fests of Southern India. It brings together performances, music, and stories alongside
            technology and innovation, turning every event into a memory worth holding on to.
          </p>
        </div>

        {/* ================= EVENTS AT A GLANCE & FILTER (Animation E Motif) ================= */}
        <section className="zonals-events-section" id="events" aria-label="Zonal Competitions">
          <div className="events-section-header zonal-reveal">
            <div className="events-header-left">
              <div className="events-header-titles">
                <div className="section-pill-tag">FLAGSHIP COMPETITIONS</div>
                <div className="zonal-title-mask">
                  <h2 className="section-title zonal-title-reveal">Events at a Glance</h2>
                </div>
              </div>
              {/* Circular rotational motif (Animation E) — one understated accent for the page */}
              <div className="zonal-orbit" aria-hidden="true" title="Festival Identity Motif">
                <div className="zonal-orbit__ring" />
                <div className="zonal-orbit__marker" />
                <div className="zonal-orbit__inner-ring" />
              </div>
            </div>

            {/* Filter Pills matching Competitions & About Us tab styles */}
            <nav className="events-filter-bar" aria-label="Event Filter">
              {zonalEvents.map((ev, idx) => (
                <button
                  key={ev.id}
                  className={`filter-tab ${activeIndex === idx ? "active" : ""}`}
                  onClick={() => scrollToEvent(idx)}
                >
                  {ev.name}
                </button>
              ))}
            </nav>
          </div>

          {/* ================= STICKY SPLIT-SCREEN EXPERIENCE ================= */}
          <div className="zonal-scroll" ref={scrollContainerRef}>
            <div className="zonal-scroll__sticky">
              {/* LEFT: Event Details changing on scroll */}
              <div className="zonal-scroll__details">
                {zonalEvents.map((event, index) => (
                  <article
                    key={event.id}
                    className={`zonal-scroll__detail ${activeIndex === index ? "is-active" : ""}`}
                    aria-hidden={activeIndex !== index}
                    inert={activeIndex !== index ? "" : undefined}
                  >
                    <div className="event-top-meta">
                      <span className="event-order">0{index + 1}</span>
                      <span className="event-badge">{event.category}</span>
                      <span className="event-date-chip">
                        <CalendarIcon />
                        {event.date}
                      </span>
                    </div>

                    <h2 className="event-title">{event.name}</h2>

                    <p className="event-desc">{event.description}</p>

                    <div className="event-prize-box">
                      <div className="prize-label">PRIZE POOL</div>
                      <div className="prize-amount">{event.prizePool}</div>
                    </div>

                    {/* Details Grid */}
                    <div className="event-meta-list">
                      <div className="event-meta-row">
                        <span className="meta-row-label">
                          <LocationIcon /> VENUE:
                        </span>
                        <span className="meta-row-val">{event.venue}</span>
                      </div>

                      <div className="event-meta-row">
                        <span className="meta-row-label">
                          <PhoneIcon /> COORDINATOR:
                        </span>
                        <span className="meta-row-val">
                          {event.contact.name} (
                          <a href={`tel:${event.contact.tel}`} className="contact-tel-link">
                            {event.contact.phone}
                          </a>
                          )
                        </span>
                      </div>
                    </div>

                    {/* Actions: Direct Unstop Registration Link */}
                    <div className="event-actions-row">
                      <a
                        href={event.unstopUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="unstop-register-btn"
                        title={`Register for ${event.name} on Unstop`}
                      >
                        <span>Register on Unstop</span>
                        <ExternalLinkIcon />
                      </a>
                      <a href={`tel:${event.contact.tel}`} className="contact-call-btn">
                        <PhoneIcon />
                        <span>Contact Lead</span>
                      </a>
                    </div>
                  </article>
                ))}
              </div>

              {/* RIGHT: Visual (Pinned Crossfading Image + Counter + Progress Rail) */}
              <div className="zonal-scroll__visual">
                {zonalEvents.map((event, index) => (
                  <div
                    key={event.id}
                    className={`zonal-scroll__image ${activeIndex === index ? "is-active" : ""}`}
                    aria-hidden={activeIndex !== index}
                  >
                    <img
                      src={event.image}
                      alt={event.name}
                      loading={index < 2 ? "eager" : "lazy"}
                    />
                    <div className="event-image-overlay" />
                  </div>
                ))}

                {/* Counter */}
                <div className="zonal-scroll__counter" aria-hidden="true">
                  <span className="counter-curr">0{activeIndex + 1}</span>
                  <span className="counter-sep"> / </span>
                  <span className="counter-total">0{zonalEvents.length}</span>
                </div>

                {/* Smooth Progress Rail */}
                <div className="zonal-scroll__progress-track" aria-hidden="true">
                  <div
                    className="zonal-scroll__progress-fill"
                    style={{
                      width: `${((activeIndex + 1) / zonalEvents.length) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </div>

            {/* SCROLL TRACK: 5 sequential steps driving the sticky transitions */}
            <div className="zonal-scroll__track" aria-hidden="true">
              {zonalEvents.map((event, index) => (
                <div
                  key={event.id}
                  ref={(el) => {
                    sectionRefs.current[index] = el;
                  }}
                  className={`zonal-scroll__step ${activeIndex === index ? "is-active" : ""}`}
                  aria-label={event.name}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ================= PAST ARTISTS (Animation H) ================= */}
        <section className="zonals-artists-section zonal-reveal" aria-label="Artists who graced our stage">
          <div className="artists-header">
            <div className="section-pill-tag">STAGE LEGACY</div>
            <div className="zonal-title-mask">
              <h2 className="section-title zonal-title-reveal">Artists Who Have Graced Our Stage</h2>
            </div>
            <p className="artists-intro">
              Our fest has played host to some of the biggest names in music and comedy over the
              years. Past editions have featured renowned headliners alongside acclaimed acts.
            </p>
          </div>
          <div className="zonal-section-divider" />
          <div className="artists-tag-cloud">
            {pastArtists.map((artist, idx) => (
              <div
                className="artist-tag zonal-reveal"
                key={idx}
                style={{ "--tag-index": idx }}
              >
                <span className="artist-star">✦</span>
                <span className="artist-name">{artist}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ================= CONTACTS & HELP DESK (Animation H) ================= */}
        <section className="zonals-contact-section zonal-reveal" id="contacts" aria-label="Event Inquiries">
          <div className="contact-card">
            <div className="contact-card-header">
              <div className="section-pill-tag">NEED ASSISTANCE?</div>
              <div className="zonal-title-mask">
                <h2 className="section-title zonal-title-reveal">General Contacts & Support</h2>
              </div>
              <p className="contact-intro-text">
                For queries regarding registrations, event rules, or festival logistics, please reach
                out to our outreach and event coordination team.
              </p>
            </div>

            <div className="contact-links-grid">
              <div className="contact-block zonal-reveal zonal-reveal--delay-1">
                <div className="block-label">EVENT QUERIES</div>
                <div className="coordinators-list">
                  {generalContacts.contacts.map((c, idx) => (
                    <div className="coordinator-item" key={idx}>
                      <span className="coord-name">{c.name}</span>
                      <a href={`tel:${c.tel}`} className="coord-phone">
                        <PhoneIcon /> {c.phone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div className="contact-block zonal-reveal zonal-reveal--delay-2">
                <div className="block-label">OFFICIAL EMAIL</div>
                <div className="email-display">
                  <a
                    href={`mailto:${generalContacts.email}`}
                    className="outreach-email-link"
                    rel="noopener noreferrer"
                  >
                    <MailIcon /> {generalContacts.email}
                  </a>
                  <span className="email-note">
                    Official responses typically within 24 hours
                  </span>
                </div>
              </div>

              <div className="contact-block zonal-reveal zonal-reveal--delay-3">
                <div className="block-label">COMPETITION PORTAL</div>
                <div className="unstop-box">
                  <p className="unstop-desc">{generalContacts.unstopInfo}</p>
                  <a
                    href="https://unstop.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="unstop-btn"
                  >
                    Visit Unstop Portal →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ================= REGISTRATION QR CODE MODAL ================= */}
      {activeModalEvent && (
        <div
          className="qr-modal-backdrop"
          onClick={() => setActiveModalEvent(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="qr-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close-btn"
              onClick={() => setActiveModalEvent(null)}
              aria-label="Close Modal"
            >
              <CloseIcon />
            </button>

            <div className="modal-header">
              <span className="modal-category">{activeModalEvent.category}</span>
              <h3 className="modal-event-title">{activeModalEvent.name}</h3>
              <p className="modal-prize-tag">PRIZE POOL: {activeModalEvent.prizePool}</p>
            </div>

            <div className="modal-qr-frame">
              <img
                src={activeModalEvent.qrImage}
                alt={`${activeModalEvent.name} Registration QR`}
                className="modal-qr-img"
              />
            </div>

            <div className="modal-footer-info">
              <p className="modal-instruction">
                Scan using Google Lens, Paytm, or any QR scanner on your phone to register.
              </p>
              <div className="modal-contact-row">
                <span>Lead Coordinator: </span>
                <strong>{activeModalEvent.contact.name}</strong> (
                <a href={`tel:${activeModalEvent.contact.tel}`}>
                  {activeModalEvent.contact.phone}
                </a>
                )
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Zonals;
