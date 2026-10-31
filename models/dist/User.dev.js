"use strict";

var mongoose = require('mongoose'); //schema


var userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: Number,
    required: true,
    min: 8
  }
}, {
  timestamps: true
}); // model

var User = mongoose.model('User', userSchema); // exports

module.exports = User;