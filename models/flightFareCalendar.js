const mongoose = require("mongoose");

const fareCalendarSchema = new mongoose.Schema({
    
    flightId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Flight",
        required: true
    },

    // 📅 Date for which the fare applies
    date: { type: Date, required: true },

    // 💰 Price Details
    price: { type: Number, required: true },
    baseFare: Number,
    taxes: Number,
    discountsApplied: Number,
    finalPrice: Number,    // after discount

    // 📉 Fare Trend
    previousDayPrice: Number,
    priceDifference: Number, // positive or negative
    trend: {
        type: String,
        enum: ["up", "down", "stable"],
        default: "stable"
    },

    // 🏷 Cheapest & Costliest indicator
    isCheapest: { type: Boolean, default: false },
    isHighest: { type: Boolean, default: false },

    // 🌦 Demand & Seasonality
    demandLevel: {
        type: String,
        enum: ["low", "medium", "high"],
        default: "medium"
    },
    isPeakSeason: { type: Boolean, default: false },

    // ✈ Route Info (useful for multi-city)
    source: String,
    destination: String,
    airline: String,

    // 🔁 Dynamic Pricing Flag
    dynamicPricingActive: { type: Boolean, default: false },

    // 🕒 Timestamp
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("FareCalendar", fareCalendarSchema);
