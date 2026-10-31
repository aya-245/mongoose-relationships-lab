const mongoose = require('mongoose')

//schema
const listingSchema = new mongoose.Schema({
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

},{timestamps: true})

// model
const Listing = mongoose.model('Listing', listingSchema)

// exports
module.exports = Listing