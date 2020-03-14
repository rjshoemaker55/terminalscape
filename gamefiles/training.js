const inquirer = require('inquirer');
const topDisplay = require('./displays/topDisplay.mjs');
const monstersDB = require('./data/monsters.json');
const fight = require('./fight');

const train = user => {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'trainmenu',
        message: 'What would you like to train on?',
        choices: ['Rats', 'Goblins', 'Witches', 'Exit']
      }
    ])
    .then(answer => {
      switch (answer.trainmenu) {
        case 'Rats':
          topDisplay(user);
          trainingArea('rat', user);
          break;
        case 'Goblins':
          topDisplay(user);
          trainingArea('goblin', user);
          break;
        case 'Witches':
          topDisplay(user);
          trainingArea('witch', user);
          break;
        case 'Exit':
          mainScreen();
          break;
      }
    });
  return;
};

const trainingArea = (monster, user) => {
  const currentMonster = monstersDB[monster];
  const {
    name: monsterName,
    hitpoints: monsterHp,
    cbtlevel: monsterCbt,
    atklevel: monsterAtk,
    deflevel: monsterDef,
    xp: monsterXp
  } = currentMonster;

  console.log('');
  console.log(`Welcome to the ${monsterName} training area!`.yellow.bold);
  console.log('');

  inquirer
    .prompt([
      {
        type: 'list',
        name: 'trainingareamenu',
        message: 'What would you like to do?',
        choices: [`Attack ${monsterName}, Level: ${monsterCbt}`, 'Exit']
      }
    ])
    .then(answer => {
      if (!answer.trainingareamenu != 'Exit') {
        console.log('fff')
        topDisplay(user);
        fight(monsterName, monsterHp, monsterCbt, monsterAtk, monsterDef, user);
      }
    });
};

module.exports = train;
