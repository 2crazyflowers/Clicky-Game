import React, { Component } from 'react';
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import friends from "./friends.json";
import "./App.css";

//define variables
let score = 0;
let highScore = 0;
let userInfo = "";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score,
    highScore,
    userInfo
  };

//this will increase the score if user clicks on an unclicked character
// increaseScore = () => {
//   // We always use the setState method to update a component's state
//    //rerenders state which renders virtual dom then looks at difference from actual dom and only renders the difference to the actual dom
//   this.setState({ score: this.state.score + 1 });
//   };
//the console.log of state does not seem to happen at the same time that the html is rerendered

  updateClicked = id => {
    
    //must call this const first or else the if/else statements doesn't know which 
    //friend to check the true/false value of. I could click on multiple items without closing game
    //as I accidentally placed it in the first if statement
    const clickedFriend = this.state.friends.filter(friend => friend.id === id);

    console.log(`the one you clicked on has a value of ${clickedFriend[0].clicked} before we change things`);

    //randomizer for image placement to increase difficulty of game
    const randomizer = arr => arr.sort(() => Math.random() - 0.5);


    //clicked character the first time, so value of click is false
    if (clickedFriend[0].clicked === false) {
      //console.log(this.state.score);
      //updating current score
      this.setState({ score: this.state.score + 1 });
      
      //let player know it is the first time that they have clicked this character
      console.log(`this is the first time you have clicked ${clickedFriend[0].name} good job!`);
      this.setState({ userInfo: `Good choice! This is the first time you have clicked on ${clickedFriend[0].name}.` });


      //and change clicked to true 
      clickedFriend[0].clicked = true;


      //console.log(`${clickedFriend[0].name}'s value has been updated to: ${clickedFriend[0].clicked} using clickedFriend[0].clicked = "true"`);

      //the score check must be set to 11 as the counter on console.log doesn't update as 
      //fast as the DOM so it is always behind by 1
      // console.log(friends);
      console.log(this.state.score);
      
      //if user won the game
      if (this.state.score === 11) {
        //alert(`You've won! Your memory is perfect, try again`);

        //to reset game go through all friends and update their clicked value to false
        const friends = this.state.friends.map(friend => friend.clicked = false);
        console.log(friends);

        //update message to user to let them know they won
        this.setState({ userInfo: "You bested our game, great job!" });
        
        
        console.log(friends);
        console.log(this.state.score);
        console.log(this.state.highScore);
        

        //check to see if current score is higher than their highest score, 
        //if it is update high score to new value
        if (this.state.score > this.state.highScore) {

          let highScore = this.state.score + 1;
          this.setState({ highScore: highScore });

          console.log(`Your new high score is: ${highScore}`);
          this.setState({ userInfo: `Fantastic job! Your new high score is: ${highScore}` });
          //set score back to 0 to restart game
          this.setState({ score: 0 });
        }
        else {
          this.setState({ score: 0 });
        }
      }
    }

    //if user has already clicked on the character already or the clicked value is true
    else if (clickedFriend[0].clicked === true) {
      this.setState({ userInfo: `Bad choice! You loose. You clicked on ${clickedFriend[0].name} already!` });
      
      //end game 
      //reset states of current score to 0
      //if currentScore is higher than highScore then update state to equal currentScore
      //update clicked of all to false using filter
      console.log(this.state.score);
      
      if (this.state.score > this.state.highScore) {
        //update message of new high score and set score to highscore
        
        let highScore = this.state.score;
        this.setState({ highScore: highScore });
        //this.setState({ userInfo: `Fantastic job! Your new high score is: ${highScore}` });
        console.log(`Your new high score is: ${highScore}`);

        //set score back to 0 to restart game
        this.setState({ score: 0 });
        //reset userinfo 
        // this.setState({ userInfo: `` });

      }
      else {
        this.setState({ score: 0 });
      }

      // eslint-disable-next-line
      const friends = this.state.friends.map(friend => friend.clicked = false);

      //alert(`You already clicked ${friends[0].name} image before. I know you like this character, but this means you loose. Try again.`);
      console.log('this click is true, you loose');
      this.setState({ score: 0 });
      console.log(friends);

    }       
    console.log(friends);
    randomizer(this.state.friends);
  };


  render() {
    return (
      <Wrapper>
        <Navbar
          score={this.state.score}
          highScore={this.state.highScore}
          userInfo={this.state.userInfo}
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
