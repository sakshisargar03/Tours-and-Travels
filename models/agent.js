const mongoose = require("mongoose");

const agentSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    phone: String,
    agencyName: String,
    commissionRate: Number, 
    address: String,
    city: String,
    state: String,
    zipCode: String,
    country: String,
    dateJoined: { type: Date, default: Date.now },
    password: String,
    bookingsHandled: [{ type: mongoose.Schema.Types.ObjectId, ref: "Booking" }],
    walletBalance: Number

});

module.exports = mongoose.model("Agent", agentSchema);
