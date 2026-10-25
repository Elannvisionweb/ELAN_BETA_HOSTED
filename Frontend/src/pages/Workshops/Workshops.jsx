import './Workshops.css';
import VerticalMarquee from '/src/components/VerticalMarquee/VerticalMarquee.jsx';
import eth_hack_poster from '/src/assets/workshops_posters/eth_hack_poster.jpeg';
import aiml_poster from '/src/assets/workshops_posters/aiml_poster.jpeg';
import workshop_poster from '/src/assets/workshops_posters/workshop_poster.png';
import workshop_poster3 from '/src/assets/workshops_posters/workshop_poster3.jpg';
import workshop from '/src/assets/workshops_posters/workshop.png';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';


function Workshops() {
  return (
    <>
      <Helmet>
        <title>Elan&nVision | Workshops</title>
      </Helmet>
      <VerticalMarquee />
      <div className='workshops'>
        <div className='workshop-title'>Workshops</div>
        <div className='workshop-description'>
          Workshops are intended for hands-on experiential learning in coming-of-age topics like
          cybersecurity and generative AI. They are designed and planned in such a way that
          they improve student’s critical thinking skills along with the technical takeaways. But
          that&apos;s not all, we believe a good break makes learning easier and one more focused,
          which is why we have a whole set of numerous games set up for the participants during
          the break and a catch-up session with the students of IIT-Hyderabad at the end of the
          workshops.<br />
          Is distance and time taken to reach our campus the one last thing stopping you from
          attending our amazing workshops? Well, don&apos;t worry because we got you covered there
          too! We arrange in-campus accommodation during the workshops for participants at
          extremely affordable costs. Stay overnight in our campus and experience life at an IIT(Indian Institute of Technology).
          There are also transport services arranged for your ease on both the days of the
          workshop from in-demand stops in the city to our campus at economical prices. So
          what&apos;s stopping you from attending these workshops! Take a look at the next scheduled
          workshop below and fix your spot!
        </div>

        <div className='accomodation-link'>
          <Link to='/accommodation'>
            Get accomodations &#8599;
          </Link>
        </div>

        <div className='workshop-tile'>
          <div className="workshop-title">Upcoming Workshops</div>

          <div className="workshop-tile-poster">
            <img src={workshop} alt="Workshop poster" />

            <div className="workshop-tile-title">
              Step into the world of Artificial Intelligence with ML Foundations: From Basics to Building Models, an exclusive workshop organized by Elan & nVision, a student body of IIT Hyderabad. Whether you're looking to start your AI journey or build real-world models, this workshop offers hands-on guidance and expert knowledge directly on campus!
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Workshops;