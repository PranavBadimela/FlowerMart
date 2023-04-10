import React from "react";
import "./styles.scss";
import NavBar from "../NavBar";
import Slick from "../Slick";

const Home = () => {
  return (
    <div className="home-container">
      <div className="top-container">
        <NavBar />
      </div>
      <Slick />
    </div>
  );
};

export default Home;
