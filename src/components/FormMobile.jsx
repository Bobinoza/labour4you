import React from 'react';

import './formobile.css';


const FormMobile = () => {
  return (
    <section>
      <div className='backgroundImageForm'>

      </div>
      <form action="" class="contact_form">

        <h1>Do you need assistance?</h1>
        <p>Tell us about your project</p>
        <input type="text" placeholder="*Enter full name" name="" id="" />
        <input type="email" placeholder="*Enter your email" name="" id="" />
        <input type="tel" placeholder="*Enter your mobile number" />
        <textarea rows="6" placeholder="*Briefly describe what you need"></textarea>

        <button className='buttonForm'>SUBMIT</button>
      </form>
    </section>
  );
}

export default FormMobile;