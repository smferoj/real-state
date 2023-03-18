import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contactPage.css";

const ContactPage = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_gniud48', 'template_v02ukxt', form.current, 'A62CqylLvf7sXc2wq')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section className="contact section" id="contact">
      <h2 className="section_title">Get in Touch</h2>
      <h4 className="section_subtitle">Contact Us</h4>
      <div className="contact_container container grid">
        <div className="contact_content">
          <h3 className="contact_title"> Get Connect</h3>
          <div className="contact_info">
            <div className="contact_card">
              <i class=" ri-mail-line contact_card-icon"></i>
              <h3 className="contact_card-title">Email</h3>
              <span className="contact_card-data">dreamerpropertiesltd@gmail.com</span>
              <a href="mailto:dreamerpropertiesltd@gmail.com" className="contact_button">
                Write Us
                <i class="ri-arrow-right-up-fill contact_button-icon"></i>
              </a>
            </div>
            <div className="contact_card">
              <i class="ri-whatsapp-line contact_card-icon"></i>
              <h3 className="contact_card-title">Whatsapp</h3>
              <span className="contact_card-data">+8801922090882</span>
              <a href="https://www.whatsapp.com/" className="contact_button">
                Write us
                <i class="ri-arrow-right-up-fill contact_button-icon"></i>
              </a>
            </div>
            <div className="contact_card">
              <i class="ri-linkedin-box-line contact_card-icon"></i>
              <h3 className="contact_card-title">Facebook</h3>
              <span className="contact_card-data">dreamcottageltd</span>
              <a href="https://www.facebook.com/dreamcottageltd"className="contact_button">
                Follow Us
                <i class="ri-arrow-right-up-fill contact_button-icon"></i>
              </a>
            </div>
          </div>
        </div>
        {/*  Message  by client */}
        <div className="contact_content">
          <h3 className="contact_title"> Write me your Project</h3>
          <form ref={form} onSubmit={sendEmail}className="contact_form">
            <div className="contact_form-div">
              <input
                type="text"
                name="name"
                className="contact_form-input"
                placeholder="Insert your Name"
              />
            </div>
            <div className="contact_form-div">
              <input
                type="email"
                name="email"
                className="contact_form-input"
                placeholder="Enter your Email"
              />
            </div>
            <div className="contact_form-div contact_form-area">
              <textarea
                name="project"
                cols="30"
                rows="10"
                className="contact_form-input"
                placeholder="Write Your Project"
              >
              </textarea>
            </div>

           <button href="#contact" className="btn button--flex"> 
           Message
           </button> 
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
