import React from 'react'
import './navbar.css'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiChat } from 'react-icons/bi'
import { FaAward } from 'react-icons/fa'

import { MdWeb } from 'react-icons/md'
import { NavLink } from 'react-router-dom'

import { Tooltip } from '@mui/material'
import { useTranslation } from 'react-i18next'



const Navbar = () => {
  const [t] = useTranslation("global")


  return (
    <>
      <nav>
        <Tooltip title={t("nav.home")} placement="top">
          <NavLink to="/" ><AiOutlineUser /></NavLink>
        </Tooltip>

        <Tooltip title={t("nav.certificate")} placement="top">
        <NavLink to="/about"><FaAward /></NavLink>
        </Tooltip>
        
        <Tooltip title="Portfolio" placement="top">
        <NavLink to="/portfolio" ><MdWeb /></NavLink>
        </Tooltip>

        <Tooltip title={t("nav.contact")} placement="top">
        <NavLink to="/contact" ><BiChat /></NavLink>
        </Tooltip>


      </nav>

     

    </>

  )
}

export default Navbar