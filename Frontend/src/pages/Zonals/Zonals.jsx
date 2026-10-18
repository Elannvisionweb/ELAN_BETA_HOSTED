import React, { useState } from "react";
import { Helmet } from "react-helmet";
import VerticalMarquee from "/src/components/VerticalMarquee/VerticalMarquee.jsx";
import {
  zonalsMeta,
  zonalEvents,
  pastArtists,
  generalContacts,
} from "/src/data/zonals_data.js";
import "./Zonals.css";

// SVG Icons matching the website's minimalist aesthetic
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
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeModalEvent, setActiveModalEvent] = useState(null);

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

      <main className="zonals-page">
        {/* ================= HEADER SECTION ================= */}
        <header className="zonals-header">
          <h1 className="zonals-title">Zonal Eliminations</h1>
          <div className="zonals-header-meta">
            <span className="zonals-meta-date">10 OCT</span>
            <span className="zonals-meta-sep">/</span>
            <span className="zonals-meta-prize">₹2,00,000 PRIZE WORTH</span>
          </div>
        </header>

        {/* ================= EDITORIAL OVERVIEW ================= */}
        <section className="zonals-overview-section" aria-label="About Zonal Eliminations">
          <div className="zonals-intro-block">
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

          <div className="zonals-specs-column">
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

        {/* ================= STATS STRIP ================= */}
        <section className="zonals-stats-strip" aria-label="Festival Metrics">
          <div className="stat-unit">
            <span className="stat-num">50,000+</span>
            <span className="stat-sub">Attendees</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-unit">
            <span className="stat-num">12,500+</span>
            <span className="stat-sub">Participants</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-unit">
            <span className="stat-num">30+</span>
            <span className="stat-sub">Competitions</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-unit">
            <span className="stat-num">1.2M+</span>
            <span className="stat-sub">Social Reach</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-unit">
            <span className="stat-num">15+</span>
            <span className="stat-sub">Media Partners</span>
          </div>
        </section>

        {/* ================= FESTIVAL CONTEXT NOTE ================= */}
        <div className="fest-context-note">
          <p>
            Elan & nVision is the annual techno-cultural fest of IIT Hyderabad and one of the largest
            college fests of Southern India. It brings together performances, music, and stories alongside
            technology and innovation, turning every event into a memory worth holding on to.
          </p>
        </div>

        {/* ================= EVENTS AT A GLANCE & FILTER ================= */}
        <section className="zonals-events-section" id="events" aria-label="Zonal Competitions">
          <div className="events-section-header">
            <div>
              <div className="section-pill-tag">FLAGSHIP COMPETITIONS</div>
              <h2 className="section-title">Events at a Glance</h2>
            </div>
            {/* Filter Pills matching Competitions & About Us tab styles */}
            <nav className="events-filter-bar" aria-label="Event Filter">
              <button
                className={`filter-tab ${selectedCategory === "all" ? "active" : ""}`}
                onClick={() => setSelectedCategory("all")}
              >
                All Events ({zonalEvents.length})
              </button>
              {zonalEvents.map((ev) => (
                <button
                  key={ev.id}
                  className={`filter-tab ${selectedCategory === ev.id ? "active" : ""}`}
                  onClick={() => setSelectedCategory(ev.id)}
                >
                  {ev.name}
                </button>
              ))}
            </nav>
          </div>

          {/* ================= EVENT CARDS LIST ================= */}
          <div className="events-cards-container">
            {filteredEvents.map((event, index) => (
              <article className="zonal-event-card" key={event.id} id={event.id}>
                {/* Left Side: Information */}
                <div className="event-info-pane">
                  <div className="event-top-meta">
                    <span className="event-order">0{index + 1}</span>
                    <span className="event-badge">{event.category}</span>
                    <span className="event-date-chip">
                      <CalendarIcon />
                      {event.date}
                    </span>
                  </div>

                  <h3 className="event-title">{event.name}</h3>

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

                  {/* Actions */}
                  <div className="event-actions-row">
                    <button
                      className="qr-register-btn"
                      onClick={() => setActiveModalEvent(event)}
                      title="Scan QR Code to register"
                    >
                      <QrIcon />
                      <span>Scan QR to Register</span>
                    </button>
                    <a href={`tel:${event.contact.tel}`} className="contact-call-btn">
                      <PhoneIcon />
                      <span>Contact Lead</span>
                    </a>
                  </div>
                </div>

                {/* Right Side: Event Image & QR Preview */}
                <div className="event-media-pane">
                  <div className="event-image-wrapper">
                    <img
                      src={event.image}
                      alt={`${event.name} performance`}
                      className="event-cover-image"
                      loading="lazy"
                    />
                    <div className="event-image-overlay"></div>
                  </div>

                  {/* QR Box in corner of card */}
                  <div
                    className="event-qr-mini-card"
                    onClick={() => setActiveModalEvent(event)}
                    role="button"
                    tabIndex={0}
                    title="Click to view large registration QR"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") setActiveModalEvent(event);
                    }}
                  >
                    <img
                      src={event.qrImage}
                      alt={`${event.name} QR Code`}
                      className="qr-mini-img"
                    />
                    <div className="qr-mini-label">
                      <span>SCAN TO REGISTER</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ================= PAST ARTISTS ================= */}
        <section className="zonals-artists-section" aria-label="Artists who graced our stage">
          <div className="artists-header">
            <div className="section-pill-tag">STAGE LEGACY</div>
            <h2 className="section-title">Artists Who Have Graced Our Stage</h2>
            <p className="artists-intro">
              Our fest has played host to some of the biggest names in music and comedy over the
              years. Past editions have featured renowned headliners alongside acclaimed acts.
            </p>
          </div>
          <div className="artists-tag-cloud">
            {pastArtists.map((artist, idx) => (
              <div className="artist-tag" key={idx}>
                <span className="artist-star">✦</span>
                <span className="artist-name">{artist}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ================= CONTACTS & HELP DESK ================= */}
        <section className="zonals-contact-section" id="contacts" aria-label="Event Inquiries">
          <div className="contact-card">
            <div className="contact-card-header">
              <div className="section-pill-tag">NEED ASSISTANCE?</div>
              <h2 className="section-title">General Contacts & Support</h2>
              <p className="contact-intro-text">
                For queries regarding registrations, event rules, or festival logistics, please reach
                out to our outreach and event coordination team.
              </p>
            </div>

            <div className="contact-links-grid">
              <div className="contact-block">
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

              <div className="contact-block">
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

              <div className="contact-block">
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
