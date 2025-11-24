const FlightFareCalendar = require("../models/flightFareCalendar.model");

exports.getMonthlyFare = async (req, res) => {
  try {
    const { origin, destination } = req.query;
    const data = await FlightFareCalendar.find({ origin, destination });
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ message: err.message });

  }

};

