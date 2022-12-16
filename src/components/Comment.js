import React, { useState, useEffect } from "react";
import "./Comment.css";
import bimg1 from "../assests/Path_1348.svg";
import bimg2 from "../assests/Path_1348.svg";
import data from "./Cdata";

const Comment = () => {

    const [Cdata] = useState(data);
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const lastIndex = Cdata.length - 1;
      if (index < 0) {
        setIndex(lastIndex);
      }
      if (index > lastIndex) {
        setIndex(0);
      }
    }, [index, Cdata]);
  
  return (
    <div className='comment-body'>
            <div className='left-arrow'>
                <i class="fa-solid fa-bars-staggered menu" onClick={() => setIndex(index + 1)}></i>
            </div>
            {Cdata.map((item,Cindex)=>{

            let position = "nextSlide";

            if (Cindex === index) 
            {
              position = "activeSlide";
            }
            if (
              Cindex === index - 1 ||
              (index === 0 && Cindex === Cdata.length - 1)
            ) 
            {
              position = "lastSlide";
            }
                return(
            <div className={position}>

                    <span>{item.name}</span>
                    <div className='content-img'>
                        <img src={item.image} alt="img"/>
                    </div>

            </div>
                );
            })} 

            <div className='right-arrow'>
                <i class="fa-solid fa-bars-staggered menu" onClick={() => setIndex(index - 1)}></i>
            </div>

            <div className="img1">
                <img src={bimg1} alt="img"/>
            </div>
            <div className="img2">
                <img src={bimg2} alt="img"/>
            </div>
    </div>
  )
}

export default Comment
