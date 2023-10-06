const express = require("express")
require("dotenv").config()

const client = require("./config/database")
const router = require("./routes/queryRoutes")

const app = express()
const { PORT } = process.env

async function connectDB() {
    try {
        await client.connect()
        console.log("connected to database");
        app.listen(PORT, () => {
            console.log(`server is running on ${PORT}`);
        })
    } catch (err) {
        console.log(err);
    }
}

connectDB()


app.use('/api', router)