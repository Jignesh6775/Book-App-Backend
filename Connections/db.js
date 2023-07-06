//mongodb+srv://jignesh:<password>@cluster0.ui8bqmo.mongodb.net/?retryWrites=true&w=majority
const mongoose = require("mongoose")
require("dotenv").config()

const connection = mongoose.connect(process.env.MONGO_URI)

module.exports = { connection }