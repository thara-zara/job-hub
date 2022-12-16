import React from 'react';
import "./Portfolio.css";
import Content from './Content';
import slide1 from "../assests/slider1.jpg";
import slide2 from "../assests/slider2.jpg"
import slide3 from "../assests/slider3.jpg"

const Portfolio = () => {
  return (
    <div className='portfolio'>
        <div className='port'>
            <div className='slider'>
                <div className='slide'>
                    <img src={slide1} alt='img'/>
                    <h5>agllery</h5>
                    <h6>diomond</h6>
                </div>
                <div className='slide'>
                <img src={slide2} alt='img'/>
                <h5>agllery</h5>
                    <h6>diomond</h6>
                </div>
                <div className='slide'>
                <img src={slide3} alt='img'/>
                <h5>agllery</h5>
                    <h6>diomond</h6>
                </div>
                <div className='slide'>
                <img src={slide2} alt='img'/>
                <h5>agllery</h5>
                    <h6>diomond</h6>
                </div>
            </div>
            <div className='portfolio-head'>
                <div className='left-heading'>
                    <Content
                    heading1="PORT"
                    heading2="FOLIO"
                    subheading="Experienced In Gallery"
                    />
                </div>
                <div className='arrow'>
                    <div className='arrow-icon'>
                    <i className="fas fa-arrow-left" />
                    </div>
                    <div className='arrow-icon'>
                    <i className="fas fa-arrow-right" />
                    </div>
                </div>
            </div>
        </div>
        <div className='port-color'></div>
        <div className='port-view'>
            view all portfolio
        </div>
    </div>
  )
}

export default Portfolio;
