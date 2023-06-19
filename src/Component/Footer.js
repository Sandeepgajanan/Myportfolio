import React from 'react'
import './Footer.css'
import {FaHome,FaPhone,FaMailBulk, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"

export default function Footer() {
  return (
    <div className='footer'>
        <div className="footer-container">
            <div className="left">
               <div className="location"><FaHome size={20} style={{color:"white",marginRight:"2rem"}}/>
               <div><p>Aimit</p>
               <p>Beeri Madoor</p>
               </div>
                </div>
            
            
        
            <div className="phone">
            <h4><FaPhone size={20} style={{color:"white",marginRight:"2rem"}}/>9482064048</h4>
            </div>
          
            <div className="email">
            <h4><FaMailBulk size={20} style={{color:"white",marginRight:"2rem"}}/>@beingsandeepg@gmail.com</h4>
            </div>
            </div>
       
        <div className="right">
        <div className="social">
        <a href="https://www.instagram.com/sandeep_gajanan"
                 target='blank'><FaInstagram size={20} style={{color:"white",marginRight:"2rem"}}/></a>
           <a href="https://twitter.com/SandeepGajanan3"
                 target='blank'><FaTwitter size={20} style={{color:"white",marginRight:"2rem"}}/></a>

          <a href="https://www.linkedin.com/in/sandeep-gajanan-05610a256"
                 target='blank'><FaLinkedin size={20} style={{color:"white",marginRight:"2rem"}}/></a>
            </div>
        </div>
    </div>
    </div>
  )
}
