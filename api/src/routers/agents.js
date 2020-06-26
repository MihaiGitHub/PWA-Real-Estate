const express = require('express');
const router = new express.Router();
const User = require('../models/user');

router.get('/agents', async (req, res) => {
    try {
        const users = await User.findAll({ where: { type: 'agent' }});

        res.send(users);
    } catch (e) {
        res.status(404).send();
    }
})

module.exports = router;