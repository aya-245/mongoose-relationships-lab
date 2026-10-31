const mongoose = require('mongoose')

//schema
const reviewSchema = new mongoose.Schema({
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

},{timestamps: true})

// model
const Review = mongoose.model('Review', reviewSchema)

// exports
module.exports = Review