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
![Image](public/images/flowchart.png)

---

## If you want to clone the app down to your local machine:
1. Visit [here](https://rapidapi.com/apidojo/api/tripadvisor1?endpoint=apiendpoint_c0d6decf-e541-447d-bc87-2fa023cd96d6) to set up your own TripAdvisor API key.
- Create and set up your own ```.env``` file as follows:
```
#api keys
TRIP_KEY=<your api key here>
```
- Add your ```.env``` file to your ```.gitignore``` file
2. Use MySQL Workbench to create a database called ```restaurant_db```
- The raw SQL query is ```CREATE DATABASE restaurant_db;```
3. Inside the config folder, open up the ```config.json``` file
- In the development object, add your MySQL localhost ```password```
4. In your terminal, ```cd``` into the project folder and run:
- ```npm install``` to download all node.js dependencies
- ```npm install sequelize``` to install Sequelize
5. Finally, you can run the application using:
- ```node server.js``` in the terminal to start the node server
- Navigate to localhost:3000 in your browser.

---

## Author
- Kevin Brown - [kbrowngithub](https://github.com/kbrowngithub)