const Train = require("../models/train.model");

exports.searchTrains = async (req, res) => {
  try {
    const trains = await Train.find(req.query);
    res.json({ success: true, trains });
  } catch (err) {
    res.json({ message: err.message });
  }
};
exports.addTrain = async (req, res) => {
  try {
    const train = await Train.create(req.body); 
    res.status(201).json({ train });
  } catch (err) {
    res.json({ message: err.message });
  }
};
exports.getTrainDetails = async (req, res) => {
  try {
    const train = await Train.findById(req.params.id);
    if (!train) {
      return res.status(404).json({ success: false, message: "Train not found" });
    }
    res.json({ success: true, train });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};