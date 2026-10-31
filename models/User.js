const mongoose = require('mongoose')

//schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: Number,
        required: true,
        min: 8,
    }

},{timestamps: true})

// model
const User = mongoose.model('User', userSchema)

// exports
module.exports = User