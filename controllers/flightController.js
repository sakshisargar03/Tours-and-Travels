const Flight = require("../models/flight.model");

exports.searchFlights = async (req, res) => {
  try {
    const flights = await Flight.find(req.query);
    res.json({ success: true, flights });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addFlight = async (req, res) => {
  try {
    const flight = await Flight.create(req.body);
    res.status(201).json({ success: true, flight });
  } catch (err) {
    res.json({ message: err.message });
  }
};
exports.getFlightDetails = async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id);
    if (!flight) {
      return res.status(404).json({ success: false, message: "Flight not found" });
    }
    res.json({ success: true, flight });
  }
    catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateFlight = async (req, res) => {
  try {
    const flight = await Flight.findByIdAndUpdate
    (req.params.id, req.body, { new: true, runValidators: true });
    if (!flight) {
      return res.status(404).json({ success: false, message: "Flight not found" });
    }
    res.json({ success: true, flight });
  }
    catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteFlight = async (req, res) => {
    try {
    const flight = await Flight.findByIdAndDelete(req.params.id);
    if (!flight) {
      return res.status(404).json({ success: false, message: "Flight not found" });
    }
    res.json({ success: true, message: "Flight deleted successfully" });
  }
    catch (err) {
    res.status(500).json({ message: err.message });
  }
};
