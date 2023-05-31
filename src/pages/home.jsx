import React, { useState } from 'react';
import { BsArrowRightShort } from 'react-icons/bs';

import './homeStyles.css';
import Nav from '../components/Nav';


const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <Nav />
      <section className="">
        <div className='homeContainer'>
          <div className='overlayHomeDiv'>
            <div className='contentHome'>
              <p>20 years in Stock Market</p>
              <h1>
                Manage Your Invesments <br /> 
                Easily and Effectively
              </h1>
              <button 
                className='buttonHome'
                onClick={() => setIsHovered(!isHovered)}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <span>Pegar Orçamento</span>
                <BsArrowRightShort 
                  size={20}
                  className={isHovered ? 'rotate' : ''} 
                />
              </button>
            </div>
          </div>
          
        </div>
      </section>
    </>
  )
}


export default Home;