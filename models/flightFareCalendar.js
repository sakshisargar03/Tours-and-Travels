const mongoose = require("mongoose");

const fareCalendarSchema = new mongoose.Schema({
    flightId: { type: mongoose.Schema.Types.ObjectId, ref: "Flight" },
    date: Date,
    price: Number,
    isCheapest: Boolean
});

module.exports = mongoose.model("FareCalendar", fareCalendarSchema);
