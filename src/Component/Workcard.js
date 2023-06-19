import React from 'react'
import './Workcard.css'
import { NavLink } from 'react-router-dom'
export default function Workcard(props) {
  return (
    <div className="project-card">
    <img src={props.imgsrc} alt="image"/>
<h2 className='project-title'>{props.title}</h2>
<div className="pro-details">
<p>{props.text}</p>
<div className="pro-btns">
    <NavLink to={props.view} className="btn" target='blank'>view</NavLink>

</div>
</div>
</div>
    
    
    
  
  )
}
