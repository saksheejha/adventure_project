import React from 'react';
import './programs.css';
import {programsData} from '../../data/programsData';
import RightArrow from '../../assets/rightArrow.png'

const Programs = () => {
  return (
   <div className="Programs" id='programs'>
    <div className="programs-header">
     <span className='stroke-text'>Explore our</span>
     <span>programs</span>
     <span className='stroke-text'>to shape you</span>
    </div>
    <div className="programs-catrgories">
        { programsData.map((program)=>(
            <div className="categories">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now"><span>Join Now</span><img src={RightArrow} alt="" /></div>
            </div>

        ))}
    </div>
   </div>
  )
}

export default Programs
