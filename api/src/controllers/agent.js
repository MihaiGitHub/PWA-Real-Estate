const User = require("../models/user");

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

exports.read = (req, res) => {
  res.status(200).json(req.agent);
};

exports.list = async (req, res) => {
  try {
    const agents = await User.findAll({ where: { type: "agent" } });

    res.status(200).json(agents);
  } catch (e) {
    res.status(400).send(e);
  }
};
