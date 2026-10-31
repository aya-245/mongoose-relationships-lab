"use strict";

var mongoose = require('mongoose'); //schema


var reviewSchema = new mongoose.Schema({
  reviewTitle: {
    type: String,
    required: true
  },
  reviewBody: {
    type: String,
    required: true
  },
  creator: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
}); // model

var Review = mongoose.model('Review', reviewSchema); // exports

module.exports = Review;