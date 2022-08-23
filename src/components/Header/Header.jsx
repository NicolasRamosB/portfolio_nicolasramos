import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocial from './HeaderSocial'
import ME from '../../assets/DSC_0075.jpg'
import { Link } from 'react-router-dom'

import { MdArrowForwardIos} from 'react-icons/md'
import { useTranslation } from 'react-i18next'


const Header = () => {

  const [t] = useTranslation("global")


  return (
    <header >
      

      <div className="arrow_container">
        <Link to="/" className="arrow" ></Link>
        <Link to="/about" className="arrow"><MdArrowForwardIos /></Link>
      </div>
      <div className="container header__container">
      
        <div >
          <h5>{t("header.hello")}</h5>
          <h1>Nicolas Ramos</h1>
          <div className="wrapper">
            <div className="typing-demo text-light">{t("header.front")}</div>
          </div>

        </div>

        <div className=" container containter__me ">
          <div className="me">
            <img src={ME} alt="Yo" />
          </div>

          <div className="description">
            
            <p>{t("header.about")}</p>
          <CTA />

          </div>

        </div>


        <HeaderSocial />

      </div>



    </header>
  )
}

export default Header