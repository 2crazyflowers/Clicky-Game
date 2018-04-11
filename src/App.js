import React, { Component } from 'react';
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

//define variables
let currentScore = 0;
let highScore = 0;


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    currentScore,
    highScore
  };

//I get warnings from these functions, why?
//React does not recognize the 'increasedCurrentScore' prop on a DOM element
  increaseCurrentScore = () => {
    // We always use the setState method to update a component's state
    //rerenders state which renders virtual dom then looks at difference from actual dom and only renders the difference to the actual dom
    this.setState({ currentScore: this.state.currentscore + 1 });
  };


  updateClicked = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.clicked = true);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends }, { currentScore: this.state.currentscore + 1 });
    console.log(`${id}, clicked`);
    if ("clicked" === false) {
      //then increase score 
      //and change clicked to true 
      //give clicked a new class so you can filter through to reupdate clicked back to false when game is done
      //
    }
    else {
      //end game 
      //reset states of current score to 0
      //if currentScore is higher than highScore then update state to equal currentScore
    }
    
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
      <Title>Clicky Game</Title> ,
      <Navbar>
        currentScore={this.state.currentScore}
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
