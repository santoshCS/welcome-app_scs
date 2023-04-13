import React from 'react'
import arrow from '../assets/Arrowbtn.svg';

export default function Footer() {
  return (
    <div className='footer_area'>
      <p>
      Your <span className='footer_word'>career</span> is waiting ahead
      </p>
      <p>
      click on the button and <span className='footer_word'>get started</span> 
      </p>
      <button className='btn_get'> get started 
      <img src={arrow} className="arrowbtn" alt="arrow" />
      </button>
    </div>
  )
}
