import React from 'react'
import './Tools.css'
import { FaPython, FaJava,FaNodeJs,FaAngular,} from "react-icons/fa";

export default function Tools() {
  return (
    <div className='tools'>
        <h1 className='h1'>Languages I Know</h1>
       <div className="card-container">
        <div className="cards">
         <FaPython  size={50} color='pink'/>
        
       </div>
       <div className="cards">
       <FaJava size={50} color='pink'/>
       </div>
       <div className="cards">

       <FaNodeJs size={50} color='pink'/>
       </div>
       <div className="cards">
        <FaAngular size={50} color='pink'/>
        </div>
        </div>
    </div>
  )
}
