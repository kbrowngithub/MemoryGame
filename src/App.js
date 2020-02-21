import React, { Component } from 'react';
import ClickyCard from './components/ClickyCard';
import Wrapper from './components/Wrapper';
import Title from "./components/Title";
import friends from './friends.json';
// import './App.css';

let score = 0;
let topScore = 0;
let status = "Click a card to begin!";

class App extends Component {
  state = {
    friends,
    Title
  };

  shuffle = (arra1) => {
    let ctr = arra1.length;
    let temp;
    let index;

    // While there are elements in the array
    while (ctr > 0) {
      // Pick a random index
      index = Math.floor(Math.random() * ctr);
      // Decrease ctr by 1
      ctr--;
      // And swap the last element with it
      temp = arra1[ctr];
      arra1[ctr] = arra1[index];
      arra1[index] = temp;
    }
    console.log(`shuffle(): returning ${JSON.stringify(arra1)}`);
    return arra1;
  }

  reset = () => {
    const friends = this.state.friends.map(friend => {
      // console.log(`reset(): friend = ${JSON.stringify(friend)}`);
      friend.selected = false;
      return friend;
    });
    console.log(`reset(): friends = ${JSON.stringify(friends)}`);

    // Shuffle the cards
    let ctr = friends.length;
    let temp;
    let index;

    // While there are elements in the array
    while (ctr > 0) {
      // Pick a random index
      index = Math.floor(Math.random() * ctr);
      // Decrease ctr by 1
      ctr--;
      // And swap the last element with it
      temp = friends[ctr];
      friends[ctr] = friends[index];
      friends[index] = temp;
    }
    console.log(`reset(): calling setState with friends = ${JSON.stringify(friends)}`);
    this.setState({ friends });
  }

  update = () => this.setState({ Title });

  selectCard = id => {
    // Filter this.state.friends for friends with an id equal to the passed in id and evaluate selected status
    this.state.friends.forEach(friend => {
      if (friend.id === id) {
        if (friend.selected) {
          status = "You Lost - Click a card to play again!";
          score = 0;
          this.reset();
        } else {
          friend.selected = true;
          status = "Good Guess!";
          score++;
          (score > topScore) ? topScore = score : console.log("score < topScore");
          this.update();
        }
      }
      return friend;
    });

    // Set this.state.friends equal to the new friends array
    // this.setState({ friends });
  }

  render() {
    return (
      <div>
        <Title score={score} topScore={topScore} status={status}>Clicky Game</Title>
        <Wrapper>
          {this.state.friends.map(friend => (
            <ClickyCard
              selectCard={this.selectCard}
              id={friend.id}
              key={friend.id}
              image={friend.image}
              selected={friend.selected}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;