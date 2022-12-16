import React from 'react';
import "./Header.css";
import heropath from "../assests/Path_1348.svg";
import bgone from "../assests/Path-4.svg";
import bgtwo from "../assests/Path-6.svg";
import header from "../assests/header.png";
import Navbar from './Navbar';
import Content from './Content';
import Button from './Button';


export const Header = () => {
  return (
    <div className='container'>
      <Navbar/>
      <div className='hero'>
          <div className='hero-left'>
            <div className='bgone'>
                <img src={bgone} alt="hero"/>
            </div>
              <div className='left-heading'>
                <Content
                    heading1="BEST"
                    heading2="BUSINSESS"
                    subheading="We're Equally Excited About Corporate"
                    pargraph="Our mission is to provide quality English
                              language instruction through a variety
                            of courses to international and local"
                  />
              </div>
              <div className='left-button'>
                <Button
                name="learn more"
                />
              </div>
              <div className='social'>
                <span>Follow Us</span>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin-in"></i>
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-twitter"></i>
              </div>
              <div className='bgtwo'>
                  <img src={bgtwo} alt="hero"/>
              </div>
          </div>
          <div className="hero-right">
            <div className='right-img'>
                  <img src={header} alt="hero"/>
            </div>
            <div className='right-svg'>
                  <img src={heropath} alt="hero"/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Header;
