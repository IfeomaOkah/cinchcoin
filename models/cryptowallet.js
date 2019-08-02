const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const walletSchema = new Schema (
  {
  bitcoin : Number,
  ethereum : Number,
  litecoin : Number, 
  xrp : Number 
});

const Wallet  = mongoose.model('cinchcoin', walletSchema);
module.exports = Wallet;