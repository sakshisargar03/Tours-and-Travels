const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema({
    title: String,
    description: String,
    days: Number,
    nights: Number,
    city: String,
    state: String,
    country: String,
    basePrice: Number,
    images: [String],
    itinerary: [
        {
            day: Number,
            title: String,
            activities: [String],
            mealsIncluded: Boolean
        }
    ],
    isDynamic: { type: Boolean, default: false }, // User customisation
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Package", packageSchema);
