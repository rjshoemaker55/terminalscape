const Sequelize = require('sequelize');

const sequelize = new Sequelize('terminalscapedb', 'root', 'root', {
  logging: false,
  host: 'localhost',
  dialect: 'mysql'
});

const init = async () => {
  console.log('Connecting to TerminalScape...');
  await sequelize
    .authenticate()
    .then(() => {
      console.log('Connected successfully!');
    })
    .catch(err => {
      console.error('Unable to connect: ', err);
    });
  db.sequelize.sync();
};

module.exports = init;