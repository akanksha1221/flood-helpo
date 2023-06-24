import React from 'react';
import  '../Css/Footer.css';

import { Link } from 'react-router-dom';
import {FaFacebook,FaInstagram,FaYoutube,FaTwitter,FaLinkedin} from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer-container '>
     { /*
      <div className="contact row">
          <div className="col-lg-4 "><p><b>Postal Address:</b> NDMA Bhawan A-1, Safdarjung Enclave, New Delhi - 110029</p></div>
          <div className="col-lg-4"><p> <b> Control Room:</b> +91-11-26701728 (Mon-Fri 24X7)</p></div>
          <div className="col-lg-4"><p><b>Telephones:</b> +91-11-26701700 (Mon-Fri - 9:30AM-6:00PM)</p></div>
        </div>
        */}
        <div className='social-media-wrap '>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>FloodHelpo</Link>
          </div>
          
          <div className='social-icons'>
            <Link className='social-icon-link fb' to='/' target='_blank' aria-label='Facebook' rel="noopener noreferrer">
              <FaFacebook />
            </Link>
            <Link className='social-icon-link ig' to='/' target='_blank' aria-label='Instagram'rel="noopener noreferrer">
              <FaInstagram />
            </Link>
            <Link className='social-icon-link yt' to='/' target='_blank' aria-label='Youtube' rel="noopener noreferrer">
              <FaYoutube />
            </Link>
            <Link className='social-icon-link tw' to='/' target='_blank' aria-label='Twitter' rel="noopener noreferrer">
              <FaTwitter />
            </Link>
            <Link className='social-icon-link ln' to='/' target='_blank' aria-label='LinkedIn' rel="noopener noreferrer">
              <FaLinkedin />
            </Link>
          </div>
          <small className='website-rights'>All rights reserved akankshakumari ©2021</small>
        </div>
        
          
    </div>
  );
}

export default Footer;
