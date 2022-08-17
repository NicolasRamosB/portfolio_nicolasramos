import React, { useRef } from 'react';
import './contact.css'

import { Link } from 'react-router-dom'
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { AiOutlineWhatsApp } from 'react-icons/ai'

import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cis5mwk', 'template_twjgxem', form.current, 'OM6m-z0VAdWOqKnEq')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };


  return (<>
    <div className="arrow_container">
      <Link to="/portfolio" ><BsArrowLeftSquareFill className="arrow" /></Link>
      <Link to="" aria-disabled ><BsArrowRightSquareFill className="arrow" /></Link>
    </div>
    <section id="contact">
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className="contact_icon" />
            <h4>Email</h4>
            <h5>nicolasramos.borner@gmail.com</h5>
            <a href="mailto:nicolasramos.borner@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>

          <article className="contact__option">
            <AiOutlineWhatsApp className="contact_icon" />
            <h4>Whatsapp</h4>
            <h5>+54 9 1164953125</h5>
            <a href="https://api.whatsapp.com/send?phone=5491164953125" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type='submit' className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>


  </>
  )
}

export default Contact