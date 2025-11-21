import Booking from "../models/Booking.js";
import generateQR from "../utils/generateQR.js";

export const createBooking = async (req, res) => {
  const qr = await generateQR(req.body);

  const booking = await Booking.create({
    ...req.body,
    qrCode: qr
  });

  res.json({ msg: "Booking Successful", booking });
};
