# Memory Game :black_joker:

Play Memory Game [here](https://kbrowngithub.github.io/MemoryGame/)

## Overview
12 playing cards are displayed. Each card is clickable. The object of the game
is to click each card only once. Player gets 1 point for each card clicked. 
If a card is clicked more than once the player loses and the Current Score is
reset to 0 while the highest (top) score achieved is maintained. Both current score 
and top score are displayed at the top of the page. Each time a player makes
a selection the cards are randomly shuffled.

---

## App Demo
### 
![Image](public/images/MemoryGameDemo.gif)

---

This is a React App application and was created using create-react-app.

---

## Technologies Used
- HTML (https://html.spec.whatwg.org/multipage/)
- Bootstrap/Custom CSS (https://getbootstrap.com/)
- Create-React-App (https://github.com/facebook/create-react-app)
- JavaScript (https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- Node.js (https://nodejs.org/en/)
- Deployed on github-pages (https://www.npmjs.com/package/gh-pages)

---

## Process Flow
1. A title and 12 cards are created using components Title and ClickyCard and 
    contained within a Wrapper component. 
    - The value of each card is determined from a json file that contains the
    information for each card. 
    - When the game starts the data in the json file is loaded into each of 
    the ClickyCards. 
    - The "clicked" value of each card is defaulted to false at startup.

2. At run time, each card has a click listener that triggers the React 
    Component.setState method which forces the cards and scores to be updated with
    new information.
    - When a card is clicked it's clicked value is set to true.
    - Part of the re-render is a function that shuffles the order of the cards.

3. Upon completion of a round the score is reset to 0 while TopScore remains
    unchanged.

---

## If you want to clone the app down to your local machine:
1. 
2. In your terminal, ```cd``` into the project folder and run:
- ```npm install``` to download all node.js dependencies

3. Finally, you can run the application using:
- ```npm start``` in the terminal to start the node server
- Navigate to localhost:3000 in your browser.

---

## Author
- Kevin Brown - [kbrowngithub](https://github.com/kbrowngithub)