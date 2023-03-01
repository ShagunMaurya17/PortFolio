import React from 'react'
import './Education.css'
import Dtu from '../../img/DTU.png';
import High from '../../img/schoolhigh.png';
import Daya from '../../img/daya.png';
import Card from '../Card/Card';
import Resume from './ShagunMaurya_offcampus.pdf';
const Education = () => {
  return (
    <div className="Education">
        {/*left*/}
        <div className="awesome">
        <span>Education</span>
        <span>Pursuing</span>
        <spane>
            Currently pursuing my 3rd Year B.Tech at Delhi Technological University(DTU)
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Major-Mechanical Engineering
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Minor-Computer Engineering
        </spane>
        <a href={Resume} download>
            <button className="button s-button">Download Resume</button>
        </a>
        
        <div className="blur s-blur1" style={{background: "#ABF1FF94"}}>
        </div>
        </div>
        {/*right*/}
        <div className="cards">
        <div style={{left: '17rem'}}>
            <Card
            photo ={Dtu}
            heading ={'Delhi Technological University'}
            detail = {"ME,B-Tech,2K24 Batch"}
            />
        </div>
        {/*second card*/}
        <div style={{top:"12rem" ,left: '-1rem'}}>
            <Card
            photo ={High}
            heading ={'RSBV Surajmal Vihar'}
            detail = {"CBSE(Class XII),PCM,2K19"}
            />
        </div>
        <div style={{top:"19rem",left: '15rem'}}>
            <Card
            photo ={Daya}
            heading ={'Dayanand Model School'}
            detail = {"CBSE(class X),2K17"}
            />
        </div>
        <div className="blur s-blur2" style={{backgroud:"var(--purple)"}}></div>
        <div className="blur s-blur11" style={{backgroud:"var(--purple)"}}></div>
        </div>
    </div>
  )
}

export default Education