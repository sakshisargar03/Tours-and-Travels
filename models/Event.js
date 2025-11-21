import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: String,
  location: String,
  venueMap: String, 
  seats: [String], 
  price: Number,
  image: String
});

export default mongoose.model("Event", eventSchema);
