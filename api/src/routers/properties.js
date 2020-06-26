const express = require('express');
const router = new express.Router();
const Property = require('../models/property');
const PropertyImages = require('../models/property_images');

// Endpoint for fetching properties
router.get('/properties', async (req, res) => {
    try {
        const properties = await Property.findAll({ include: [PropertyImages]});

        res.send(properties);
    } catch (e) {
        res.status(404).send();
    }
})

module.exports = router;