import React, { useRef } from 'react';
import './contact.css'

import { Link } from 'react-router-dom'
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { AiOutlineWhatsApp } from 'react-icons/ai'

import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';

import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';

const Contact = () => {

  const [t, i18n] = useTranslation("global")

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
    <div id="contact">
    
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className="contact_icon" />
            <h4>Email</h4>
            <h5>nicolasramos.borner@gmail.com</h5>
            <a href="mailto:nicolasramos.borner@gmail.com" target="_blank" rel="noreferrer">{t("contact.send_m")}</a>
          </article>

          <article className="contact__option">
            <AiOutlineWhatsApp className="contact_icon" />
            <h4>Whatsapp</h4>
            <h5>+54 9 1164953125</h5>
            <a href="https://api.whatsapp.com/send?phone=5491164953125" target="_blank" rel="noreferrer">{t("contact.send_m")}</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
        <h2>{t("contact.title")}</h2>
          <span className="p-float-label">
            <InputText id="name" className="input"  type="text" name="name" required />
            <label htmlFor="name">{t("contact.name")}</label>
          </span>
          <span className="p-float-label">
            <InputText id="email" className="input" type="email" name="email" required />
            <label htmlFor="email">{t("contact.email")}</label>
          </span>
          <span className="p-float-label">
            <InputTextarea  id="message" className="textArea" name="message" rows="7" required></InputTextarea >
            <label htmlFor="message">{t("contact.message")}</label>
          </span>

          <button type='submit' className="btn btn-primary">{t("contact.send_m")}</button>
        </form>
      </div>
    </div>


  </>
  )
}

export default Contact