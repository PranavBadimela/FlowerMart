import React from "react";
import "./styles.scss";
import logo from "../assets/favicon.png";
const NavBar = () => {
  return (
    <div className="nav-container">
      <img src={logo} className="nav-container__logo" />
    </div>
  );
};

export default NavBar;
