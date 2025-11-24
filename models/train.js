const mongoose = require("mongoose");

const trainSchema = new mongoose.Schema({
    trainName: String,
    trainNumber: String,
    source: String,
    destination: String,
    departureTime: Date,
    arrivalTime: Date,
    classTypes: [
        {
            className: String,  // Sleeper, AC 3 Tier, AC 2 Tier
            price: Number,
            seatsAvailable: Number
        }
    ]
});

module.exports = mongoose.model("Train", trainSchema);
