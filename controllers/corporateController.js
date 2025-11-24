const Corporate = require("../models/corporate.model");

exports.registerCorporate = async (req, res) => {
  try {
    const corp = await Corporate.create(req.body);
    res.json({ success: true, corp });
  } catch (err) {
    res.json({ message: err.message });
  }
};
exports.getCorporates = async (req, res) => {
  try {
    const corps = await Corporate.find(req.query);
    res.json({ success: true, corps });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.getCorporateDetails = async (req, res) => {
  try {
    const corp = await Corporate.findById(req.params.id);
    if (!corp) {
      return res.status(404).json({ success: false, message: "Corporate not found" });
    }
    res.json({ success: true, corp });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};