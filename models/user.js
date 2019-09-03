'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    cbtlevel: DataTypes.INTEGER,
    strlevel: DataTypes.INTEGER,
    rnglevel: DataTypes.INTEGER,
    deflevel: DataTypes.INTEGER,
    mglevel: DataTypes.INTEGER,
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Item)
  };
  return User;
};