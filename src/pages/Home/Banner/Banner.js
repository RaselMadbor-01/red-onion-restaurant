import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className= "d-flex justify-content-center align-items-center banner-section">
    <div>
    <h1 className="mb-4">Best food wait for your belly</h1>
      <form className="d-flex">
        <input
          className="form-control border rounded-pill w-75 m-auto"
          type="search"
          placeholder="Search food items"
          aria-label="Search"
        />
        <input className="border rounded-pill px-3" id="submit" type="submit" value="Submit" />
      </form>
    </div>
  
    </div>
  );
};

export default Banner;
