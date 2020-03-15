const inquirer = require('inquirer');

const fight = (monsterName, monsterHp, monsterCbt, monsterAtk, monsterDef, user) => {
    console.log(JSON.stringify(user, null, 2))
    console.log(`You attack the ${monsterName}!`);
    
}

module.exports = fight;