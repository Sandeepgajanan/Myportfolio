import React, { useState } from 'react'
import "./Nav.css"
import { Link } from 'react-router-dom'
import {FaBars,FaTimes} from 'react-icons/fa'
export default function Nav() {
  const[click,setclick]=useState(false);
  const handleclick=()=>{
    setclick(!click);
  }
  const[color,setcolor]=useState(false);
  const changecolor=()=>{
    if(window.scrollY>=100){
      setcolor(true);
    }else{
      setcolor(false);
    }
  };
window.addEventListener("scroll",changecolor);
  return (
    <div>
    <div className={color ? "header header-bg":"header"}>
      <Link to={'/'}>
        <h1>Sandeep</h1>
      </Link>
      <ul className={click ? "nav-menu active":"nav-menu"}>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/contact'}>Contact</Link></li>
        <li><Link to={'/project'}>Project</Link></li>
      </ul>
      <div className='hamburger' onClick={handleclick}>
     {click ? ( <FaTimes size={20} style={{color:"white"}}/>):
     (<FaBars size={20} style={{color:"white"}}/>)}
    
     
      </div>
    </div>
    </div>
  )
}
