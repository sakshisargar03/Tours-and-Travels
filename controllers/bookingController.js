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
exports.getUserBookings = async (req, res) => {
    const bookings = await Booking.find({ userId: req.session.user._id }).populate('packageId');
    res.render("bookings", { bookings });
};
exports.getBookingDetails = async (req, res) => {   
    try {
    const booking = await Booking.findById(req.params.id).populate('packageId');
    if (!booking) {
      return res.status(404).json({ success: false, message: "Booking not found" });
    }
    res.json({ success: true, booking });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};