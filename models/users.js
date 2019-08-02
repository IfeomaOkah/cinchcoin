//  User Schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: String, 
  password: String,
  bitcoin : Number,
  ethereum : Number,
  litecoin : Number, 
  xrp : Number 
 
});

const User = mongoose.model('users', UserSchema);
module.exports = User;