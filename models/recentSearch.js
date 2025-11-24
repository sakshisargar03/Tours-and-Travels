const mongoose = require("mongoose");

const recentSearchSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    searchType: { type: String, enum: ["flight", "hotel", "bus", "train", "cab", "package"] },
    query: Object, // store filters & search
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("RecentSearch", recentSearchSchema);
