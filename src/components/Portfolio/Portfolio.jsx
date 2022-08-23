import React from 'react'
import './portfolio.css'
import portfolio from '../../portfolio'
import { Link } from 'react-router-dom'
import { MdArrowForwardIos, MdArrowBackIosNew } from 'react-icons/md'


const Portfolio = () => {
  return (
    <>
      <div className="arrow_container">
        <Link to="/about" ><MdArrowBackIosNew className="arrow" /></Link>
        <Link to="/contact" ><MdArrowForwardIos className="arrow" /></Link>
      </div>
      <div id="portfolio">
      <h2>Portfolio</h2>

        <div className=" container protfolio__container">
          
          {
            portfolio.map((item) => {

              return (


                <article className="portfolio__item" key={item.id}>

                  <div className="protfolio__img">
                    <img src={item.img} alt={item.title} />
                  </div>
                  <div className="protfolio__info">
                    <h3>{item.title}</h3>
                    
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

      </div>


    </>
  )
}

export default Portfolio