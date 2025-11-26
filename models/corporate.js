const mongoose = require("mongoose");

const corporateSchema = new mongoose.Schema({

    // 🏢 Company Info
    companyName: { type: String, required: true },
    gstNumber: String,
    address: String,
    companyType: { type: String, enum: ["IT", "Finance", "Manufacturing", "Construction", "Other"] },

    // 📄 Company Documents
    documents: {
        gstCertificate: String,
        incorporationCertificate: String,
        companyIDProof: String
    },

    // 👥 Employee List
    employees: [
        {
            name: String,
            email: String,
            department: String,
            role: { type: String, default: "employee" },  // employee / manager / admin
            employeeID: String,
            mobileNumber: String,
            isActive: { type: Boolean, default: true },

            // Employee Travel Limits
            travelLimit: {
                dailyLimit: Number,
                monthlyLimit: Number,
                yearlyLimit: Number
            },

            // Employee Preferences
            preferences: {
                mealType: String,           // veg / non-veg
                seatPreference: String,     // window / aisle
                travelClass: String         // economy / business
            }
        }
    ],

    // ☎ Contact Details
    contactNumber: String,
    email: String,
    altEmail: String,
    hrContact: String,
    accountingContact: String,

    // 💳 Corporate Credit System
    creditLimit: Number,
    usedCredit: Number,
    creditValidity: Date,

    creditHistory: [
        {
            amount: Number,
            type: { type: String, enum: ["used", "paid"] },
            date: { type: Date, default: Date.now },
            description: String
        }
    ],

    // 💼 Corporate Booking Rules
    travelPolicy: {
        requireManagerApproval: { type: Boolean, default: true },
        allowedTravelClasses: [String],  // economy / business / first
        maxHotelRating: Number,          // 3-star, 4-star, 5-star
        maxFlightCost: Number,           // max amount
        maxHotelCost: Number             // max amount
    },

    // 📅 Corporate Trips
    tripHistory: [
        {
            bookingId: String,
            type: { type: String, enum: ["flight", "hotel", "bus", "train", "cab"] },
            date: Date,
            amount: Number,
            status: String
        }
    ],

    // 💵 Corporate Billing
    billing: {
        preferredPaymentMethod: { type: String, enum: ["credit", "invoice", "advance"] },
        billingCycle: { type: String, enum: ["weekly", "monthly", "quarterly"] },
        lastInvoiceDate: Date,
        nextInvoiceDate: Date
    },

    // 🧾 Invoices
    invoices: [
        {
            invoiceId: String,
            amount: Number,
            date: Date,
            status: { type: String, enum: ["paid", "unpaid", "overdue"] }
        }
    ],

    // 📌 Additional Features
    assignedManager: {
        name: String,
        email: String,
        phone: String
    },

    // 🔐 Security / Login
    access: {
        hasPortalAccess: { type: Boolean, default: false },
        loginEmail: String,
        password: String
    },

    // 🔔 Notification Settings
    notifications: {
        emailAlerts: { type: Boolean, default: true },
        smsAlerts: { type: Boolean, default: false }
    },

    // 🔄 Corporate Status
    status: { type: String, enum: ['active', 'inactive'], default: 'active' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Corporate", corporateSchema);
