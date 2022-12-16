import React from 'react';
import "./BrandBar.css";
import path from "../assests/Group-957.png"
import path2 from "../assests/Group-956.png"
import path3 from "../assests/Group-955.png"
import path4 from "../assests/client-5.png"
import path5 from "../assests/client-9.png"

const BrandBar = () => {
  return (
    <div className='brand'>
      <div className='b-details'>
          <div className='c'>
           <img src={path} alt="img"/>
          </div>
          <div className='c'>
          <img src={path2} alt="img"/>
          </div>
          <div className='c'>
          <img src={path3} alt="img"/>
          </div>
          <div className='c'>
          <img src={path4} alt="img"/>
          </div>
          <div className='c'>
          <img src={path5} alt="img"/>
          </div>
      </div>

      <div className='footer'>
        <div className='f-head'>
          <h3>Have An Idea Or Project? Let's Talk</h3>
         <span>Send Me Tips, Trends, Freebies, Updates & Offers.</span> 
        </div>
        <div className='f-middle'>
          <div className='m-left'>
              <div className='text'>
                CONTACT US
              </div>
              <div className='arrow'>
              <i className="fas fa-arrow-right" />
              </div>
          </div>
          <div className='m-right'>
           <span className='input'><input type={Text} placeholder="your email"/><span className="sub">subscribe </span></span> 
          </div>
        </div>
        <div className='f-bottom'>
          <div>+1(888)123 45 67</div>
          <div>Phlox-Theme@Averta.Com</div>
          <div>Patricia C. Amedee 4401 Waldeck Street Grapevine Nashville, Tx 76051</div>
        </div>
        <hr></hr>
        <div className='copyright'>
          @2022 Elementor Theme To React js Develop By Tharindu. All Rights Reserved
        </div>
      </div>
    </div>
  )
}

export default BrandBar;
