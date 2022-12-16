import React from 'react';
import "./About.css";
import member from "../assests/member(3).jpg";
import Content from './Content';
import Button from './Button';
import path from "../assests/Path_1348.svg"

const About = () => {
  return (
    <div className='content'>
      <div className='left'>
        <div className='card1'></div>
        <div className='card2'></div>
        <div className='card3'>
            <img src={member} alt="member" />
        </div>
        <div className='card4'>
            <span className='follow'>Follow Us</span>
            <span>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-linkedin-in"></i>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            </span>
        </div>
      </div>
      <div className='about-right'>
         <div className='left-heading'>
      <Content
                    heading1="ABO"
                    heading2="UT US"
                    subheading="Creative Design & Development"
                    pargraph="Our Mission Is To Provide Quality English
                     Language Instruction Through A Variety Of Courses
                      To International And Local Students In 
                      A Professional And Supportive Atmosphere Utilizing
                     Our Unique English Teaching Methodology. 
                     Our Mission Is To Provide."
                  />
        <Button
          name="Read More"
        />
        </div>
        <div className='background-path'>
        <img src={path} alt='img' />
     </div>
      </div>
    </div>
  )
}

export default About
