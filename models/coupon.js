const mongoose = require("mongoose");

const couponSchema = new mongoose.Schema({

    // 🎫 Coupon Basic Details
    code: { type: String, required: true, unique: true },
    title: String,                     // e.g. "New Year Offer"
    description: String,               // Coupon short summary

    // 💸 Discount Details
    discountType: { type: String, enum: ["flat", "percent"] },
    discountValue: Number,
    maxDiscountAmount: Number,         // for percent coupons

    // 🤑 Usage Rules
    minAmount: Number,
    maxUsage: Number,
    usedCount: { type: Number, default: 0 },

    // 👤 User Restrictions
    usedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    userLimit: { type: Number, default: 1 },   // One user कितीदा वापरू शकतो

    // 📅 Validity
    startDate: Date,
    expiryDate: Date,
    isActive: { type: Boolean, default: true },

    // 🛒 Applicable Categories (Flight / Hotel / Bus etc)
    applicableFor: {
        flight: { type: Boolean, default: false },
        hotel: { type: Boolean, default: false },
        bus: { type: Boolean, default: false },
        cab: { type: Boolean, default: false },
        tourPackage: { type: Boolean, default: false }
    },

    // 🌍 Location based coupons
    validCities: [String],            // e.g. ["Pune", "Mumbai"]
    validStates: [String],
    validCountries: [String],

    // 👤 New User / Old User restriction
    userType: { type: String, enum: ["new", "existing", "all"], default: "all" },

    // 💼 Corporate Coupons
    isCorporate: { type: Boolean, default: false },
    allowedCompanies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Corporate" }],

    // 🔥 Auto-Apply System
    autoApply: { type: Boolean, default: false },

    // 🎯 Device Restriction
    deviceType: { type: String, enum: ["mobile", "web", "all"], default: "all" },

    // 🎁 Special Features
    firstTimeUserOnly: { type: Boolean, default: false },
    referralOnly: { type: Boolean, default: false },

    // 📊 Tracking
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Coupon", couponSchema);
