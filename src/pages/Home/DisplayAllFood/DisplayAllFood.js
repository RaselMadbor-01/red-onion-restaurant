import React, { useEffect, useState } from "react";
import SpecificeFoodItem from "../SpecificeFoodItem/SpecificeFoodItem";

const DisplayAllFood = (props) => {
  const [foodItems, setFoodItems] = useState([]);
 const selectFoodList=props.selectFoodList;
  useEffect(() => {
    fetch("./foodItemsList.json")
      .then((res) => res.json())
      .then((data) => {
        if(selectFoodList==="Dinner"){
          setFoodItems(data.slice(0,6));
        }
        else if(selectFoodList==="Lanch"){
          setFoodItems(data.slice(6,12));
        }
        else{
          setFoodItems(data.slice(12,18));
        }
      });
  }, [selectFoodList]);
  return (
    <div className="carousel-inner">
    <div className="carousel-item active">
    <div className="container py-5 mt-5">
      <div className="row row-cols-1 row-cols-md-3 g-5">
          {
              foodItems.map(food=><SpecificeFoodItem key={food.id} food={food}></SpecificeFoodItem>)
          }
      </div>
    </div>
    </div>
    </div>
  );
};

export default DisplayAllFood;
