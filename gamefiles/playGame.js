const colors = require('colors');
const inquirer = require('inquirer');
const mongoose = require('mongoose');

const User = require('./models/User');

let user;

const playGame = (loggedInUser) => {
  user = loggedInUser;
  console.log('Logged in!');
  console.log('Loading game...'.white.bold);
  setTimeout(() => mainScreen(), 3000);
};

const mainScreen = () => {
  mainDisplay();
  mainDisplayPrompt();
}

const mainDisplay = () => {
  console.clear();
  console.log('');
  console.log('TerminalScape'.rainbow.bold);
  console.log(''); 
  console.log(user.username.yellow);
  console.log('========================');
  console.log('Player Stats:'.white.bold);
  console.log('------------------------');
  console.log(`Combat Level: ${user.cbtlevel}`);
  console.log('')
  console.log(`Strength Level: ${user.strlevel}`);
  console.log(`Defence Level: ${user.deflevel}`);
  console.log(`Range Level: ${user.rnglevel}`);
  console.log(`Magic Level: ${user.mglevel}`);
  console.log('------------------------');
  console.log('');
  console.log('Inventory:'.white.bold);
  console.log('------------------------')
  user.inventory.forEach((item) => {
    console.log(`${item.name}: ${item.quantity}`);
  });
  if(user.inventory.length === 0) {
    console.log('Inventory empty!')
  };
  console.log('------------------------');
  console.log('');
  console.log('========================');
  console.log('');
  return;
};

const mainDisplayPrompt = () => {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'mainprompt',
        message: 'What would you like to do?',
        choices: ['Train', 'Skilling','Shop', 'Bosses', 'PK']
      }
    ])
      .then((answer) => {
        switch (answer.mainprompt) {
          case 'Train':
            console.log('Train');
            break;
          case 'Skilling':
            console.log('Skilling');
            break;
          case 'Shop': 
            console.log('Shop');
            break;
          case 'Bosses':
            console.log('Bosses');
            break;
          case 'PK': 
            console.log('PK')
            break;
        }
      });
};


module.exports = playGame;