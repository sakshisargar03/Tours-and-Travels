const Cab = require("../models/cab.model");

exports.searchCabs = async (req, res) => {
  try {
    const cabs = await Cab.find(req.query);
    res.json({ success: true, cabs });
  } catch (err) {
    res.json({ message: err.message });
  }
};
exports.addCab = async (req, res) => {
  try {
    const cab = await Cab.create(req.body);
    res.status(201).json({ cab });
  } catch (err) {
    res.json({ message: err.message });
  }
};
exports.getCabDetails = async (req, res) => {
  try {
    const cab = await Cab.findById(req.params.id);
    if (!cab) {
      return res.status(404).json({ success: false, message: "Cab not found" });
    }
    res.json({ success: true, cab });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};