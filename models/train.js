const mongoose = require("mongoose");
const { act } = require("react");

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
    ],
    amenities: [String], // WiFi, Charging Ports, Pantry Car
    travelDate: Date,
    status: { type: String, enum: ['active', 'inactive'], default: 'active' },
    createdAt: { type: Date, default: Date.now },

    updatedAt: { type: Date, default: Date.now },

    seatMap: [
        {
            seatNumber: String,
            isBooked: { type: Boolean, default: false },
            class: String   // Sleeper, AC 3 Tier, AC 2 Tier
        }
    ],

    totalBookings: { type: Number, default: 0 },

    dynamicPricing: { type: Boolean, default: false }, // demand based
    popularityScore: { type: Number, default: 0 },
    seo: {
        metaTitle: String,
        metaDescription: String,
        keywords: [String]
    },

    activeOffers: [
        {
            offerCode: String,
            discountPercentage: Number,
            validTill: Date
        }
    ],

    AvailableSlots: Number,

    ratings: {
        averageRating: { type: Number, default: 0 },
        totalReviews: { type: Number, default: 0 }
    },
    policies: {
        cancellation: String,
        refund: String,
        reschedule: String
    },

    reviews: [
        {
            user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
            rating: Number,
            comment: String,
            date: { type: Date, default: Date.now }
        }
    ],

    active: { type: Boolean, default: true },

    ActiveXObject: { type: Boolean, default: true },

    AC: { type: Boolean, default: true },
    nonAC: { type: Boolean, default: true },
    sleeper: { type: Boolean, default: true },
    normal: { type: Boolean, default: true },

    priceRange: {
        min: Number,
        max: Number
    }
});

module.exports = mongoose.model("Train", trainSchema);
