const mongoose = require("mongoose");

const busSchema = new mongoose.Schema({
    operator: String,
    busType: String, // AC Sleeper, Non-AC, Seater
    source: String,
    destination: String,
    departureTime: Date,
    arrivalTime: Date,
    price: Number,
    seatsAvailable: Number,
    seatMap: [
        {
            seatNumber: String,
            isBooked: Boolean
        }
    ]
});

module.exports = mongoose.model("Bus", busSchema);
