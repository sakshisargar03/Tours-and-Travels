const mongoose = require("mongoose");

const couponSchema = new mongoose.Schema({
    code: String,
    discountType: { type: String, enum: ["flat", "percent"] },
    discountValue: Number,
    minAmount: Number,
    expiryDate: Date,
    maxUsage: Number,
    usedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }]
});

module.exports = mongoose.model("Coupon", couponSchema);
