import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  event: { type: mongoose.Schema.Types.ObjectId, ref: "Event" },
  package: { type: mongoose.Schema.Types.ObjectId, ref: "Package" },
  totalPrice: Number,
  qrCode: String
});

export default mongoose.model("Booking", bookingSchema);
