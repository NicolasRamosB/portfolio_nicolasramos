import React from 'react'
import './portfolio.css'
import portfolio from '../../portfolio'
import { Link } from 'react-router-dom'
import { MdArrowForwardIos, MdArrowBackIosNew } from 'react-icons/md'
import { useTranslation } from 'react-i18next'



const Portfolio = () => {

  const [t]= useTranslation("global")
  return (
    <>
      <div className="arrow_container">
        <Link to="/about" ><MdArrowBackIosNew className="arrow" /></Link>
        <Link to="/contact" ><MdArrowForwardIos className="arrow" /></Link>
      </div>
      <div id="portfolio">

        <div className=" container protfolio__container">
          <h2>Portfolio</h2>

          {
            portfolio.map((item) => {

              return (

                <>
                  <article className="portfolio__item" key={item.id}>

                    <div className="protfolio__info">
                      <h3>{item.title}</h3>
                      <small>{item.description}</small>
                    </div>

                    <div className="portfolio__cta">
                      <a className="btn" href={item.github} target="_blank" rel="noreferrer">GitHub</a>
                      <a className="btn btn-primary" href={item.demo} target="_blank" rel="noreferrer">Demo</a>
                    </div>



                  </article>

                </>



              )
            })

          }

          <article className="portfolio__item">

            <div className="protfolio__info">
              <h3>{t("portfolio.prox")}</h3>
              <small>{t("portfolio.wip")}</small>
            </div>

            <div className="portfolio__cta">
              <a className="btn" href="/portfolio">GitHub</a>
              <a className="btn btn-primary" href="/portfolio" >Demo</a>
            </div>

          </article>
        </div>

      </div>


    </>
  )
}

export default Portfolio