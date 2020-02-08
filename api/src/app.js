const express = require('express')
const app = express()

// Automatically parse data as a JSON object in all request handlers
app.use(express.json())

module.exports = app