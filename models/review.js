const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

    forType: { 
        type: String, 
        enum: ["hotel", "flight", "package"], 
        required: true 
    },

    itemId: { 
        type: mongoose.Schema.Types.ObjectId, 
        required: true 
    },

    rating: { 
        type: Number, 
        min: 1, 
        max: 5, 
        required: true 
    },

    comment: { type: String },

    // ⭐ New Points Added Below ⭐

    images: [String],                 // Review images uploaded by user
    likes: { type: Number, default: 0 },  // Helpful votes
    dislikes: { type: Number, default: 0 }, // Not helpful votes

    sentiment: { type: String, enum: ["positive", "neutral", "negative"] }, 
    // AI sentiment analysis (optional)

    isEdited: { type: Boolean, default: false }, 
    editedAt: { type: Date }, 

    respondedByAdmin: { type: Boolean, default: false },
    adminResponse: { type: String },   // Admin reply to review
    responseDate: { type: Date },

    status: { 
        type: String, 
        enum: ["visible", "hidden", "flagged"], 
        default: "visible"
    }, // moderation system

    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Review", reviewSchema);
