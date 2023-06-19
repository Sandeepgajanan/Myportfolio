import React from 'react'
import "./Hero.css"
import Intro  from '../Asset/8.jpg'
import { Link } from 'react-router-dom'
export default function Heroimg() {
  return (
    <div className='hero'>
        <div className="mask">
            <img className='into-img' src={Intro} alt="IntroImg"></img>
        </div>
        <div className="content">
          <p>Im an intren at DevappSys</p>
        <h1>React Learner</h1>
        <div >
            <Link to={'/project'} className='btn'>Projects</Link>
            <Link to={'/contact'} className='btn btn-light'>Contact</Link>
        </div>
       
        </div>
    </div>
  )
}
