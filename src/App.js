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
    friends
  };

  // Fisher-Yates Shuffle
  shuffle = (friends) => {
    for (let i = friends.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = friends[i];
      friends[i] = friends[j];
      friends[j] = temp;
    }
    this.setState({ friends });
  }

  // Game reset - set all cards to unselected and then shuffle them
  reset = () => {
    const friends = this.state.friends.map(friend => {
      friend.selected = false;
      return friend;
    });
    this.shuffle(friends);
  }

  // Just shuffle the cards and keep playing the current game
  update = () => this.shuffle([...this.state.friends]);

  selectCard = id => {
    // Filter this.state.friends for friends with an id equal to the passed in id and evaluate selected status
    this.state.friends.forEach(friend => {
      if (friend.id === id) {
        if (friend.selected) {
          status = "You Lost - Try again!";
          score = 0;
          this.reset();
        } else {
          friend.selected = true;
          status = "Good Guess!";
          score++;
          (score > topScore) ? topScore = score : console.log(`topScore > score`);
          this.update();
        }
      }
      return friend;
    });
  }

  render() {
    return (
      <div>
        <Title score={score} topScore={topScore} status={status}>Memory Game</Title>
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