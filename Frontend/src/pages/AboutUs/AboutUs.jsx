import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import VerticalMarquee from '/src/components/VerticalMarquee/VerticalMarquee.jsx';
import { domainsData } from '/src/data/about_data.js';
import './AboutUs.css';

// Crisp, dedicated SVG icons for social platforms
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

function AboutUs() {
  const [activeDomainId, setActiveDomainId] = useState(domainsData[0].id);

  const activeDomain = domainsData.find((d) => d.id === activeDomainId) || domainsData[0];

  return (
    <>
      <Helmet>
        <title>Elan & ηVision | Domains & Leadership</title>
        <meta
          name="description"
          content="Meet the domains, leadership, and heads driving Elan & ηVision IIT Hyderabad."
        />
      </Helmet>

      {/* Standard festival vertical marquee */}
      <VerticalMarquee />

      <main className="about-page-container">
        {/* ================= DOMAINS & HEADS EXPLORER ================= */}
        <section className="about-domains-section" id="domains-explorer">
          <div className="about-domains-glow" aria-hidden="true" />
          
          <div className="about-section-header">
            <span className="about-section-badge">// THE ARCHITECTS</span>
            <h1 className="about-section-title">DOMAINS & LEADERSHIP</h1>
            <p className="about-section-subtitle">
              Select any domain on the left to meet the heads and teams driving Elan &amp; ηVision.
            </p>
          </div>

          <div className="domains-split-layout">
            {/* ====== LEFT SIDE: DOMAINS SELECTOR ====== */}
            <aside className="domains-sidebar">
              <div className="domains-sidebar-header">
                <span className="domains-sidebar-title">FEST DOMAINS</span>
                <span className="domains-count">{domainsData.length} VERTICALS</span>
              </div>

              <nav className="domains-nav-list" aria-label="Fest Domains">
                {domainsData.map((domain, index) => {
                  const isActive = domain.id === activeDomainId;
                  const formattedIndex = (index + 1).toString().padStart(2, '0');

                  return (
                    <button
                      key={domain.id}
                      className={`domain-tab-btn ${isActive ? 'active' : ''}`}
                      onClick={() => setActiveDomainId(domain.id)}
                    >
                      <span className="domain-btn-index">{formattedIndex}</span>
                      <span className="domain-btn-name">{domain.name}</span>
                      <span className="domain-btn-arrow">→</span>
                    </button>
                  );
                })}
              </nav>
            </aside>

            {/* ====== RIGHT SIDE: HEADS DISPLAY ====== */}
            <div className="domain-display-panel">
              {/* Domain Header Card */}
              <div className="domain-meta-card">
                <div className="domain-meta-top">
                  <span className="domain-badge">DOMAIN SPOTLIGHT</span>
                  <span className="domain-heads-count">
                    {activeDomain.heads.length} {activeDomain.heads.length === 1 ? 'Head' : 'Heads'}
                  </span>
                </div>
                <h2 className="domain-active-title">{activeDomain.name}</h2>
                <h3 className="domain-active-tagline">{activeDomain.tagline}</h3>
                <p className="domain-active-desc">{activeDomain.description}</p>
              </div>

              {/* Heads Grid */}
              <div className="heads-grid-section">
                <div className="heads-grid-title-row">
                  <span className="heads-grid-title">// DOMAIN HEADS</span>
                  <div className="heads-grid-line" />
                </div>

                <div className="heads-cards-grid">
                  {activeDomain.heads.map((head, idx) => (
                    <div className="head-card" key={idx}>
                      <div className="head-card-inner">
                        {/* Photo container */}
                        <div className="head-photo-wrapper">
                          {head.image ? (
                            <img
                              src={head.image}
                              alt={head.name}
                              className="head-photo"
                              loading="lazy"
                            />
                          ) : (
                            <div className="head-photo-placeholder">
                              <div className="head-placeholder-avatar">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                  <circle cx="12" cy="7" r="4" />
                                </svg>
                              </div>
                              <span className="head-placeholder-hint">PHOTO PENDING</span>
                            </div>
                          )}
                          <div className="head-photo-overlay" />
                          <div className="head-corner-notch top-left" />
                          <div className="head-corner-notch bottom-right" />
                          <div className="head-role-badge">{head.role}</div>
                        </div>

                        {/* Details */}
                        <div className="head-info">
                          <h4 className="head-name">{head.name}</h4>
                          <p className="head-position">{head.role}</p>

                          {/* Socials Bar */}
                          <div className="head-socials-bar">
                            <a
                              href={head.instagram || "#"}
                              target={head.instagram ? "_blank" : undefined}
                              rel={head.instagram ? "noopener noreferrer" : undefined}
                              className={`head-social-btn instagram ${!head.instagram ? "pending" : ""}`}
                              aria-label={`${head.name} Instagram`}
                              title={head.instagram ? "Instagram Profile" : "Instagram (Add link in about_data.js)"}
                              onClick={(e) => {
                                if (!head.instagram) e.preventDefault();
                              }}
                            >
                              <InstagramIcon />
                            </a>
                            <a
                              href={head.linkedin || "#"}
                              target={head.linkedin ? "_blank" : undefined}
                              rel={head.linkedin ? "noopener noreferrer" : undefined}
                              className={`head-social-btn linkedin ${!head.linkedin ? "pending" : ""}`}
                              aria-label={`${head.name} LinkedIn`}
                              title={head.linkedin ? "LinkedIn Profile" : "LinkedIn (Add link in about_data.js)"}
                              onClick={(e) => {
                                if (!head.linkedin) e.preventDefault();
                              }}
                            >
                              <LinkedInIcon />
                            </a>
                            <a
                              href={head.email ? `mailto:${head.email}` : "#"}
                              className={`head-social-btn email ${!head.email ? "pending" : ""}`}
                              aria-label={`Email ${head.name}`}
                              title={head.email ? `Email: ${head.email}` : "Email (Add email in about_data.js)"}
                              onClick={(e) => {
                                if (!head.email) e.preventDefault();
                              }}
                            >
                              <MailIcon />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coordinators Section (if any exist for domain) */}
              {activeDomain.coordinators && activeDomain.coordinators.length > 0 && (
                <div className="coordinators-section">
                  <div className="heads-grid-title-row">
                    <span className="heads-grid-title">// DOMAIN COORDINATORS</span>
                    <div className="heads-grid-line" />
                  </div>

                  <div className="coordinators-grid">
                    {activeDomain.coordinators.map((coord, idx) => (
                      <div className="coord-card" key={idx}>
                        <div className="coord-avatar">
                          <img src={coord.image} alt={coord.name} loading="lazy" />
                        </div>
                        <div className="coord-info">
                          <span className="coord-name">{coord.name}</span>
                          <span className="coord-role">{coord.role}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default AboutUs;
