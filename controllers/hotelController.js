const Hotel = require("../models/hotel.model");

exports.searchHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find(req.query).populate("rooms");
    res.json({ success: true, hotels });
  } catch (err) {
    res.json({ message: err.message });
  }
};

exports.addHotel = async (req, res) => {
  try {
    const hotel = await Hotel.create(req.body);
    res.status(201).json({ hotel });
  } catch (err) {
    res.json({ message: err.message });
  }
};
exports.getHotelDetails = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id).populate("rooms");
    if (!hotel) {
      return res.status(404).json({ success: false, message: "Hotel not found" });
    }
    res.json({ success: true, hotel });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate("rooms");
    if (!hotel) {
      return res.status(404).json({ success: false, message: "Hotel not found" });
    }
    res.json({ success: true, hotel });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findByIdAndDelete(req.params.id);
    if (!hotel) {
      return res.status(404).json({ success: false, message: "Hotel not found" });
    }
    res.json({ success: true, message: "Hotel deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};