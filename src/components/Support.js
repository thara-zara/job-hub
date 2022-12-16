import React from 'react';
import "./Support.css";
import Content from "./Content";
import Button from "./Button";

const Support = () => {
  return (
    <div className='support'>
      <div className='support-head'>
          <div className='left-heading'>
          <Content
                      heading1="Sup"
                      heading2="port"
                      subheading="live chat 24/7 support"
                      pargraph="Our Mission Is To Provide Quality English
                      Language"
                    />
          </div>
      </div>
      <div className='support-card'>
            <div className='s-card'>
                <div className='s-color'>
                <h3>Design</h3>
                <h5>All design</h5>
                <h3><sup>$</sup>17/month</h3>
                </div>
                <h6>creative design enable</h6>
                <h6>creative design enable</h6>
                <h6>creative design enable</h6>
                <h6>creative design enable</h6>
                <h6>creative design enable</h6>
                <Button
                  name="Order now"
                />
            </div>
            <div className='s-card'>
            <div className='s-color'>
                <h3>Development</h3>
                <h5>All design</h5>
                <h3><sup>$</sup>17/month</h3>
                </div>
                <h6>creative design enable</h6>
                <h6>creative design enable</h6>
                <h6>creative design enable</h6>
                <h6>creative design enable</h6>
                <h6>creative design enable</h6>
                <Button
                  name="Order now"
                />
            </div>
            <div className='s-card'>
            <div className='s-color'>
                <h3>Analysis</h3>
                <h5>All design</h5>
                <h3><sup>$</sup>17/month</h3>
                </div>
                <h6>creative design enable</h6>
                <h6>creative design enable</h6>
                <h6>creative design enable</h6>
                <h6>creative design enable</h6>
                <h6>creative design enable</h6>
                <Button
                  name="Order now"
                />
            </div>

            <div className='s-back'></div>
      </div>
    </div>
  )
}

export default Support;
