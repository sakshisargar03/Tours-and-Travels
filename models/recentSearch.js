const mongoose = require("mongoose");

const recentSearchSchema = new mongoose.Schema({

    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User" 
    },

    searchType: { 
        type: String, 
        enum: ["flight", "hotel", "bus", "train", "cab", "package"] 
    },

    // Store search filters (safe)
    query: {
        type: Object,
        default: {}
    },

    rawQuery: String,                         // NEW: Original text user typed
    filtersApplied: Object,                   // NEW: Price, rating, stops, amenities
    sortingMethod: String,                    // NEW: price_low, rating_high, popularity

    deviceInfo: {                             // NEW: For analytics
        deviceType: String,                   // mobile, desktop
        browser: String,
        os: String
    },

    userLocation: {                           // NEW
        ip: String,
        city: String,
        country: String
    },

    ai: {                                     // NEW: Smart recommendations
        relevanceScore: Number,               // How likely user is to pick this
        personalizationScore: Number
    },

    source: {                                 // NEW: Marketing tracking
        type: String,
        enum: ["organic", "direct", "ad", "referral"],
        default: "direct"
    },

    frequency: {                              // NEW: How many times searched
        type: Number,
        default: 1
    },

    lastSearchedAt: {                         // NEW: Updates on every search
        type: Date,
        default: Date.now
    },

    isExpired: {                              // NEW: If older than 30 days
        type: Boolean,
        default: false
    },

    createdAt: { 
        type: Date, 
        default: Date.now 
    }

}, { timestamps: true });

module.exports = mongoose.model("RecentSearch", recentSearchSchema);
