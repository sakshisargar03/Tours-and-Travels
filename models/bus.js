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
    ],
    status: { type: String, enum: ['active', 'inactive'], default: 'active' },         
    seatsAvailable: Number,
    busRoute: {
        stops: [
            {
                location: String,
                arrivalTime: Date,
                departureTime: Date
            }
        ]
    },

    amenities: [String],
    travelDate: Date,
    createdAt: { type: Date, default: Date.now }

});

module.exports = mongoose.model("Bus", busSchema);


