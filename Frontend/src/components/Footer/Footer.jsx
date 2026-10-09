import './Footer.css';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Footer() {
  return (
    <>
      <div className='footer' id='footer'>
        <div className='upper-footer'>
          <span className='heading'>SEND US A MAIL</span>
          <span className='mail' id='mail'>
            <a href='mailto:elan@iith.ac.in' rel='noopener noreferrer'>elan.nvision@sa.iith.ac.in</a>
          </span>
        </div>
        <div className='middle-footer'>
          <div className='contact-socials'>
            <div className='heading socials-heading'>SOCIALS</div>
            <div className='socials-inner'>
              <div className='social-link link-red'>
                <Link target={'_blank'} to='https://www.instagram.com/elan_nvision.iith'>
                  <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" />
                </Link>
              </div>
              <div className='social-link link-fb-blue'>
                <Link target={'_blank'} to='https://www.facebook.com/elannvision.iithyderabad/'>
                   <FontAwesomeIcon icon={['fab', 'facebook-f']} size="2x" />
                </Link>
              </div>
              <div className='social-link link-black'>
                <Link target={'_blank'} to='https://x.com/elan_nvision'>
                  <FontAwesomeIcon icon={['fab', 'x-twitter']} size="2x" />
                </Link>
              </div>
              <div className='social-link link-linkedin-blue'>
                <Link target={'_blank'} to='https://www.linkedin.com/company/elan-nvision-iith/'>
                  <FontAwesomeIcon icon={['fab', 'linkedin-in']} size="2x" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='bottom-footer'></div>
      </div>
    </>
  );
}

export default Footer;