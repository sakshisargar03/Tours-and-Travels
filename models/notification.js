const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    message: String,
    type: { type: String, enum: ["email", "sms", "whatsapp", "system"] },
    sentAt: Date,
    status: { type: String, default: "pending" }
});

module.exports = mongoose.model("Notification", notificationSchema);
