const express = require("express")
const { connection } = require("./Connections/db")
const { bookRouter } = require("./Routes/book.routes")
require("dotenv").config()
const port = process.env.PORT || 8080
const app = express()

app.use(express.json())

app.use("/", (req, res)=>{
    res.status(200).send({ "msg": "Please Check /books route" })
})

app.use("/books", bookRouter)



app.listen(port, async()=>{
    try {
        await connection
        console.log("Server is connected to MongoDB")
    } catch (error) {
        console.log("Not Connected To Server")
        console.log(error)
    }
    console.log(`Server is running on port ${port}`)
})