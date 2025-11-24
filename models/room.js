const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
    hotelId: { type: mongoose.Schema.Types.ObjectId, ref: "Hotel" },
    type: String,  // Single, Double, Deluxe
    price: Number,
    maxGuests: Number,
    amenities: [String],
    availability: [
        {
            date: Date,
            isAvailable: Boolean
        }
    ]
});

module.exports = mongoose.model("Room", roomSchema);
