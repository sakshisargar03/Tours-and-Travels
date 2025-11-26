const { checkPrime } = require("crypto");
const mongoose = require("mongoose");

const walletSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    balance: { type: Number, default: 0 },
    transactions: [
        {
            type: String, // credit / debit
            amount: Number,
            date: { type: Date, default: Date.now },
            description: String
        }
    ],

    lastUpdated: { type: Date, default: Date.now },
    checkPrime: { type: Boolean, default: false },
    checkwallet: { type: Boolean, default: false },
    walletLimit: { type: Number, default: 10000 },
    topupBonus: { type: Number, default: 0 }

});

module.exports = mongoose.model("Wallet", walletSchema);
