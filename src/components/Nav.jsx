import React, { useState } from 'react';
import './nav.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHelmetSafety, faHammer, faTrowel } from '@fortawesome/free-solid-svg-icons';

import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx'

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className={`nav ${isNavOpen ? 'open' : ''}`}>


      <div className='contentNav'>
        <div className='wrapperIcons'>
          <FontAwesomeIcon icon={faHammer} className='iconHammer' />
          <FontAwesomeIcon icon={faHelmetSafety} className='iconHelmet' />
          <FontAwesomeIcon icon={faTrowel} className='iconTrowel' />
        </div>
        <h1>Labour<span className='rotate-animation'>4</span>You</h1>
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <div className="nav-toggle" onClick={toggleNav}>
        <RxHamburgerMenu className='burguerIcon' />
        <RxCross1 className='closeNavIcon' />
      </div>

    </nav>
  )
}

export default Nav;