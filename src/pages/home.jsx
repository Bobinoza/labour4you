import React, { useState } from 'react';
import { BsArrowRightShort, BsCheckCircle } from 'react-icons/bs';

import './homeStyles.css';
import Nav from '../components/Nav';
import MiniNav from '../components/MiniNav';
import OurJobs from '../components/OurJobs';
import HowDoIt from '../components/HowDoIt';
import FormMobile from '../components/FormMobile';


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
      <MiniNav />
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

      {/* DO YOU NEED ASSISTANCE?  */}
      <section>
        <div className='containerDoYou'>
          <div className='headerContentDoYou'>
            <h1>LABOUR HIRE SPECIALISTS</h1>
            <p>Do you need assistance?</p>
          </div>

          <div className='wrapperUnicItens'>
            <div className='unicItemDoyou'>
              <div>
                <BsCheckCircle className='iconCheckCircleDoYou' />
              </div>
              <div className='textsUnicDoYou'>
                <h1>General Labourers</h1>
                <p>
                  Laborers are responsible for various manual tasks such as digging trenches,
                  unloading building materials, and preparing job sites.
                </p>
              </div>
            </div>

            <div className='unicItemDoyou'>
              <div>
                <BsCheckCircle className='iconCheckCircleDoYou' />
              </div>
              <div className='textsUnicDoYou'>
                <h1>Skilled Labourers</h1>
                <p>
                  Our skilled laborers possess a unique combination of specialized skills and technical
                  expertise that perfectly aligns with the demands of the industry.
                </p>
              </div>
            </div>

            <div className='unicItemDoyou'>
              <div>
                <BsCheckCircle className='iconCheckCircleDoYou' />
              </div>
              <div className='textsUnicDoYou'>
                <h1>Forklift Operators</h1>
                <p>
                  We specialize in providing highly capable, motivated, and
                  accomplished forklift drivers who have been meticulously
                  screened to ensure they meet the highest standards of efficiency
                  and professionalism.
                </p>
              </div>
            </div>

            <div className='unicItemDoyou'>
              <div>
                <BsCheckCircle className='iconCheckCircleDoYou' />
              </div>
              <div className='textsUnicDoYou'> 
                <h1>Traffic Controller</h1>
                <p>
                  We have a team of highly skilled and certified traffic control 
                  personnel. With their extensive experience and expertise, 
                  they prioritize safety and reliability in all their operations, 
                  aiming to consistently achieve positive outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FormMobile />

      <HowDoIt />

      <OurJobs />

    </>
  )
}


export default Home;