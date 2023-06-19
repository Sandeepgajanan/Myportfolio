import React from 'react'
import Nav from '../Component/Nav'

import Footer from '../Component/Footer'
import Hero2 from '../Component/Hero2'
import Contact1 from '../Component/Contact1'
export default function Contact() {
  return (
    <div>
      <Nav/>
    <Hero2 heading="CONTACT" text="Lets have a chat" />
     <Contact1/>
      <Footer/>
    </div>
  )
}
