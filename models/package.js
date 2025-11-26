const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema({

    title: String,
    subtitle: String,                               // Short highlight line
    description: String,

    days: Number,
    nights: Number,

    city: String,
    state: String,
    country: String,

    coordinates: {                                  // For maps
        lat: Number,
        lng: Number
    },

    category: {                                     // For filtering
        type: String,
        enum: ["family", "honeymoon", "adventure", "luxury", "group", "solo", "wildlife", "nature"],
        default: "family"
    },

    basePrice: Number,

    seasonalPricing: [                              // Price changes by season
        {
            season: String,
            price: Number
        }
    ],

    discount: {
        type: Number,
        default: 0
    },

    tax: {                                          // GST / service tax
        type: Number,
        default: 0
    },

    images: [String],

    itinerary: [
        {
            day: Number,
            title: String,
            activities: [String],
            mealsIncluded: Boolean,
            hotel: {                                 // Hotel per day
                name: String,
                rating: Number,
                roomType: String
            }
        }
    ],

    transport: {                                     // Travel transport
        flightsIncluded: Boolean,
        cabIncluded: Boolean,
        busIncluded: Boolean,
        trainIncluded: Boolean
    },

    addOns: [                                        // Extra purchasable items
        {
            name: String,
            price: Number,
            description: String
        }
    ],

    groupSize: {
        min: Number,
        max: Number
    },

    bestTimeToVisit: String,

    routeMap: [                                      // Path of travel on map
        {
            day: Number,
            location: String,
            lat: Number,
            lng: Number
        }
    ],

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

    averageRating: { type: Number, default: 0 },

    isDynamic: { type: Boolean, default: false },     // User customization
    popularityScore: { type: Number, default: 0 },

    availableSlots: Number,                           // For group tours
    totalBookings: { type: Number, default: 0 },

    seo: {                                             // SEO fields
        metaTitle: String,
        metaDescription: String,
        keywords: [String]
    },

    status: { type: String, enum: ["active", "inactive"], default: "active" },

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }

}, { timestamps: true });

module.exports = mongoose.model("Package", packageSchema);
