import React from 'react';
import "./Process.css";
import Content from './Content';
import img1 from  "../assests/group2.jpg";
import img2 from  "../assests/Cog.png";
import img3 from  "../assests/Star.png";
import img4 from  "../assests/Bulb.png";
import img5 from  "../assests/our-Process.svg";

const Process = () => {
  return (
    <div className='process'>
        <div className='top-p'>
            <div className='top-p-head'>
            <div className='left-heading'>
          <Content
                      heading1="our"
                      heading2="process"
                      subheading="the exceptional craftmen of our work "
                    />
          </div>
            </div>
            <div className='top-p-detail'>
            <p>Our Mission Is To Provide Quality English
            Our Mission Is To Provide Quality English
            Our Mission Is To Provide Quality English
            Our Mission Is To Provide Quality English
            Our Mission Is To Provide Quality English
            Our Mission Is To Provide Quality English

            </p>
            </div>
        </div>
        <div className='bottom-p'>
            <div className='bottom-left'>
                <img src={img1} alt="img" />
                <div className="b-left-img">
                    <img src={img5} alt="img" />
                </div>
            </div>
            <div className='bottom-right'>
                <div className='b-right-card'>
                    <div className='card-img'>
                        <img src={img2} alt="img" />
                    </div>
                    <div className='card-txt'>
                        <h3>01 development</h3>
                        <h5>out for delivery it is the lorem a</h5>
                    </div>
                </div>
                <div className='b-right-card'>
                    <div className='card-img'>
                    <img src={img3} alt="img" />
                    </div>
                    <div className='card-txt'>
                    <h3>02 prototype</h3>
                    <h5>out for delivery it is the lorem a</h5>
                    </div>
                </div>
                <div className='b-right-card'>
                    <div className='card-img'>
                    <img src={img4} alt="img" />
                    </div>
                    <div className='card-txt'>
                    <h3>03 launch</h3>
                    <h5>out for delivery it is the lorem a</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Process
