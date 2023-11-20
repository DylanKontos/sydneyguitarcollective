import React from 'react';
import MailingListForm from './MailingListForm';
import facebookIcon from '../assets/facebooklogo.png';
import tiktokIcon from '../assets/tiktoklogo.png';
import instagramIcon from '../assets/instagramlogo.png';


function Footer() {
  return (
    <div>
    <MailingListForm />
    <b>
        <h3>
        sydneyguitarcollective@gmail.com
        </h3>
    </b>
      <div className="custom-icons">
          <a href="https://www.facebook.com/profile.php?id=100094293114454">
            <img src={facebookIcon} alt="Facebook Icon" />
          </a>
          <a href="https://www.instagram.com/sydneyguitarcollective/">
            <img src={instagramIcon} alt="Instagram Icon" />
          </a>
        </div>
    </div>
  );
}

export default Footer;
