const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
    name: String,                  
    location: String,              
    city: String,                  
    state: String,

    postalCode: String,

    images: [String],               
    starRating: Number,             
    amenities: [String],            

    roomTypes: [String],            

    rooms: [
        { type: mongoose.Schema.Types.ObjectId, ref: "Room" }
    ],

    events: [
        {
            title: String,
            date: Date,
            description: String
        }
    ],

    geoLocation: {
        lat: Number,
        lng: Number
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
    numberOfReviews: { type: Number, default: 0 },

    priceRange: {
        min: Number,
        max: Number
    },

    pricing: {
        averagePricePerNight: Number,
        currency: String
    },

    availability: {
        totalRooms: Number,
        availableRooms: Number
    },

    contactDetails: {
        phone: String,
        email: String,
        website: String
    },

    policyHighlights: [String],

    policies: {
        checkIn: String,
        checkOut: String,
        cancellation: String,
        smoking: String,
        pets: String,
        children: String
    },

    ratings: {
        cleanliness: Number,
        service: Number,
        valueForMoney: Number,
        location: Number
    },

    dinnerOptions: [String],

    nearbyAttractions: [String],

    breakfastIncluded: { type: Boolean, default: false },

    shortDescription: String,
    detailDescription: String,
    longDescription: String,
    description: String,

    meta: {
        createdAt: { type: Date, default: Date.now },
        lastUpdated: { type: Date, default: Date.now }
    }
});

module.exports = mongoose.model("Hotel", hotelSchema);
