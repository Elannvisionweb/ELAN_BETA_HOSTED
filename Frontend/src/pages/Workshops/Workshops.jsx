import React from 'react';
import './Workshops.css';
import VerticalMarquee from '/src/components/VerticalMarquee/VerticalMarquee.jsx';
import workshop_cybersecurity from '/src/assets/workshops_posters/cybersecurity_ethical_hacking_workshop.jpg';
import workshop_agentic from '/src/assets/workshops_posters/agentic_ai_workshop.jpg';
import workshop_aircraft from '/src/assets/workshops_posters/fighter_aircraft_workshop_dec.jpg';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const CalendarIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const PinIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const workshopsData = [
  {
    id: 'cybersecurity-ethical-hacking',
    title: 'Cybersecurity & Ethical Hacking',
    domain: 'Cybersecurity',
    subtitle: 'Foundations and Emerging Tools',
    poster: workshop_cybersecurity,
    alt: 'Cybersecurity & Ethical Hacking Workshop Poster',
    dates: '28th & 29th Nov 2026',
    venue: 'IIT Hyderabad Campus',
    unstopUrl: 'https://unstop.com/o/juFvZQd?lb=eWyGjzSO&utm_medium=Share&utm_source=workshops&utm_campaign=Eventsei51134',
    description: "Step into the world of digital defense with Cybersecurity & Ethical Hacking: Foundations and Emerging Tools. Whether you're starting from zero or looking to explore modern security tools, this workshop equips you with essential concepts and practical exposure right on campus.",
    highlights: [
      'Learn Cybersecurity from scratch',
      'Certificate for all Participants',
      'Explore IIT Hyderabad Campus'
    ],
    coordinators: [
      { name: 'Akhil', phone: '9704960508', tel: '+919704960508' },
      { name: 'Tejeswar', phone: '8179771767', tel: '+918179771767' }
    ]
  },
  {
    id: 'agentic-ai',
    title: 'Agentic AI : Prompts to Autonomous Workflows',
    domain: 'Artificial Intelligence',
    subtitle: 'A hands-on learning experience',
    poster: workshop_agentic,
    alt: 'Agentic AI Workshop Poster',
    dates: '28th & 29th Nov 2026',
    venue: 'IIT Hyderabad Campus',
    unstopUrl: 'https://unstop.com/o/laRvPCO?lb=eWyGjzSO&utm_medium=Share&utm_source=workshops&utm_campaign=Eventsei51134',
    description: 'Join us for Agentic AI: Prompts to Autonomous Workflows, a hands-on learning experience. Discover how next-generation AI agents are reshaping real-world workflows and gain practical experience building intelligent, autonomous systems.',
    highlights: [
      'How Agentic AI is Transforming Workflows',
      'Certificate for all Participants',
      'Explore IIT Hyderabad Campus'
    ],
    coordinators: [
      { name: 'Akhil', phone: '9704960508', tel: '+919704960508' },
      { name: 'Tejeswar', phone: '8179771767', tel: '+918179771767' }
    ]
  },
  {
    id: 'fighter-aircraft-design',
    title: '2-Day Fixed Wing Fighter Aircraft Design',
    domain: 'Aerospace & Modelling',
    subtitle: 'Interactive Workshop Organized by Student Body of IIT Hyderabad in association with Namoona Aviation & Intern Forage',
    poster: workshop_aircraft,
    alt: '2-Day Fixed Wing Fighter Aircraft Design Workshop Poster',
    dates: '5th & 6th Dec 2026',
    venue: 'IIT Hyderabad Campus',
    unstopUrl: 'https://unstop.com/p/fixed-wing-fighter-aircraft-design-a-hands-on-deep-dive-into-sizing-modelling-simulation-and-fly-demo-iit-hyderabad-1803078',
    description: 'A comprehensive, hands-on deep dive into modern fighter aircraft engineering in association with Namoona Aviation and Intern Forage. Learn aeronautical sizing, aerofoil selection, Fusion 360 3D CAD modelling, CFD simulations with Simscale, avionics electronics, 3D printing considerations, followed by a live flight demo on campus.',
    highlights: [
      'Fixed Wing Aircraft Basics, Types & Mission Sizing',
      'Aerofoil Selection & Parametric 3D CAD Modelling in Fusion 360',
      'Introduction to CFD & Simscale Simulation',
      'Practical Hands-On with Electronics & Live Flight Demo',
      '3D Printing Considerations & Live Printing Demo'
    ],
    coordinators: [
      { name: 'Manogna', phone: '9154420779', tel: '+919154420779' },
      { name: 'Tejeswar', phone: '8179771767', tel: '+918179771767' }
    ]
  }
];

