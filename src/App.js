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
    
    //must call this const first or else the if/else statements doesn't know which 
    //friend to check the true/false value of. I could click on multiple items without closing game
    //as I accidentally placed it in the first if statement
    const clickedFriend = this.state.friends.filter(friend => friend.id === id);

    console.log(`the one you clicked on has a value of ${clickedFriend[0].clicked} before we change things`);


    if (clickedFriend[0].clicked === false) {
      //console.log(this.state.score);
      this.setState({ score: this.state.score + 1 });
      
      //let player know it is the first time that they have clicked this character
      console.log(`this is the first time you have clicked ${clickedFriend[0].name} good job!`);

      //and change clicked to true 
      clickedFriend[0].clicked = true;
      //console.log(`${clickedFriend[0].name}'s value has been updated to: ${clickedFriend[0].clicked} using clickedFriend[0].clicked = "true"`);
      console.log(friends);

      //updating current score
     
      console.log(this.state.score);
      //give clicked a new class so you can filter through to reupdate clicked back to false when game is done
      //the score check must be set to 11 as the counter on console.log doesn't update as fast as the DOM so
      //it is always behind by 1
      if (this.state.score === 11) {
        alert(`You've won! Your memory is perfect, try again`);

        //to reset game go through all friends and update their clicked value to false
        const friends = this.state.friends.map(friend => friend.clicked = false);
        console.log(friends);
        //check to see if current score is higher than their highest score, 
        //if it is update high score to new value
        
        // for (let i = 0; i < friends.length; i++) {
        //   friends[i].clicked = false;
        //   console.log(`${friends[i].name}, clicked value of: ${friends[i].clicked}`);
        //   console.log([i]);
        // }
        console.log(friends);
        console.log(this.state.score);
        console.log(this.state.highScore);
        
        if (this.state.score > this.state.highScore) {
          this.setState({ highScore: this.state.count });

          console.log(`Your new high score is: ${highScore}`);
          //set score back to 0 to restart game
          this.setState({ score: 0 });
        }
        else {
          this.setState({ score: 0 });
        }
      }
    }
    else if (clickedFriend[0].clicked === true) {
      //end game 
      //reset states of current score to 0
      //if currentScore is higher than highScore then update state to equal currentScore
      //update clicked of all to false using filter
      console.log(this.state.score);
      console.log(this.state.highScore);

      if (this.state.score > this.state.highScore) {
        let highScore = this.state.score;
        this.setState({ highScore: highScore });

        console.log(`Your new high score is: ${highScore}`);
        //set score back to 0 to restart game
        this.setState({ score: 0 });
      }
      else {
        this.setState({ score: 0 });
      }

      const friends = this.state.friends.map(friend => friend.clicked = false);

      alert(`You already clicked ${friends[0].name} image before. I know you like this character, but this means you loose. Try again.`);
      console.log('this click is true, you loose');
      this.setState({ score: 0 });

      // for (let i = 0; i < friends.length; i++) {
      //   friends[i].clicked = false;
      //   console.log(`${friends[i].name}, clicked value of: ${friends[i].clicked}`);
      //   console.log([i]);
      // }
      console.log(friends);
    }       
    console.log(friends); 

  };

  // randomizer = id => {
  // //add randomizer after you verify that click change/check for true/false of click is working correctly
  // //randomizer for image placement
  // var num = Math.floor(Math.random() * 12);
  // //need to loop through all and have a number between 0-11 to place each image randomly
  // //cannot have same numbers so create an array to verify that number/placement hasn't already been chosen

  // // Map over this.state.friends and render a FriendCard component for each friend object
  // //do not close the navbar like so: <Navbar></Navbar> or the score does not render properly, 
  // //you must keep the tag open until your scores are done, then you can close with />
  // }
  //numArray = [0,1,2,3,4,5,6,7,8,9,10,11];
    //var num = Math.floor(Math.random() * 12);
    // var p = friends.length;
    // var preBuffer = new Array()
    // for (i = 0; i < p; i++) {
    //   preBuffer[i] = new Image()
    //   preBuffer[i].src = theImages[i]
    // }

  render() {
    return (
      <Wrapper>
        <Navbar
          score={this.state.score}
          highScore={this.state.highScore}
        />
      
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
