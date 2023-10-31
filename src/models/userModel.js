// User Model
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  //Write a schema for name and email here
  // name:type string and required true
  //email: type String and required true, also write a custom validator
  // function using this regex /^\S+@\S+\.\S+$/
});

module.exports = mongoose.model('Validation', userSchema);
