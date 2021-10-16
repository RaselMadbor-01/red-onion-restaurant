import React, { useState } from "react";
import DisplayAllFood from "../DisplayAllFood/DisplayAllFood";
import "./AllFoodItems.css";

const AllFoodItems = () => {
  const [selectFoodList, setSelectFoodList] = useState("Breakfast");
  const handleShowSelectedFood = (event) => {
    setSelectFoodList(event.target.innerText);
  };


  return (
    <div className="food-section">
      <div
        id="arouselExampleControlsNoTouching"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-touch="false"
        data-bs-interval="false"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#arouselExampleControlsNoTouching"
            data-bs-slide-to="0"
            className="carousel-button active"
            aria-current="true"
            aria-label="Slide 1"
          >
            <h6
              className="carousel-caption-text"
              onClick={handleShowSelectedFood}
            >
              Breakfast
            </h6>
          </button>
          <button
            type="button"
            data-bs-target="#arouselExampleControlsNoTouching"
            data-bs-slide-to="1"
            className="carousel-button"
            aria-label="Slide 2"
          >
            <h6
              className="carousel-caption-text"
              onClick={handleShowSelectedFood}
            >
              Lanch
            </h6>
          </button>
          <button
            type="button"
            data-bs-target="#arouselExampleControlsNoTouching"
            data-bs-slide-to="2"
            className="carousel-button"
            aria-label="Slide 3"
          >
            <h6
              className="carousel-caption-text"
              onClick={handleShowSelectedFood}
            >
              Dinner
            </h6>
          </button>
        </div>

        <DisplayAllFood selectFoodList={selectFoodList} />
      </div>
    </div>
  );
};

export default AllFoodItems;
