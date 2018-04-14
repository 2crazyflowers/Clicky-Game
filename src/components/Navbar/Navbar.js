import React from "react";
import "./Navbar.css";

//will put clickygame title in navbar as well as counter for points not hitting the same char 2xs
const Navbar = props => (

  <div className="Navbar">
    <header className="Nav-header">
      <h1 className="Nav-title">Welcome to ClickyGame</h1>
      <h6>To play the game only click on the character once.</h6>
      <h5 className="Nav-score"><strong>Current Score: {props.score}</strong></h5>
      <h6>Your High Score: {props.highScore}</h6>
      <h5 className="Nav-info">{props.userInfo}</h5>
    </header>
  </div>
);

export default Navbar;