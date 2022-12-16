import React from 'react';
import "./Blog.css";
import Button from "./Button";
import Content from "./Content";
import img1 from "../assests/group3.jpg"
import img2 from "../assests/group1.jpg"

const Blog = () => {
  return (
    <div className='blog'>
      <div className='blog-top'>
            <div className='b-right'>
                    <div className='left-heading'>
                        <Content
                            heading1="OUR"
                            heading2="BLOG"
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
            </div>
            <div className='b-left'>
                <img src={img1} alt="img"/>
                <div className='back b1'>
                   <span> February 5 . Bussiness</span>
                   <h2>develop your idea with us </h2>
                </div>
            </div>
      </div>
      <div className='blog-bottom'>
        <div className='bb-left'>
        <img src={img1} alt="img"/>
        <div className='back b1'>
            <span> February 5 . Bussiness</span>
            <h2>develop your idea with us </h2>
        </div>
        </div>
        <div className='bb-right'>
        <img src={img2} alt="img"/>
        <div className='back b1'>
            <span> February 5 . Bussiness</span>
            <h2>develop your idea with us </h2>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
