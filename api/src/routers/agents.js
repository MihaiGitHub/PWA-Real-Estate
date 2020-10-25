const express = require("express");
const router = new express.Router();
const { agentById, read, list, saveMessage } = require("../controllers/agent");

// middleware
// anytime there is a userId param in the route execute agentById method
router.param("agentId", agentById);

// routes
router.post("/agent/:agentId/message", saveMessage);
router.get("/agent/:agentId", read);
router.get("/agents", list);

module.exports = router;
