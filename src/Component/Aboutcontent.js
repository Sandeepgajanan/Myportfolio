import React from 'react'
import './Aboutcontentstyle.css'
import { Link } from 'react-router-dom'
import react1 from '../Asset/111.jpg'
export default function Aboutcontent() {
  return (
    <div className='about'>
        <div className="left">
            <h1>Who am i</h1>
            <p>Currently im an intern at DevappSys and  im in final semister of mca in AIMIT.</p>
       
        <Link to="/contact"><button className='btn'>Contact</button></Link>
        <br/><Link to=""><button className='btn' onClick={()=>{window.open('resume.pdf')}}>Download mycv</button></Link>
        </div>
        <div className="right">
            <div className="img-container">
             
                    <img src={react1} alt="" />
               
            </div>
        </div>
      
    </div>
  )
}
