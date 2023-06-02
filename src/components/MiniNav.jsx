import React from 'react';
import './mininav.css';

import { FaMapMarkerAlt, FaPhoneAlt, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa'

const MiniNav = () => {
  return (
    <nav className='miniNav'>
      <ul>
        {/* <li><p>Level 2, 65-71 Belmore Road, Randwick, 2031 NSW</p></li> */}
        <li>
          <FaPhoneAlt />
          <p>0451 761 348</p>
        </li>
      </ul>

      <ul className='ulSocialIcons'>
        <li><a href=""><FaInstagram className='iconInstagram' /></a></li>
        <li><a href=""><FaYoutube className='iconYoutube' /></a></li>
        <li><a href=""><FaTwitter className='iconTwitter' /></a></li>
      </ul>
    </nav>
  )
}

export default MiniNav;