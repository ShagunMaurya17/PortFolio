import React, { useContext } from "react";
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Leetcode from '../../img/leetcode2.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbsup from '../../img/thumbup.png';
import Bachpan from '../../img/bachpan.jpeg';
import glassesimoji from "../../img/glassesimoji.png";
import Crown from '../../img/crown.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';

import { themeContext } from "../../Context";
import {useInsertionEffect} from 'react';

const Intro = () => {
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div>
      <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{ color: darkMode ? "white" : "" }}>Hi! I'm</span>
                <span>Shagun Maurya</span>
                <span>Fullstack Web Developer with intermediate
                    experience in the web designing and web 
                    hosting.
                </span>
            </div>
            <button className="button i-button">Hire Me</button>

            <div className="i-icons">
                <a href="https://github.com/ShagunMaurya17"><img src={Github} alt="" /></a>
                <a href="https://www.linkedin.com/in/shagun-maurya-10112001/"><img src={LinkedIn} alt="" /></a>
                <a href="https://www.instagram.com/shagun_maurya17/"><img src={Instagram} alt="" /></a>
                <a href="https://leetcode.com/ShagunMaurya17/"><img src={Leetcode} alt="" /></a>

            </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={boy} alt="" />
            
            <div style={{top: '-4%', left: '68%'}}>
                <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
            </div>
            <div style={{top: '18rem', left: '0rem'}}>
                <FloatingDiv image={thumbsup} txt1='Cloud' txt2='Enthusiast'/>
            </div>
            <div className="blur" style={{background:"rgb(238 211 255"}}></div>
            <div className="blur"
            style={{
                background: 'lightblue',
                top: '17rem',
                width: '21rem',
                height: '11rem',
                left:'-9rem'
            }}></div>
        </div>
      </div>
    </div>
  )
}

export default Intro
