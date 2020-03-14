const inquirer = require('inquirer');

const fight = (monsterName, monsterHp, monsterCbt, monsterAtk, monsterDef, user) => {
    console.log(JSON.stringify(user))
    console.log(`You attack the ${monsterName}!`);
}

module.exports = fight;