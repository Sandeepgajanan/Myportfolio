import React from 'react'
import Workcard from './Workcard'
import Workpro from './Workpro'
import './Workcard.css'

export default function Work() {
  return (
    <div className='work-container'>
      <h1 className='project-heading'>Projects</h1>
    <div className="project-container">
    {Workpro.map((val,ind)=>{
        return(
            <Workcard
            imgsrc={val.imgsrc}
            key={ind}
            title={val.title}
            text={val.text}
            view={val.view}
            />
        )
    })}

    </div>
    
    
    
    </div>
  )
}
