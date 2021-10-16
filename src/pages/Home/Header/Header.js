import React from "react";
import logoImage from "../../../images/logo2.png";
import shoppingCartIcon from "../../../images/shopping_cart_icon.png";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logoImage} width="150" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item pe-4">
                <a className="nav-link" href="#">
                  <img src={shoppingCartIcon} width="25" alt="" />
                </a>
              </li>
              <li className="nav-item pe-4">
                <a className="nav-link active" aria-current="page" href="#">
                  Log In
                </a>
              </li>
              <li className="nav-item pe-4">
                <a className="nav-link" href="#">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
