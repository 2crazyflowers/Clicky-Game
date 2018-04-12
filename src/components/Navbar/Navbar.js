import React from "react";
import "./Navbar.css";

//will put clickygame title in navbar as well as counter for points not hitting the same char 2xs
const Navbar = props => (

  <div className="Navbar">
    <header className="Nav-header">
      <h1 className="Nav-title">Welcome to ClickyGame</h1>
      <h4>See if you can win and figure out how the game works!</h4>
      <h5><em>Current Score: {props.score}</em></h5>
      <h6>Your High Score: {props.highScore}</h6>
      
    </header>
  </div>
);

export default Navbar;