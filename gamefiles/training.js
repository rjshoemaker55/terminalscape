const inquirer = require('inquirer');

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
          topDisplay();
          trainingArea('rat');
          break;
        case 'Goblins':
          topDisplay();
          trainingArea('goblin');
          break;
        case 'Witches':
          topDisplay();
          trainingArea('witch');
          break;
        case 'Exit':
          mainScreen();
          break;
      }
    });
  return;
};

const trainingArea = monster => {
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
      if (!answer.trainingareamenu.includes('Attack')) {
        topDisplay();
        train();
      }
    });
};

module.exports = train;
