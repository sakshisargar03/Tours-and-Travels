const Room = require("../models/room.model");

exports.addRoom = async (req, res) => {
  try {
    const room = await Room.create(req.body);
    res.json({ success: true, room });
  } catch (err) {
    res.json({ message: err.message });
  }
};
exports.getRoomDetails = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) {
      return res.status(404).json({ success: false, message: "Room not found" });
    }
    res.json({ success: true, room });
    } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateRoom = async (req, res) => {
  try {
    const room = await Room.findByIdAndUpdate(
      req.params.id,
        req.body,
        { new: true, runValidators: true }

    );
    if (!room) {
      return res.status(404).json({ success: false, message: "Room not found" });
    }
    res.json({ success: true, room });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};