const mongoose = require("mongoose");

const corporateSchema = new mongoose.Schema({
    companyName: String,
    gstNumber: String,
    address: String,
    employees: [
        {
            name: String,
            email: String,
            department: String,
            role: { type: String, default: "employee" } // employee / manager
        }
    ],
    creditLimit: Number,
    usedCredit: Number
});

module.exports = mongoose.model("Corporate", corporateSchema);
