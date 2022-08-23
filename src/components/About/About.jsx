import React from 'react'
import './about.css'
import { Link } from 'react-router-dom'

import { FaAward, FaCss3Alt, FaReact, FaFigma, FaNpm } from 'react-icons/fa'
import { BsBootstrapFill } from 'react-icons/bs'
import { AiFillHtml5 } from 'react-icons/ai'
import { SiVercel, SiJavascript, SiTailwindcss, SiAdobephotoshop, SiAdobelightroom, SiAdobeillustrator } from 'react-icons/si'
import { DiGit } from 'react-icons/di'
import { FiLink } from 'react-icons/fi'

import { MdArrowForwardIos, MdArrowBackIosNew } from 'react-icons/md'



import { Pagination, Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import certificated from '../../certificate'

const About = () => {

  return (
    <>

      <div className="arrow_container">
        <Link to="/" ><MdArrowBackIosNew className="arrow" /></Link>
        <Link to="/portfolio" ><MdArrowForwardIos className="arrow" /></Link>
      </div>

      <section id="about" className="container">
        <div className="container about__container">


          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={5}
            
            
            breakpoints={ {
              600: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
        
            
            grabCursor={true}
            
            

            pagination={{
              clickable: true,
            }}
            navigation
            className="mySwiper about__content"

          >
            {
              certificated.map((item) => {

                return (
                  <SwiperSlide className="about__card" key={item.id}>
                    
                    <img src={item.img} alt={item.title} />
                    <h3>{item.title} <FaAward className="about__icon" /></h3>
                    <small>{item.from}</small>

                    <a href={item.link} target="_blank" rel="noopener noreferrer"> Certified <FiLink/> </a>

                  </SwiperSlide>
                )

              })
            }

          </Swiper>




        </div>

        <div className="container skills">
          <article className="skills__container">
            
            <Swiper
              modules={[ Autoplay ]}
              
              

              breakpoints={ {
                600: {
                  slidesPerView: 2,
                  spaceBetween: 0,
                },
                
                1024: {
                  slidesPerView: 6,
                  spaceBetween: 50,
                },
              }}
          
              
              speed={1000}
              grabCursor={true}
             
              
              freeMode={true}
              
              autoplay={{
                delay: 1,
                disableOnInteraction: false
              }}

             
              
              className="skills__content">

              <SwiperSlide>
                <i className="icon1"><AiFillHtml5 /><small>HTML5</small></i>
              </SwiperSlide>

              <SwiperSlide>
                <i className="icon2"><FaCss3Alt /><small>CSS3</small></i>
              </SwiperSlide>

              <SwiperSlide>
                <i className="icon3"><BsBootstrapFill /><small>Bootstrap</small></i>
              </SwiperSlide>

              <SwiperSlide>
                <i className="icon4"><SiTailwindcss /><small>Tailwind</small></i>
              </SwiperSlide>

              <SwiperSlide>
                <i className="icon5"><SiJavascript /><small>Javascript</small></i>
              </SwiperSlide>

              <SwiperSlide>
                <i className="icon6"><FaReact /><small>React</small></i>
              </SwiperSlide>

              <SwiperSlide>
                <i className="icon7"><DiGit /><small>Git</small></i>
              </SwiperSlide>

              <SwiperSlide>
                <i className="icon8"><SiVercel /><small>Vercel</small></i>
              </SwiperSlide>

              <SwiperSlide>
                <i className="icon9"><FaNpm /><small>Npm</small></i>
              </SwiperSlide>

              <SwiperSlide>
                <i className="icon10"><SiAdobephotoshop /><small>Photoshop</small></i>
              </SwiperSlide>

              <SwiperSlide>
                <i className="icon11"><SiAdobelightroom /><small>lightroom</small></i>
              </SwiperSlide>

              <SwiperSlide>
                <i className="icon12"><SiAdobeillustrator /><small>illustrator</small></i>
              </SwiperSlide>

              <SwiperSlide>
                <i className="icon13"><FaFigma /><small>Figma</small></i>
              </SwiperSlide>


            </Swiper>
          </article>
        </div>


      </section>



    </>
  )
}

export default About