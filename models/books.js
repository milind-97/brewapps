const mongoose = require('mongoose')
const validator = require('validator')
const bookSchema = mongoose.Schema({
    title :{
        type: String,
        required: [true, 'Please Enter title']
    },
    author: {
        type: String,
        required: [true,'author Is Required']
    },
    summary: {
        type: String,
        required: [true,'summary Is Required']
    },
    createdAt: {
        type: Date,
        default: Date.now(),

    },
})

module.exports = mongoose.model("books",bookSchema)