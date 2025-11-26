const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({
    
    // 🛫 Basic Flight Details
    airline: String,
    airlineCode: String, // AI, 6E, UK
    flightNumber: String,
    aircraft: {
        model: String,
        code: String,
        totalSeats: Number
    },

    // 🌍 Source & Destination
    source: String,
    destination: String,
    sourceAirport: String,
    destinationAirport: String,

    departureTime: Date,
    arrivalTime: Date,
    duration: String,

    // 💰 Pricing & Fare Details
    price: Number,
    baseFare: Number,
    taxes: Number,
    convenienceFee: Number,
    dynamicPricing: { type: Boolean, default: false }, // demand based

    // 🪑 Seat & Class
    seatsAvailable: Number,
    seatMap: [
        {
            seatNumber: String,
            isBooked: { type: Boolean, default: false },
            class: String   // Economy, Premium, Business
        }
    ],

    // 🧳 Baggage Rules
    baggage: {
        cabin: Number,
        checkIn: Number,
        extraBaggagePrice: Number
    },

    // 🍽 Services
    inFlightServices: [String], // WiFi, Entertainment, Charging Ports
    mealOptions: [String],      // Veg, Non-Veg, Jain

    // 🧭 Travel Types
    travelTypes: {
        oneWay: {
            isSelected: Boolean,
            date: Date
        },
        roundTrip: {
            isSelected: Boolean,
            from: Date,
            to: Date
        },
        multiCity: {
            isSelected: Boolean,
            locations: [String],
            dates: [Date]
        }
    },

    // ✈ Route Information
    flightRoute: {
        directFlight: Boolean,
        layovers: [
            {
                location: String,
                airport: String,
                duration: String
            }
        ]
    },

    // 🚦 Real-Time Flight Status
    flightStatus: {
        type: String,
        enum: ["Scheduled", "Delayed", "Departed", "Arrived", "Cancelled"],
        default: "Scheduled"
    },

    // 🔄 Cancellation & Refund Policies
    cancellationPolicy: {
        refundable: { type: Boolean, default: false },
        cancellationFee: Number,
        refundAmount: Number,
        rules: [String]
    },

    // 📅 Seasonal Fares (Fare Calendar)
    seasonalPrices: [
        {
            month: String,
            averagePrice: Number
        }
    ],

    // 🔐 Meta
    addedAt: { type: Date, default: Date.now },
    lastUpdated: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Flight", flightSchema);
