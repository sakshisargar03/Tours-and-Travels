const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema({

    title: String,
    subtitle: String,
    description: String,

    days: Number,
    nights: Number,

    city: String,
    state: String,
    country: String,

    coordinates: {
        lat: Number,
        lng: Number
    },

    category: {
        type: String,
        enum: ["family", "honeymoon", "adventure", "luxury", "group", "solo", "wildlife", "nature"],
        default: "family"
    },

    basePrice: Number,

    seasonalPricing: [
        {
            season: String,
            price: Number
        }
    ],

    discount: { type: Number, default: 0 },
    tax: { type: Number, default: 0 },

    images: [String],

    itinerary: [
        {
            day: Number,
            title: String,
            activities: [String],
            mealsIncluded: Boolean,
            hotel: {
                name: String,
                rating: Number,
                roomType: String
            }
        }
    ],

    transport: {
        flightsIncluded: Boolean,
        cabIncluded: Boolean,
        busIncluded: Boolean,
        trainIncluded: Boolean
    },

    addOns: [
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

    routeMap: [
        {
            day: Number,
            location: String,
            lat: Number,
            lng: Number
        }
    ],

    inclusions: [String],       // NEW POINT
    exclusions: [String],       // NEW POINT

    ageRestrictions: {
        minAge: Number,
        maxAge: Number
    },

    paymentOptions: {
        partialPayment: Boolean,
        partialAmount: Number,
        fullPayment: Boolean,
        emiAvailable: Boolean
    },

    cancellationCharges: [
        {
            daysBefore: Number,
            refundPercent: Number
        }
    ],

    tags: [String], // Trending, Bestseller

    multiLanguage: {
        hindi: String,
        marathi: String,
        english: String
    },

    specialNotes: [String], // NEW POINT

    weatherInfo: {
        minTemp: Number,
        maxTemp: Number,
        climateType: String
    },

    faqs: [
        {
            question: String,
            answer: String
        }
    ],

    emergencyContact: {
        phone: String,
        email: String
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

    averageRating: { type: Number, default: 0 },

    isDynamic: { type: Boolean, default: false },
    popularityScore: { type: Number, default: 0 },

    availableSlots: Number,
    totalBookings: { type: Number, default: 0 },

    seo: {
        metaTitle: String,
        metaDescription: String,
        keywords: [String]
    },

    status: { type: String, enum: ["active", "inactive"], default: "active" },

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }

}, { timestamps: true });

module.exports = mongoose.model("Package", packageSchema);
  