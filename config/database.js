const mongodb = require("mongodb")

const url = process.env.DB_URL

const client = new mongodb.MongoClient(url)

module.exports = client