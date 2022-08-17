import React from 'react'
import {AiFillGithub, AiFillLinkedin, AiOutlineWhatsApp} from 'react-icons/ai'

const HeaderSocial = () => {
  return (
    <div className="header__socials">
        <a href="http://www.linkedin.com/in/nicolas-ramos-161611219/" target="_blank" rel="noreferrer"><AiFillLinkedin/></a>
        <a href="http://www.github.com/NicolasRamosB" target="_blank" rel="noreferrer"><AiFillGithub/></a>
        <a href="https://api.whatsapp.com/send?phone=5491164953125" target="_blank" rel="noreferrer"><AiOutlineWhatsApp/></a>
    </div>
  )
}

export default HeaderSocial