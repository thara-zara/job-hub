import React from 'react'
import "./Service.css";
import Content from './Content';
//import Button from './Button';
import gal1 from "../assests/member1.jpg"
import gal2 from "../assests/member3.jpg"
import Button from './Button';

const Service = () => {
  return (
    <div className='service'>
      <div className='service-top'>
          <div className='service-head'>
              <div className='left-heading'>
                  <Content
                  heading1="OUR"
                  heading2="SERVICES"
                  subheading="Demand First-Rate Best Services"
                  pargraph="Our Mission Is To Provide Quality
                    English Language Instruction 
                    Through A Variety Of Courses To International"
                  />
              </div>
          </div>
          <div className='service-card five'>
            <img src={gal1} alt='img'/>
            <span>web design</span>
          </div>
          <div className='service-card four'>
            <img src={gal2} alt='img'/>
            <span>web design</span>
          </div>
      </div>
      <div className='service-bottom'>
          <div className='service-card one'>
            <img src={gal2} alt='img'/>
            <span>web design</span>
          </div>
          <div className='service-card two'>
            <img src={gal1} alt='img'/>
            <span>web design</span>
          </div>
          <div className='service-card three'>
            <img src={gal2} alt='img'/>
            <span>web design</span>
          </div>
      </div>
      <div className='service-btn'>
        <Button
      name="All service"
      />
      </div>
      
    </div>
  )
}

export default Service
