const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({
    airline: String,
    flightNumber: String,
    source: String,
    destination: String,
    departureTime: Date,
    arrivalTime: Date,
    duration: String,
    price: Number,
    seatsAvailable: Number,
    seatMap: [
        {
            seatNumber: String,
            isBooked: Boolean,
            class: String
        }
    ],
    baggage: {
        cabin: Number,
        checkIn: Number
    }
});

module.exports = mongoose.model("Flight", flightSchema);
