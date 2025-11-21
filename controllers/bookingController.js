const Booking = require("../models/Booking");

exports.createBooking = async (req, res) => {
    const booking = await Booking.create({
        userId: req.session.user._id,
        packageId: req.body.packageId,
        date: req.body.date,
        persons: req.body.persons,
        totalAmount: req.body.totalAmount
    });

    res.render("success", { booking });
};
