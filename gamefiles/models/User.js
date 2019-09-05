const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
  },
  cbtlevel: {
    type: Number,
    default: 1
  },
  strlevel: {
    type: Number,
    default: 1
  },
  deflevel: {
    type: Number,
    default: 1
  },
  rnglevel: {
    type: Number,
    default: 1
  },
  mglevel: {
    type: Number,
    default: 1
  },
  inventory: [{
    itemName: String,
    quantity: Number
  }]
});

module.exports = User = mongoose.model('user', UserSchema);