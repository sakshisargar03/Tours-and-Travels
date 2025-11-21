const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/bookingController");

router.post("/book", ctrl.createBooking);

module.exports = router;
