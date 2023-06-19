import React from 'react'
import './Contact.css'
export default function Contact1() {
  return (
    <div className='form'>
      <form>
      <label>Name</label>
     <input type='text' ></input>
     <label>Email</label>
     <input type='email' ></input>
     <label>Subject</label>
     <input type='text'></input>
     <label>Message</label>
     <textarea  rows="6" placeholder='type your text here'></textarea>
     <button className='btn'>Submit</button>
     </form>
    </div>
  )
}
