import mongoose from "mongoose";

const routeSchema = new mongoose.Schema({
  from: String,
  to: String,
  flight: Number,
  train: Number,
  bus: Number,
  distance: Number
});

export default mongoose.model("Route", routeSchema);
