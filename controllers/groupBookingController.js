const GroupBooking = require("../models/groupBooking.model");

exports.submitGroupRequest = async (req, res) => {
  try {
    const data = await GroupBooking.create(req.body);
    res.json({ success: true, data });
  } catch (err) {
    res.json({ message: err.message });
  }
};
exports.getGroupRequests = async (req, res) => {
  try {
    const data = await GroupBooking.find(req.query);
    res.json({ success: true, data });
  }
    catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getGroupRequestDetails = async (req, res) => {
  try {
    const data = await GroupBooking.findById(req.params.id);
    if (!data) {
      return res.status(404).json({ success: false, message: "Group booking request not found" });
    }
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};