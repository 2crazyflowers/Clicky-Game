import React from "react";
import "./Navbar.css";

//will put clickygame title in navbar as well as counter for points not hitting the same char 2xs
const Navbar = props => <div className="navbar">{props.children}</div>;

export default Navbar;