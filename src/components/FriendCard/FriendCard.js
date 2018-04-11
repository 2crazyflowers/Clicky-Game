import React from "react";
import "./FriendCard.css";

//only need image of characters 
//track by image id
//if clicked then end game

  const FriendCard = props => (
    <div className="img-container">
        <img alt={props.name} src={props.image} className="img-thumbnail" onClick={() => props.updateClicked(props.id)} />
    </div>
);

export default FriendCard;