function Workshops() {
  return (
    <>
      <Helmet>
        <title>Elan&nVision | Workshops</title>
      </Helmet>
      <VerticalMarquee />

      <div className='workshops'>
        {/* Header & Overview */}
        <div className='workshops-hero'>
          <div className='workshop-title'>Workshops</div>
          <p className='workshops-tagline'>Hands-On Experiential Learning at IIT Hyderabad</p>
        </div>

        <div className='workshops-intro-layout'>
          <div className='workshops-intro-text'>
            <p>
              Workshops at Elan &amp; &eta;Vision are engineered for intensive, hands-on learning in frontier domains &mdash; from cutting-edge Agentic AI and autonomous workflows to digital defense, ethical hacking, and high-performance fighter aircraft design &amp; simulation. Designed and led in collaboration with industry pioneers and IIT Hyderabad scholars, each session combines core theory with direct experiential execution.
            </p>
            <p>
              Beyond the technical curriculum, take advantage of networking opportunities, student catch-up sessions, and friendly games during breaks. Planning to attend from out of town? We provide affordable on-campus hostel accommodation and economical city shuttle transport to make your stay effortless.
            </p>
          </div>

          <div className='workshops-accommodation-card'>
            <div className='accommodation-card__tag'>CAMPUS STAY &amp; TRANSIT</div>
            <h4 className='accommodation-card__title'>Planning Your Visit?</h4>
            <p className='accommodation-card__desc'>
              Stay overnight on campus and experience life at IIT Hyderabad. In-campus accommodation and designated city shuttles are available at student-friendly rates.
            </p>
            <Link to='/accommodation' className='accommodation-btn'>
              <span>Get Accommodation</span>
              <span className='btn-arrow'>&#8599;</span>
            </Link>
          </div>
        </div>

        {/* Upcoming Workshops Section */}
        <div className='workshops-section-header'>
          <div className='workshop-section-title'>Upcoming Workshops</div>
          <div className='workshop-section-badge'>3 ACTIVE TRACKS &bull; NOV 28 &ndash; DEC 6</div>
        </div>

        <div className='workshops-grid'>
          {workshopsData.map((workshop) => (
            <article key={workshop.id} className='workshop-card'>
              {/* Poster Media */}
              <a
                href={workshop.unstopUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='workshop-card__media'
                title={`Register for ${workshop.title} on Unstop`}
              >
                <img src={workshop.poster} alt={workshop.alt} />
                <span className='workshop-card__floating-domain'>{workshop.domain}</span>
              </a>

              {/* Card Body */}
              <div className='workshop-card__content'>
                <div className='workshop-card__meta-bar'>
                  <span className='workshop-meta-pill'>
                    <CalendarIcon />
                    <span>{workshop.dates}</span>
                  </span>
                  <span className='workshop-meta-pill'>
                    <PinIcon />
                    <span>{workshop.venue}</span>
                  </span>
                </div>

                <h3 className='workshop-card__title'>
                  <a href={workshop.unstopUrl} target='_blank' rel='noopener noreferrer'>
                    {workshop.title}
                  </a>
                </h3>

                <div className='workshop-card__subtitle'>{workshop.subtitle}</div>

                <p className='workshop-card__description'>{workshop.description}</p>

                {/* Highlights List */}
                <div className='workshop-card__highlights-box'>
                  <div className='highlights-box-title'>WHAT YOU WILL LEARN</div>
                  <ul className='highlights-list'>
                    {workshop.highlights.map((item, index) => (
                      <li key={index} className='highlight-item'>
                        <span className='highlight-bullet'>✦</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer with Contacts & Action */}
                <div className='workshop-card__footer'>
                  <div className='workshop-contacts'>
                    <span className='contacts-label'>
                      <PhoneIcon /> COORDINATORS:
                    </span>
                    <span className='contacts-list'>
                      {workshop.coordinators.map((c, i) => (
                        <React.Fragment key={c.name}>
                          {i > 0 && <span className='contact-separator'>&bull;</span>}
                          <span className='contact-item'>
                            {c.name} (
                            <a href={`tel:${c.tel}`} className='contact-phone-link'>
                              {c.phone}
                            </a>
                            )
                          </span>
                        </React.Fragment>
                      ))}
                    </span>
                  </div>

                  <a
                    href={workshop.unstopUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='workshop-register-btn'
                  >
                    <span>Register on Unstop</span>
                    <ExternalLinkIcon />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}

export default Workshops;
