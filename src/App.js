import React, { Component } from 'react';
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
// import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

//define variables
let score = 0;
let highScore = 0;


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score,
    highScore
  };

//I get warnings from these functions, why?
//React does not recognize the 'increasedCurrentScore' prop on a DOM element
  // increaseCurrentScore = () => {
  //   // We always use the setState method to update a component's state
  //   //rerenders state which renders virtual dom then looks at difference from actual dom and only renders the difference to the actual dom
  //   this.setState({ currentScore: this.state.currentscore + 1 });
  // };


  updateClicked = (id, clicked) => {

    // console.log(`this is friends[0]: ${friends[id]}`);
    // console.log(`this is friends[0].name: ${friends[0].name}`);
    // console.log(`i know this before calling const: clicked value: ${friends[0].clicked}`);
    // console.log(`this image with id ${id}, was clicked - i know the id before calling const`);
    //have to figure out how to assess clicked
    if (friends[0].clicked === false) {
      //then increase score 
      //and change clicked to true 
      //give clicked a new class so you can filter through to reupdate clicked back to false when game is done
      
      this.setState({ score: this.state.score + 1 });
      console.log(this.state.score);
      const friends = this.state.friends.filter(friend => friend.id === id);
      // console.log(`this is friends[0]: ${friends[id]}`);
      // console.log(`this is friends[0].name: ${friends[0].name}`);
      // console.log(`${friends[0].clicked}`);
      // console.log(`this image with id ${id}, was clicked - i know the id after calling const`);
      alert(`this is the first time you have clicked ${friends[0].name} good job!`);
      // Set this.state.friends equal to the new friends array
      //this did not work:
      // this.setState({ friends : true }); 
      // console.log(`${friends[0].name}'s value has been updated to: ${friends[0].clicked}`);

      friends[0].clicked = "true";
      console.log(`${friends[0].name}'s value has been updated to: ${friends[0].clicked} using friends[0].clicked = "true"`);
      console.log(friends);

      //updating current score
      // console.log(`current score before changing state is: ${score}`);
      // console.log(`current score is: ${score}`);
      //this console.log shows the true score
      console.log(this.state.score);


    }
    if ((friends[0].clicked === true)) {//end game 
    //   //reset states of current score to 0
    //   //if currentScore is higher than highScore then update state to equal currentScore
    //   //update clicked of all to false using filter
      console.log('this click is true, you loose');
      console.log(friends);
    }    
  };

  //randomizer for image placement
  //var num = Math.floor(Math.random() * 12);
  //need to loop through all and have a number between 0-11 to place each image randomly
  //cannot have same numbers so create an array to verify that number/placement hasn't already been chosen

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
      <Navbar>
        score={this.state.score}
      </Navbar> ,
      
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            updateClicked={this.updateClicked}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
