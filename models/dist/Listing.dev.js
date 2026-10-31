"use strict";

var mongoose = require('mongoose'); //schema


var listingSchema = new mongoose.Schema({
  streetAddress: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  size: {
    type: Number,
    required: true
  },
  owner: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
}); // model

var Listing = mongoose.model('Listing', listingSchema); // exports

module.exports = Listing;