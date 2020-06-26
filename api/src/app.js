const express = require('express');
const propertiesRouter = require('./routers/properties');
const agentsRouter = require('./routers/agents');
const app = express();

// Automatically parse data as a JSON object in all request handlers
app.use(express.json());

app.use(propertiesRouter);
app.use(agentsRouter);

module.exports = app;