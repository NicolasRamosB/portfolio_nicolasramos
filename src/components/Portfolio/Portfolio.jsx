import React from 'react'
import './portfolio.css'
import portfolio from '../../portfolio'
import { Link } from 'react-router-dom'
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs'

const Portfolio = () => {
  return (
    <>
      <div className="arrow_container">
        <Link to="/about" ><BsArrowLeftSquareFill className="arrow" /></Link>
        <Link to="/contact" ><BsArrowRightSquareFill className="arrow" /></Link>
      </div>
      <section id="portfolio">
        <h2>Portfolio</h2>

        <div className="container protfolio__container">
          {
            portfolio.map((item) => {

              return (


                <article className="portfolio__item" key={item.id}>

                  <div className="protfolio__img">
                    <img src={item.img} alt={item.title} />
                  </div>
                  <div className="protfolio__info">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>

                  <div className="portfolio__cta">
                    <a className="btn"  href={item.github} target="_blank" rel="noreferrer">GitHub</a>
                    <a className="btn btn-primary" href={item.demo} target="_blank" rel="noreferrer">Demo</a>
                  </div>

                </article>


              )
            })

          }
        </div>

      </section >


    </>
  )
}

export default Portfolio