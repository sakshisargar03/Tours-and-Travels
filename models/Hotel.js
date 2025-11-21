import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
  name: String,
  location: String,
  rating: Number,
  price: Number,
  image: String
});

export default mongoose.model("Hotel", hotelSchema);
