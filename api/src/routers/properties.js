const express = require("express");
const router = new express.Router();
const { list, search } = require("../controllers/properties");

router.get("/properties", list);
router.get("/search/properties", search);

module.exports = router;
