const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

    message: String,

    title: String,                 // Notification title
    category: {                    // Category for filtering
        type: String,
        enum: ["booking", "payment", "flight", "hotel", "offer", "system", "general"]
    },

    type: {                        // Channel type
        type: String,
        enum: ["email", "sms", "whatsapp", "system", "push"]
    },

    templateId: {                 // For message templates
        type: mongoose.Schema.Types.ObjectId,
        ref: "Template",
        default: null
    },

    deepLink: String,             // For mobile redirection
    redirectUrl: String,          // For website redirection

    priority: {                   // High-priority alerts
        type: String,
        enum: ["low", "medium", "high"],
        default: "medium"
    },

    isRead: { type: Boolean, default: false },
    readAt: Date,

    sentAt: Date,
    deliveredAt: Date,

    expiry: Date,                 // Auto-expire notifications

    status: {                     // Delivery status
        type: String,
        enum: ["pending", "sent", "delivered", "failed"],
        default: "pending"
    },

    retryCount: { type: Number, default: 0 },
    errorLog: String,             // Error message if failed

    meta: {
        ip: String,
        device: String,
        location: String
    },

    via: {                         // Origin of notification
        type: String,
        enum: ["system", "user", "admin", "automated"],
        default: "system"
    }

}, { timestamps: true });

module.exports = mongoose.model("Notification", notificationSchema);
