import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ShowOtherFood from "../ShowOtherFood/ShowOtherFood";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faMinus } from '@fortawesome/free-solid-svg-icons';
import "./Details.css";

const Details = () => {
  const [count, setCount] = useState(1);
  const[allValues,setAllValues]=useState([]);
  useEffect(()=>{
      fetch("/foodItemsList.json")
      .then(res=>res.json())
      .then(data=>setAllValues(data))
  },[count]);
  
  
  //const [allValues] = useLoadData();
  console.log(allValues);
  const { foodId } = useParams();

  let selectedFood = allValues.find((food) => food?.id == foodId);
//   console.log(selectedFood[0]?.price);
const price=selectedFood?.price;
  let price1=selectedFood?.price;
  
  const[value,setValue]=useState(price);
//   setValue(selectedFood[0]?.price);
//   console.log(value);

  const otherFoods = allValues.filter((food) => food?.id != foodId);
  const plusIcon = <FontAwesomeIcon icon={faPlus} />
  const minusIcon = <FontAwesomeIcon icon={faMinus} />

const handlePlusCount=()=>{
setCount(count+1);
price1=price1*count;
setValue(price*count);

};
const handleMinusCount=()=>{
    if(count>0){
        setCount(count-1);
    }
}
console.log(price1,value);


  return (
    <div className="container pt-5 mt-5">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-6 ps-5">
          <h1 className="pb-3">Light {selectedFood?.foodName}fast</h1>
          <p className="me-5 ">{selectedFood?.details}</p>
          <div className="d-flex align-items-center">
            <h2 className="me-5">${price1}</h2>
            <div className="d-flex border border-1 rounded-pill count-section">
              <span className="minus-count" onClick={handleMinusCount}>{minusIcon}</span>
              <p className="count fs-3 fw-bolder">{count}</p>
              <span className="plus-count" onClick={handlePlusCount}>{plusIcon}</span>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <img src={selectedFood?.image} className="img-fluid" alt="" />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <ShowOtherFood foods={otherFoods} />
        </div>
      </div>
    </div>
  );
};

export default Details;
