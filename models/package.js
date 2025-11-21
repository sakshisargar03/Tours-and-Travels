import mongoose from "mongoose";

const packageSchema = new mongoose.Schema({
  name: String,
  description: String,
  days: Number,
  price: Number,
  hotels: [String],
  places: [String],
  image: String,
  comboEvent: { type: mongoose.Schema.Types.ObjectId, ref: "Event" }
});

export default mongoose.model("Package", packageSchema);
