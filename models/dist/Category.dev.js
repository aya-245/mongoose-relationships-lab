"use strict";

var mongoose = require('mongoose'); //schema


var categorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Listig',
    unique: true,
    required: true
  }
}, {
  timestamps: true
}); // model

var Category = mongoose.model('Category', categorySchema); // exports

module.exports = Category;