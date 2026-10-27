import React from 'react';
import './Workshops.css';
import VerticalMarquee from '/src/components/VerticalMarquee/VerticalMarquee.jsx';
import workshop_ml from '/src/assets/workshops_posters/workshop.png';
import workshop_aircraft from '/src/assets/workshops_posters/fighter_aircraft_workshop.png';
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
    id: 'ml-foundations',
    title: 'ML Foundations: From Basics to Building Models',
    domain: 'Artificial Intelligence',
    subtitle: 'Organized by Elan & ηVision, Student Body of IIT Hyderabad',
    poster: workshop_ml,
    alt: 'Machine Learning Foundations Workshop Poster',
    dates: '31st Oct & 1st Nov 2026',
    venue: 'IIT Hyderabad Campus',
    unstopUrl: 'https://unstop.com/p/ml-foundations-from-basics-to-building-models-iit-hyderabad-1773767?lb=eWyGjzSO&utm_medium=Share&utm_source=workshops&utm_campaign=Eventsei51134',
    description: 'Step into the world of Artificial Intelligence with an exclusive, hands-on workshop designed to take you from foundational mathematics and Python libraries to training and evaluating real-world predictive models directly on campus.',
    highlights: [
      'Build a strong foundation in core Machine Learning concepts',
      'Gain valuable insights directly from IIT Hyderabad PhD researchers',
      'Receive official certification for all registered participants',
      'Experience campus life with interactive sessions & activities'
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
    subtitle: 'Organized by IIT Hyderabad in association with Namoona Aviation',
    poster: workshop_aircraft,
    alt: 'Fixed Wing Fighter Aircraft Design Workshop Poster',
    dates: '31st Oct & 1st Nov 2026',
    venue: 'IIT Hyderabad Campus',
    unstopUrl: 'https://unstop.com/p/fixed-wing-fighter-aircraft-design-a-hands-on-deep-dive-into-sizing-modelling-simulation-and-fly-demo-iit-hyderabad-1773186',
    description: 'A comprehensive, hands-on deep dive into modern fighter aircraft engineering. Learn aeronautical sizing, aerofoil selection, Fusion 360 3D CAD modelling, aerodynamic CFD simulations, avionics electronics, followed by a live flight demo.',
    highlights: [
      'Fixed wing aircraft aerodynamics, configurations and mission sizing',
      'Aerofoil selection & parametric 3D CAD design in Fusion 360',
      'Computational Fluid Dynamics (CFD) simulation with Simscale',
      'Practical hands-on electronics assembly with a live flight demonstration'
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
              Workshops at Elan &amp; &eta;Vision are engineered for intensive, hands-on learning in frontier domains &mdash; from foundational Machine Learning and AI to high-performance aeronautical design and simulation. Designed and led in collaboration with industry pioneers and IIT Hyderabad scholars, each session combines core theory with direct experiential execution.
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
          <div className='workshop-section-badge'>2 ACTIVE TRACKS &bull; OCT 31 &ndash; NOV 1</div>
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
