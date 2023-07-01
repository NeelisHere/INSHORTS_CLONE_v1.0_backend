const mongoose = require('mongoose')

const NewsSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
        unique: true
    },
    timestamp: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    publisher: {
        type: String,
        required: true,
    }
})

const NewsModel = mongoose.model('news', NewsSchema)

module.exports = NewsModel