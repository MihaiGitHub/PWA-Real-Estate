const User = require("../models/user");
const Message = require("../models/message");

// middleware for adding agent to request
exports.agentById = async (req, res, next, id) => {
  try {
    const agent = await User.findOne({ where: { id } });

    if (agent === null) {
      res.status(400).send("Agent not found!");
    } else {
      req.agent = agent;
    }
  } catch (e) {
    res.status(400).send(e);
  }

  next();
};

// return agent to frontend
exports.read = (req, res) => {
  res.status(200).json(req.agent);
};

// return agents to frontend
exports.list = async (req, res) => {
  try {
    const agents = await User.findAll({ where: { type: "agent" } });

    res.status(200).json(agents);
  } catch (e) {
    res.status(400).send(e);
  }
};

// save agent message
exports.saveMessage = async (req, res) => {
  const { uid, message } = req.body;

  if (!message) {
    return res.status(400).json({
      error: "A message is required!",
    });
  }

  try {
    const msg = await Message.create({
      uid,
      subject: "Message from mobile app",
      message,
      type: "Incoming",
    });

    res.status(200).json(msg);
  } catch (e) {
    res.status(400).send(e);
  }
};
