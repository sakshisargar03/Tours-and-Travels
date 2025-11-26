const mongoose = require("mongoose");

const groupBookingSchema = new mongoose.Schema({

    // 👤 Organizer Details
    organizerId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User",
        required: true 
    },

    // 👥 Group Members
    members: [
        {
            name: String,
            age: Number,
            gender: String,
            passportNumber: String,
            aadharNumber: String,
            email: String,
            phone: String
        }
    ],

    totalMembers: Number,

    // ✈ Travel Type
    travelType: {
        type: String,
        enum: ["flight", "hotel", "bus", "cab", "train", "package"],
        required: true
    },

    // 📍 Travel Details
    source: String,
    destination: String,

    destinations: [String],   // for multi-city group tours
    travelDate: Date,
    returnDate: Date,

    // 🏨 Package / Hotel / Flight Ref
    packageId: { type: mongoose.Schema.Types.ObjectId, ref: "Package" },
    preferredAirline: String,
    preferredHotelCategory: String, // 3-star / 5-star

    // 💰 Budget
    budgetPerPerson: Number,
    totalBudget: Number,

    // 🚌 Pickup - Drop
    pickupLocation: String,
    dropLocation: String,

    // 🧾 Quotation System (multiple agents can send quotes)
    quotations: [
        {
            agentId: { type: mongoose.Schema.Types.ObjectId, ref: "Agent" },
            price: Number,
            details: String,
            pdfUrl: String,
            createdAt: { type: Date, default: Date.now }
        }
    ],

    // 👨‍💼 Assigned Agent
    assignedAgent: { type: mongoose.Schema.Types.ObjectId, ref: "Agent" },

    // 📄 Document Upload (ID proof, passport, GST)
    documents: [
        {
            name: String,
            url: String
        }
    ],

    // 🚦 Booking Status Flow
    status: {
        type: String,
        enum: [
            "pending",
            "agent_assigned",
            "quotation_sent",
            "quotation_approved",
            "payment_pending",
            "booked",
            "completed",
            "cancelled"
        ],
        default: "pending"
    },

    // 💳 Payment Status
    paymentStatus: {
        type: String,
        enum: ["unpaid", "partial", "paid"],
        default: "unpaid"
    },

    // 📝 Admin / Agent Notes
    notes: String,

    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("GroupBooking", groupBookingSchema);
