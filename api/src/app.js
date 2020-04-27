const express = require('express')
const propertiesRouter = require('./routers/properties')
const app = express()

// Automatically parse data as a JSON object in all request handlers
app.use(express.json())

app.use(propertiesRouter)

module.exports = app