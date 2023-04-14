import "./container.css";
import React from 'react';
import arrowImg from '../assets/Vector.svg'
import navVector from '../assets/VectorPls.svg'
import darkdash from '../assets/Dashboard-DARK.png'
import lightdash from '../assets/Dashboard-LIGHT.png'

function Container() {
  return (
    <>
      <div className="trst_btn_area">
      <button className="trst_btn"><span><img src={navVector} alt="navigation-svg" className='nav_svg'/></span> Trusted</button>
      </div>
    <div className="main_area">
      <img src={arrowImg} alt="arrowImg" className="bg_arrow"/>

      <div className="left_container">
        
        <h2>Data that’s <br></br> Professional</h2>
        <p>If trading is a profession, then your data needs to be <br></br> professional too. Trading as profession presents Data Blaze.</p>
      <button className="login_btn">Login</button>     <button className="signup_btn">Signup</button>
      </div>


      <div className="right_container">
      <img src={darkdash} alt="arrowImg" className="dark_Dash"/>
      <img src={lightdash} alt="arrowImg" className="light_Dash"/>
      </div>
    </div>
     <div className="features_cont">
      <div className="ftext_area">
      <h2>Features</h2>
     <p className="ftext">You have been looking for</p>
      </div>
     
     <div className="f_box">
       <div className="item"> 
         <h3>Superior Data </h3>
         <p>Covers all the data points<br></br>meant for professional traders<br></br> and investors in the market.</p>
       </div>
       <div className="item"> 
         <h3>Superior Data </h3>
         <p>Covers all the data points<br></br>meant for professional traders<br></br> and investors in the market.</p>
       </div>
       <div className="item"> 
         <h3>Superior Data </h3>
         <p>Covers all the data points<br></br>meant for professional traders<br></br> and investors in the market.</p>
       </div>
       <div className="item"> 
         <h3>Superior Data </h3>
         <p>Covers all the data points<br></br>meant for professional traders<br></br> and investors in the market.</p>
       </div>
       

     </div>
    </div>
    <div className="main_area reverse">
      {/* <img src={arrowImg} alt="arrowImg" className="bg_arrow"/> */}
      <div className="left_container">
        
        <h2>Finance can’t hold<br></br> you back now.</h2>
        <p>If finance is your challenge then finance can’t challenge, if you<br></br> are a part of trading as profession. we are there to support you.<br></br> To know more about how we can help you.</p>
        <button className="signup_btn">Continue Now</button>     
      </div>


      <div className="right_container ">
      <img src={darkdash} alt="arrowImg" className="dark_Dash dark_down"/>
      <img src={lightdash} alt="arrowImg" className="light_Dash light_down"/>
      </div>
    </div>
    </>
  )
}

export default Container
