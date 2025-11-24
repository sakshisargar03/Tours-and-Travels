const mongoose = require("mongoose");

const agentSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    phone: String,
    agencyName: String,
    commissionRate: Number,
    password: String,
    bookingsHandled: [{ type: mongoose.Schema.Types.ObjectId, ref: "Booking" }],
    walletBalance: Number
});

module.exports = mongoose.model("Agent", agentSchema);
