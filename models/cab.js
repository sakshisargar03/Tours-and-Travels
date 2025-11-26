const mongoose = require("mongoose");

const cabSchema = new mongoose.Schema({
    driverName: String,
    carModel: String,
    carNumber: String,
    type: String, // Sedan, SUV, Hatchback
    source: String,
    destination: String,
    distanceKm: Number,
    estimatedTime: String,
    fare: Number,
    status: { type: String, enum: ['active', 'inactive'], default: 'active' },         
    isAvailable: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
    seats: Number,
    airConditioned: { type: Boolean, default: true },
    valuable: { type: Boolean, default: false },
    luggageCapacity: Number,
    isAvailable: { type: Boolean, default: true },
    cabdriverContact: String,
    petFriendly: { type: Boolean, default: false },
    musicSystem: { type: Boolean, default: true },
    travelDate: Date,
});

module.exports = mongoose.model("Cab", cabSchema);
