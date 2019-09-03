const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const inquirer = require('inquirer');

const init = require('./server');

const start = async () => {
  await init();
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'startmenu',
        message: 'Choose one: ',
        choices: ['Login', 'Register']
      }
    ])
      .then((answer) => {
        if (answer.startmenu === 'Login') {
          return login();
        } else {
          return register();
        };
    });
};

const login = () => {
  console.log('login')
}

const register = () => {
  console.log('Welcome to TerminalScape!');
  console.log('');
  inquirer
    .prompt([
      {
        name: 'newusername',
        message: 'Username:'      
      },
      {
        name: 'newpassword',
        message: 'Password'
      }
    ])
      .then((answers) => {
        console.log(answers)
      });
}

start();