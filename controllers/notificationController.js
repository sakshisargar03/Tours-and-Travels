const Notification = require("../models/notification.model");

exports.sendNotification = async (req, res) => {
  try {
    const data = await Notification.create(req.body);
    res.json({ success: true, data });
  } catch (err) {
    res.json({ message: err.message });
  }
};
exports.getNotifications = async (req, res) => {
  try {
    const data = await Notification.find(req.query);
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.getNotificationDetails = async (req, res) => {
  try {
    const data = await Notification.findById(req.params.id);
    if (!data) {
      return res.status(404).json({ success: false, message: "Notification not found" });
    }
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.updateNotification = async (req, res) => {
  try {
    const data = await Notification.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    if (!data) {
      return res.status(404).json({ success: false, message: "Notification not found" });
    }
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.deleteNotification = async (req, res) => {
  try {
    const data = await Notification.findByIdAndDelete(req.params.id);
    if (!data) {
        return res.status(404).json({ success: false, message: "Notification not found" });
    }
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
