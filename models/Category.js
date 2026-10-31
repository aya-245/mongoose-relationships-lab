const mongoose = require('mongoose')

//schema
const categorySchema = new mongoose.Schema({
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

},{timestamps: true})

// model
const Category = mongoose.model('Category', categorySchema)

// exports
module.exports = Category