import React from "react";
import "./Header.css";
import logo from "../../images/Ellipse 1.png";

const Header = () => {
  return (
    <div className="container">
      <div className=" container d-flex justify-content-between mt-4">
        <div>
          <h1>The Inspired Journey</h1>
        </div>
        <div>
          <img src={logo} alt="" />
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default Header;
