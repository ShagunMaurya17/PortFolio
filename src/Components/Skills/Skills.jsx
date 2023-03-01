import React from 'react'
import './Skills.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import cplus from '../../img/c-logo.png';
import rect from '../../img/react.png';
import htt from '../../img/html.png';

const skills = () => {
  return (
    <div className="skills">
      <div className="awesome">
        <span>Skills</span>
      </div>
      <div className="skillshere">
        <span>Here is my skills</span>
      </div>
        <br />
        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='skills-slider'
        >
            <SwiperSlide>
                <img src={htt} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={rect} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={cplus} alt="" />
            </SwiperSlide>  
        </Swiper>
    </div>
  )
}

export default skills
