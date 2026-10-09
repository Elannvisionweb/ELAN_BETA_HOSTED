import {useEffect} from 'react';
import './VerticalMarquee.css';

function VerticalMarquee() {
  useEffect(() => {
    function move() {
      const marquee = document.querySelector('.vertical-marquee');
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      // Combine continuous animation with subtle scroll-based offset
      marquee.style.animationDelay = `${-scrollTop * 0.01}s`;
    }
    window.addEventListener('scroll', move);
    return () => {
      window.removeEventListener('scroll', move);
    };
  }, []);

  return (
    <>
      <a 
        href='https://forms.gle/KwGMQzjWvLCYpwP6A' 
        target='_blank' 
        rel='noopener noreferrer'
        className='vertical-marquee-link'
      >
        <div className='vertical-marquee-container' id='vertical-marquee-container'>
          <div className='vertical-marquee' id='vertical-marquee'>
          <span className='vertical-marquee-text'>Fest Pass is Live! Register Now!</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Fest Pass is Live! Register Now!</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Fest Pass is Live! Register Now!</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Fest Pass is Live! Register Now!</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Fest Pass is Live! Register Now!</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Fest Pass is Live! Register Now!</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Fest Pass is Live! Register Now!</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Fest Pass is Live! Register Now!</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Fest Pass is Live! Register Now!</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Fest Pass is Live! Register Now!</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Fest Pass is Live! Register Now!</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Fest Pass is Live! Register Now!</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Fest Pass is Live! Register Now!</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Fest Pass is Live! Register Now!</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Fest Pass is Live! Register Now!</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Fest Pass is Live! Register Now!</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Fest Pass is Live! Register Now!</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Fest Pass is Live! Register Now!</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Fest Pass is Live! Register Now!</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Fest Pass is Live! Register Now!</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Fest Pass is Live! Register Now!</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Fest Pass is Live! Register Now!</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Fest Pass is Live! Register Now!</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Fest Pass is Live! Register Now!</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Fest Pass is Live! Register Now!</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Fest Pass is Live! Register Now!</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Fest Pass is Live! Register Now!</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Fest Pass is Live! Register Now!</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Fest Pass is Live! Register Now!</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Fest Pass is Live! Register Now!</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Fest Pass is Live! Register Now!</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Fest Pass is Live! Register Now!</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Fest Pass is Live! Register Now!</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Fest Pass is Live! Register Now!</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Fest Pass is Live! Register Now!</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Fest Pass is Live! Register Now!</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Fest Pass is Live! Register Now!</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Fest Pass is Live! Register Now!</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Fest Pass is Live! Register Now!</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Fest Pass is Live! Register Now!</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Fest Pass is Live! Register Now!</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Fest Pass is Live! Register Now!</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Fest Pass is Live! Register Now!</span>
          <span className='vertical-marquee-star'>&#10022;</span>
          <span className='vertical-marquee-text'>Fest Pass is Live! Register Now!</span>
          <span className='vertical-marquee-star'>&#10022;</span>

          </div>
        </div>
      </a>
    </>
  );
}

export default VerticalMarquee;
