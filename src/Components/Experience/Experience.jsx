import React from 'react'
import './Experience.css'
import Certi from "../../img/Certi.png";
const Experience = () => {
  return (
    <div className="work">
        <div className="awesome">
        <span>Internship</span>
        <span>Company-Future Ready Talent by Microsoft</span>
        <spane>
            APRIL 2022 - MAY 2022
            <br />
            Tech Stack - HTML,CSS,JAVASCRIPT
            <br />
            Hosting Server - Github,Microsoft Azure
            <br />
            Implemented a Fitness Website and depolyed using Github pages.
            <br/>
            Worked on a Azure WebStatic Cloud services and host website on Microsoft Azure. 
        </spane>
        <a href="https://thankful-sand-0a2c80810.1.azurestaticapps.net/">
            <button className="button s-button">View Project</button>
        </a>
        
        <div className="blur s-blur1" style={{background: "#ABF1FF94"}}>
        </div>
        <div className="blur p-blur5" style={{backgroud:"var(--purple)"}}></div>
        <div className="e-right">
            <img src={Certi} alt="" />
        </div>
        <div className="blur s-blur2" style={{backgroud:"var(--purple)"}}></div>
        <div className="blur s-blur3" style={{background: "#ABF1FF94"}}></div>
        <div className="blur s-blur4" style={{background: "#ABF1FF94"}}></div>
        </div>
    </div>
  )
}

export default Experience