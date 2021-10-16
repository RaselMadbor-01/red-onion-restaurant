import React from "react";
import { Slide } from "react-slideshow-image";
import "./ShowOtherFood.css";



const ShowOtherFood = ({foods}) => {
    const style = {
        textAlign: 'center',
        fontSize: '16px'
      };
    
      const properties = {
        duration: 5000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        indicators: false,
      };
 
  
  return (
    <div className="row pb-5">
        <div>
        <Slide {...properties}>
        {
            foods.map(food=>  <div key={food.id} style={style}>
               <img src={food.image} className="img-fluid" width="150" alt="" />
            </div>)
        }
          
        </Slide>
      </div>
      
      
    </div>
  );
};

export default ShowOtherFood;
