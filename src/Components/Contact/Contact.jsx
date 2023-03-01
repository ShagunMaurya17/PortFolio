import React from 'react'
import './Contact.css'
const Contact = () => {
    
  return (
    <div className="Contact_form">
        <div className="w-left">
            <div className="awesome">
                <span id="hemlo">Get In Touch</span>
                <span id="hemlo">Contact me</span>
                <div className="blur s-blur1"
                style={{background: "#ABF1FF94"}}></div>
            </div>
        </div>
    <div className="c-right">
        <form action="https://getform.io/f/fad4f721-1826-4842-9027-66e6c9a13d2d"
            method="POST">
            <input type="text" name = "name" className="user" placeholder ="Name" />
            <input type="email" name ="email" className="user" placeholder="Email"  />
            <textarea name="message" className="message" placeholder="Message"  />
            <input type="Submit" value="Send" className="button" />
            <div
            className="blur c-blur1" style = {{background: "var(--purple)"}}
            ></div>
        </form>
    </div>
    </div>
    


  )
}

export default Contact