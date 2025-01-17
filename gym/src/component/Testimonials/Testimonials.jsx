import React from 'react'
import './Testimonials.css'
import {testimonialsData} from "../../data/testimonialsData";
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import { useState } from 'react';

const Testimonials = () => {
  const[selected,setselected]=useState(0);
  const tLength=testimonialsData.length;


  return (
   <div className="Testimonials">
    <div className="left-t">
        <span>Testimonials</span>
        <span className='stroke-text'>what they</span>
        <span>say about us</span>
        <span>
          {testimonialsData[selected].review}
        </span>
        <span>
<span style={{color:"orange" }}>
{testimonialsData[selected].name}
</span>{" "}
-{testimonialsData[selected].status}
        </span>
    </div>
    <div className="right-t">
      <div></div>
      <div></div>
      <img src={testimonialsData[selected].image} alt="" />
      <div className="arrows">
        <img 
        
        src={leftArrow} alt="" />
        <img  
        
        src={rightArrow} alt="" />
    
      </div>
    </div>
   </div>

  )
}

export default Testimonials