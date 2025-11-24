const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
    name: String,
    location: String,
    city: String,
    state: String,
    images: [String],
    starRating: Number,
    amenities: [String],
    rooms: [{ type: mongoose.Schema.Types.ObjectId, ref: "Room" }],
    events: [
        {
            title: String,
            date: Date,
            description: String
        }
    ],
    description: String
});

module.exports = mongoose.model("Hotel", hotelSchema);
