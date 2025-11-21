const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/placeController");

router.post("/add", ctrl.addPlace);

module.exports = router;
