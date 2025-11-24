const Package = require("../models/package.model");

exports.getPackages = async (req, res) => {
  try {
    const data = await Package.find(req.query);
    res.json({ success: true, data });
  } catch (err) {
    res.json({ message: err.message });
  }
};

exports.addPackage = async (req, res) => {
  try {
    const data = await Package.create(req.body);
    res.json({ success: true, data });
  } catch (err) {
    res.json({ message: err.message });
  }
};
exports.getPackageDetails = async (req, res) => {
  try {
    const data = await Package.findById(req.params.id);
    if (!data) {
      return res.status(404).json({ success: false, message: "Package not found" });
    }
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updatePackage = async (req, res) => {
  try {
    const data = await Package.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!data) {
      return res.status(404).json({ success: false, message: "Package not found" });
    }
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.deletePackage = async (req, res) => {
  try {
    const data = await Package.findByIdAndDelete(req.params.id);
    if (!data) {
      return res.status(404).json({ success: false, message: "Package not found" });
    }
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};