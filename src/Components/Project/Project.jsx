import React from 'react'
import './Project.css'
const Project = () => {
  return (
    <div className="work" id="project">
        <div className="awesome">
        <span>Project</span>
        <span>Anna-The Smart Assistant</span>
        <spane>
            APRIL 2021 - JULY 2021
            <br />
            Tech Stack - Python and Python Module
            <br />
            Upgraded Version of the Existing Voice Assistant.
            <br />
            Works on Both Window and Mac.
            <br/>
            Perform many tasks like Playing Music,Opening Webpages apps,and many more.
            <br />
            User also set coustom questions and answers and make it more Powerful and Userfriendly.
            <br />
            Works very efficiently and saves user time.
            <br />
        </spane>
        {/* <a href="https://thankful-sand-0a2c80810.1.azurestaticapps.net/">
            <button className="button s-button">View Project</button>
        </a> */}
        <br />
        <div className="awesome">
        <span>Achievements</span>
        <br />
        </div>
        <div className='new-div'>
            <span>Ranked 532 in July Long 2022 Division 3 by Codechef</span>
            <br />
            <span>Open Source Contribution 4PR merged in Hacktober Fest2022</span>
            <br />
            <span>Completed Google Career Practitioner path(GCCP) </span>
            <br />
            <span>Completed Google Cloud Facilitator Program 2022 (GCRF)
            </span>
        </div>


        
        <div className="blur s-blur1" style={{background: "#ABF1FF94"}}>
        </div>
        <div className="blur p-blur5" style={{backgroud:"var(--purple)"}}></div>
        <div className="e-right">
            <img src='' alt="" />
        </div>
        <div className="blur s-blur2" style={{backgroud:"var(--purple)"}}></div>
        <div className="blur s-blur3" style={{background: "#ABF1FF94"}}></div>
        <div className="blur s-blur4" style={{background: "#ABF1FF94"}}></div>
        </div>
    </div>
  )
}

export default Project
