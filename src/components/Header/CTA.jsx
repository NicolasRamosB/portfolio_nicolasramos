import React from 'react'
import { useTranslation } from 'react-i18next'
import CV from '../../assets/cv_ramos_nicolas.pdf'

const CTA = () => {
  const [t]= useTranslation("global")
  return (
    <div className="cta">
        <a href={CV}
        download className="btn">{t("header.button_D")}</a>
        <a href="/contact" className="btn btn-primary">{t("header.button_L")}</a>
    </div>
  )
}

export default CTA