const mongoose = require("mongoose");

const groupBookingSchema = new mongoose.Schema({
    organizerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    members: [
        {
            name: String,
            age: Number,
            gender: String
        }
    ],
    totalMembers: Number,
    destination: String,
    travelDate: Date,
    packageId: { type: mongoose.Schema.Types.ObjectId, ref: "Package" },
    status: { type: String, default: "pending" },
    assignedAgent: { type: mongoose.Schema.Types.ObjectId, ref: "Agent" },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("GroupBooking", groupBookingSchema);
