import React from "react";
import { Link } from "react-router-dom";
import "./SpecificeFoodItem.css";

const SpecificeFoodItem = (props) => {
  const { name, image, about, price,id } = props.food;

  return (
    <div>
      <div className="col">
        <Link to={`/details/${id}`}>
        <div className="card h-100 py-3 border" >
          <img src={image} className="w-50 mx-auto" alt="..." />
          <div className="card-body text-center">
            <h5 className="card-title" style={{fontSize:"18px"}}>{name}</h5>
            <p className="card-text text-secondary">
              {about}
            </p>
            <p className="card-text fw-bolder">
              ${price}
            </p>
          </div>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default SpecificeFoodItem;
