const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/packageController");

router.get("/", ctrl.getAllPackages);
router.get("/:id", ctrl.getPackageDetails);

module.exports = router;
