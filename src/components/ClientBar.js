import React from 'react';
import "./ClientBar.css";

const ClientBar = () => {
  return (
    <div className='client'>
      <div className='c-details'>
          <div className='c'>
            <h1>99<sup>%</sup></h1>
            <h3>happy clients</h3>
            <h2>our mission to provide quality</h2>
          </div>
          <div className='c'>
            <h1>17<sup>K</sup></h1>
            <h3>happy clients</h3>
            <h2>our mission to provide quality</h2>
          </div>
          <div className='c'>
            <h1>11<sup>Y</sup></h1>
            <h3>happy clients</h3>
            <h2>our mission to provide quality</h2>
          </div>
      </div>
    </div>
  )
}

export default ClientBar;
