import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocial from './HeaderSocial'
import ME from '../../assets/DSC_0075.jpg'
import { Link } from 'react-router-dom'

import { BsArrowRightSquareFill, BsArrowLeftSquareFill } from 'react-icons/bs'


const Header = () => {


  return (
    <header >
      <div className="arrow_container">
        <Link to="/" className="arrow" ><BsArrowLeftSquareFill /></Link>
        <Link to="/about" className="arrow"><BsArrowRightSquareFill /></Link>
      </div>
      <div className="container header__container">

        <div >
          <h5>Hello I,m</h5>
          <h1>Nicolas Ramos</h1>
          <div className="wrapper">
            <div className="typing-demo text-light">Frontend Developer React Jr.</div>
          </div>

          <CTA />
        </div>

        <div className=" container containter__me ">
          <div className="me">
            <img src={ME} alt="Yo" />
          </div>

          <div className="description">
            <h2>About Me</h2>
            <p>Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Soluta voluptate
              natus maiores nihil doloribus itaque
              tenetur corrupti? Ex dolore error
              beatae quisquam veniam, debitis
              minima dolorem iste, cupiditate
              dolor sit?</p>
          </div>

        </div>


        <HeaderSocial />

      </div>



    </header>
  )
}

export default Header