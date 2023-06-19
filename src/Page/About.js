import React from 'react'
import Nav from '../Component/Nav'
import Footer from '../Component/Footer'
import Hero2 from '../Component/Hero2'
import Tools from '../Component/Tools'
import Aboutcontent from '../Component/Aboutcontent'
export default function About() {
  return (
    <div>
      <Nav/>
      <Hero2 heading="ABOUT" text="MCA STUDENT"/>
      <Aboutcontent/>
      <Tools/>
      <Footer/>
    </div>
  )
}
