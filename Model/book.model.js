const mongoose = require("mongoose")

const bookSchema = mongoose.Schema({
    Title: { type: String },
    Author: { type: String },
    Genre: 
    {
        type: String,
        enum: ["Fiction", "Science", "Comic"]
    },
    Description: {type: String},
    Price: {type: Number}
})

const BookModel = mongoose.model("book", bookSchema)

module.exports = { BookModel }