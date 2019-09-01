const Sequelize = require('sequelize');

const sequelize = new Sequelize('terminalscapedb', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

const start = () => {
  console.log('Welcome to TerminalScape!');
  
};

start();