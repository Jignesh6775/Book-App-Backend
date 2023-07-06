const express = require("express")
const bookRouter = express.Router()
const { BookModel } = require("../Model/book.model")

//For Getting all books data
bookRouter.get("/", async(req, res)=>{
    try {
        const data = await BookModel.find()
        res.status(200).send(data)
    } catch (err) {
        res.status(400).send({ "msg": err.message })
    }
})

//Route for getting only Fiction books
bookRouter.get("/Fiction", async(req, res)=>{
    try {
        const data = await BookModel.aggregate([{ $match: { Genre: "Fiction" } }])
        res.status(200).send(data)
    } catch (err) {
        res.status(400).send({ "msg": err.message })
    }
})

//Route for getting only Science books
bookRouter.get("/Science", async(req, res)=>{
    try {
        const data = await BookModel.aggregate([{ $match: { Genre: "Science" } }])
        res.status(200).send(data)
    } catch (err) {
        res.status(400).send({ "msg": err.message })
    }
})

//Route for getting only Comic books
bookRouter.get("/Comic", async(req, res)=>{
    try {
        const data = await BookModel.aggregate([{ $match: { Genre: "Comic" } }])
        res.status(200).send(data)
    } catch (err) {
        res.status(400).send({ "msg": err.message })
    }
})

//Adding Book to the database
bookRouter.post("/add", async(req, res)=>{
    try {
        const data = new BookModel(req.body)
        await data.save()
        res.status(200).send({ "msg": "A New Book Has Been Added" })
    } catch (err) {
        res.status(400).send({ "msg": err.message })
    }
})

//Deleting Book from database
bookRouter.delete("/delete/:id", async(req, res) =>{
    try {
        await BookModel.findByIdAndDelete({ _id: req.params.id })
        res.status(200).send({ "msg": "A New Book Has Been Deleted" })
    } catch (err) {
        res.status(400).send({ "msg": err.message })
    }
})

module.exports = { bookRouter }