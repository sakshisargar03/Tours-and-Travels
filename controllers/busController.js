const Bus = require("../models/bus.model");

exports.searchBus = async (req, res) => {
  try {
    const buses = await Bus.find(req.query);
    res.json({ success: true, buses });
  } catch (err) {
    res.json({ message: err.message });
  }
};
exports.addBus = async (req, res) => {
  try {
    const bus = await Bus.create(req.body);
    res.status(201).json({ bus });
  } catch (err) {
    res.json({ message: err.message });
  }
};
exports.getBusDetails = async (req, res) => {
  try {
    const bus = await Bus.findById(req.params.id);
    if (!bus) {
      return res.status(404).json({ success: false, message: "Bus not found" });
    }
    res.json({ success: true, bus });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.updateBus = async (req, res) => {
  try {
    const bus = await Bus.findByIdAndUpdate(
      req.params.id,
        req.body,
        { new: true, runValidators: true }
    );
    if (!bus) {
      return res.status(404).json({ success: false, message: "Bus not found" });
    }
    res.json({ success: true, bus });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteBus = async (req, res) => {
    try {
    const bus = await Bus.findByIdAndDelete(req.params.id);
    if (!bus) {
      return res.status(404).json({ success: false, message: "Bus not found" });
    }
    res.json({ success: true, message: "Bus deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};  

