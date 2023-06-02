import React, { useState } from 'react';
import { BsArrowRightShort, BsCheckCircle, BsBricks } from 'react-icons/bs';

import './ourjobs.css';

const OurJobs = () => {
  const [contentVisible, setContentVisible] = useState(false);

  const toggleContent = () => {
    setContentVisible(!contentVisible);
  };

  return (
    <section className="section_faq" id="faq">
      <div className="container faq_container">
        <div className="faq_content">
          <div className="faq_data">
            <h2>We're Jack of ALL trades 🛠️</h2>
            <p>Masters of these:</p>
          </div>

          <div className="faq_accordion">
            <div className="faq_accordion_item">
              <header
                className="faq_accordion_header"
                onClick={toggleContent}
              >
                <BsBricks className="faq_accordion_icon" />
                <h3>Construction</h3>
                <div className="faq_accordion_arrow">
                  <BsArrowRightShort />
                </div>
              </header>

              {contentVisible && (
                <div className="faq_accordion_content">
                  <p>- Time from:<span>$ 55,00</span></p>
                  <p>
                    Get the building up smooth and fast with labourers that take
                    ownership for what they do.
                  </p>
                </div>
              )}
            </div>

            {/* <div className="divider-bestseller"></div> */}

            <div className="faq_accordion_item">
              <header
                className="faq_accordion_header"
                onClick={toggleContent}
              >
                <BsBricks className="faq_accordion_icon" />
                <h3>Renovation</h3>
                <div className="faq_accordion_arrow">
                  <BsArrowRightShort />
                </div>
              </header>

              {contentVisible && (
                <div className="faq_accordion_content">
                  <p>- Time from:<span>$ 50,00</span></p>
               
                  <p>
                    Work hard and smart with workers that can
                    keep a good pace while doing delicate work.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurJobs;