const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
    hotelId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Hotel",
        required: true 
    },

    type: { 
        type: String, 
        enum: ["Single", "Double", "Deluxe", "Suite", "Family", "Executive"], 
        required: true 
    },

    price: { type: Number, required: true },

    maxGuests: { type: Number, required: true },

    amenities: [String], // AC, TV, WiFi, Breakfast, etc.

    // ⭐ NEW POINTS ADDED ⭐

    images: [String],                 // Room images
    description: String,              // About the room
    bedType: { type: String, enum: ["Single Bed", "Double Bed", "Queen", "King"] },

    refundable: { type: Boolean, default: true },
    cancellationPolicy: String,

    isAvailableAllYear: { type: Boolean, default: true },

    discountPercent: { type: Number, default: 0 },     // Dynamic pricing
    finalPrice: Number,                                // price - discount

    rating: { type: Number, default: 0 },              // avg rating of room
    totalReviews: { type: Number, default: 0 },

    roomNumber: { type: String },                      // If hotel wants specific numbering
    floorNumber: { type: Number },

    // Availability calendar
    availability: [
        {
            date: Date,
            isAvailable: Boolean,
            price: Number // dynamic price per date
        }
    ],

    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Room", roomSchema);
