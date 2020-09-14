const express = require("express");
const router = new express.Router();
const { agentById, read, list } = require("../controllers/agent");

// middleware
// anytime there is a userId param in the route execute agentById method
router.param("agentId", agentById);

// routes
router.get("/agent/:agentId", read);
router.get("/agents", list);

module.exports = router;
