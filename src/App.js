import React, { Component } from 'react';
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
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
//the console.log of state does not seem to happen at the same time that the html is rerendered

  updateClicked = id => {
    console.log(friends);
    console.log(`the one you clicked on has a value of ${friends[0].clicked} before we change things`)
    
    if (friends[0].clicked === false) {
      //console.log(this.state.score);
      this.setState({ score: this.state.score + 1 });
      const friends = this.state.friends.filter(friend => friend.id === id);
      //let player know it is the first time that they have clicked this character
      console.log(`this is the first time you have clicked ${friends[0].name} good job!`);

      //and change clicked to true 
      friends[0].clicked = true;
      //console.log(`${friends[0].name}'s value has been updated to: ${friends[0].clicked} using friends[0].clicked = "true"`);
      console.log(friends);

      //updating current score
     
      console.log(this.state.score);
      //give clicked a new class so you can filter through to reupdate clicked back to false when game is done
      //the score check must be set to 11 as the counter on console.log doesn't update as fast as the DOM so
      //it is always behind by 1
      if (this.state.score === 11) {
        alert(`You've won! Your memory is perfect, try again`);

        //to reset game go through all friends and update their clicked value to false
        const friends = this.state.friends.map(friend => friend.clicked === false);
        console.log(friends);
        //check to see if current score is higher than their highest score, 
        //if it is update high score to new value
      
        if (score > highScore) {
          this.state.highScore({ highScore: score});
          console.log(`Your new high score is: ${highScore}`);
          //set score back to 0 to restart game
          this.setState({ score: 0 });
        }
      }
    }
    else if (friends[0].clicked === true) {
      //end game 
      //   //reset states of current score to 0
      //   //if currentScore is higher than highScore then update state to equal currentScore
      //   //update clicked of all to false using filter
      alert(`You already clicked ${friends[0].name}'s image before. I know you like this character, but this means you loose. Try again.`);
      //console.log('this click is true, you loose');
      
      this.setState({ score: 0 });
    }       
    console.log(friends); 
    
  };
  //add randomizer after you verify that click change/check for true/false of click is working correctly
  //randomizer for image placement
  //var num = Math.floor(Math.random() * 12);
  //need to loop through all and have a number between 0-11 to place each image randomly
  //cannot have same numbers so create an array to verify that number/placement hasn't already been chosen

  // Map over this.state.friends and render a FriendCard component for each friend object
  //do not close the navbar like so: <Navbar></Navbar> or the score does not render properly, 
  //you must keep the tag open until your scores are done, then you can close with />
  render() {
    return (
      <Wrapper>
        <Navbar
          score={this.state.score}
        /> ,
      
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
