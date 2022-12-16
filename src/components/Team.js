import React from 'react';
import "./Team.css";
import Content from './Content';
import team1 from "../assests/team1.jpg";
import team2 from "../assests/team2.jpg";
import team3 from "../assests/team3.jpg";

const Team = () => {
  return (
    <div className='team'>
      <div className='team-head'>
      <div className='left-heading'>
      <Content
                    heading1="OUR"
                    heading2="TEAM"
                    subheading="Committed To Team Excellence"
                  />
        </div>
      </div>
      <div className='team-card'>
            <div className='team-img'>
                <img src={team1} alt="img"/>
                <div className='team-details'>
                    <h3>nina cooper</h3>
                    <h5>web designer</h5>
                    <div className='team-social'>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                    <i class="fa-brands fa-facebook-f"></i>
                    </div>
                </div>
            </div>
            <div className='team-img'>
                <img src={team2} alt="img"/>
                <div className='team-details'>
                    <h3>nina cooper</h3>
                    <h5>web designer</h5>
                    <div className='team-social'>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                    <i class="fa-brands fa-facebook-f"></i>
                    </div>
                </div>
            </div>
            <div className='team-img'>
            <img src={team3} alt="img"/>
            <div className='team-details'>
                    <h3>nina cooper</h3>
                <h5>web designer</h5>
                <div className='team-social'>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                    <i class="fa-brands fa-facebook-f"></i>
                    </div>
                </div>
            </div>
      </div>
      <div className='team-view'>
        <span>
            view all team
        </span>
      </div>
    </div>
  )
}

export default Team
