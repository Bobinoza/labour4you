import React from 'react';
import './howdoit.css';

const HowDoIt = () => {
  return (
    <section class="section_cycle" id="cycle">
      <div class="xxxx">
        <div class="main_info_cycle">
          <h2>How We Do It</h2>
          <p>
            Text here about skills and some mat or map. We will dance, write here text.
          </p>
        </div>
        <div class="cycle_content">
          <ol class="cycle_list">
            <li class="cycle_list_item">
              <p class="cycle_list_item_title">Job Details</p>
              <p class="cycle_list_content">
                Skills | Location | Timeframe
                Eg: 3x Skilled Labourer | Sydney | 2 weeks
                Eg: 10x Skilled Labourer | Sydney | 2 days
              </p>
            </li>
            <li class="cycle_list_item">
              <p class="cycle_list_item_title">Agreement Form</p>
              <p class="cycle_list_content">
                Easily complete our online agreement using your smartphone or 
                computer, or if you prefer, you can print it out.
              </p>
            </li>
            <li class="cycle_list_item">
              <p class="cycle_list_item_title">Booking Confirmation</p>
              <p class="cycle_list_content">
                An email and SMS will be sent to you containing a confirmation of 
                your booking along with details about our process.
              </p>
            </li>
            <li class="cycle_list_item">
              <p class="cycle_list_item_title">Fair Prices</p>
              <p class="cycle_list_content">
                We offer cost-effective services with competitive pricing to 
                prioritize our clients. While reducing our profit margin percentage, 
                we ensure that our workforce is appropriately compensated.
              </p>
            </li>
            <li class="cycle_list_item">
              <p class="cycle_list_item_title">Flexibility</p>
              <p class="cycle_list_content">
                Easily adjust the size of your workforce to meet the demands 
                of your projects, budgets, and timelines. Our services offer 
                the flexibility you need, providing skilled laborers and tradesmen 
                for both short-term and long-term assignments.
              </p>
            </li>
            <li class="cycle_list_item">
              <p class="cycle_list_item_title">Reduced Administration</p>
              <p class="cycle_list_content">
                We handle all the administrative tasks including paperwork, 
                payroll, superannuation, taxation, insurance, interviews, (PPE), 
                managing holidays, sick days etc.
              </p>
            </li>
          </ol>
        </div>
      </div>

    </section>
  )
}

export default HowDoIt;