import React from 'react'
import { useTranslation } from 'react-i18next'
import './buttonTraslate.css'
import IMGArg from '../../assets/argentina.png'
import IMGUsa from '../../assets/usa.png'

const ButtonTraslate = () => {

  const [t, i18n] = useTranslation("global");

  return (
    <div className="container translate__container">
      <button className="button__translate" onClick={() => i18n.changeLanguage("es")}> <img src={IMGArg} alt="arg" /> </button>
      <button className="button__translate" onClick={() => i18n.changeLanguage("en")}> <img src={IMGUsa} alt="usa" /> </button>
    </div>
  )
}

export default ButtonTraslate