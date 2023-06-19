import React from 'react'
import Nav from '../Component/Nav'
import Hero2 from '../Component/Hero2'
import Footer from '../Component/Footer'
import Work from '../Component/Work'
export default function Project() {
  return (
    <div>
        <Nav/>
        <Hero2 heading="Projects" text="Some of my recent work"/>
     <Work/>
      <Footer/>
    </div>
  )
}
