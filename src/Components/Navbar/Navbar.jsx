import React from 'react'
import Toggle from "../Toggle/Toggle";
import './Navbar.css';
import {Link} from 'react-scroll';
function Navbar() {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">PortFolio</div>
            <Toggle />
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType: 'none'}}>

                    <li>
                        <Link activeClass="active" to="Navbar" spy={true} smooth={true}>Home</Link>
                    </li>
                    <li>
                        <Link to="Education" spy={true} smooth={true}>
                            Education
                        </Link></li>
                    <li>
                        <Link to="work" spy={true} smooth={true}>
                            Experience
                        </Link>
                    </li>
                    <li>
                        <Link to="skills" spy={true} smooth={true}>Skills</Link></li>
                    <li><Link to="project" spy={true} smooth={true}>Projects</Link></li>
                </ul>
            </div>
            <Link to="Contact_form" spy={true} smooth={true}>
            <button className="button n-button">
                Contact Me
            </button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar
