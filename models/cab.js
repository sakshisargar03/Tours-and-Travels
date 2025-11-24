const mongoose = require("mongoose");

const cabSchema = new mongoose.Schema({
    driverName: String,
    carModel: String,
    carNumber: String,
    type: String, // Sedan, SUV, Hatchback
    source: String,
    destination: String,
    distanceKm: Number,
    estimatedTime: String,
    fare: Number,
    available: { type: Boolean, default: true }
});

module.exports = mongoose.model("Cab", cabSchema);
