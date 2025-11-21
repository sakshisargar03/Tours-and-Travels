const routeSchema = new mongoose.Schema({
  from: String,
  to: String,
  flightPrice: Number,
  trainPrice: Number,
  busPrice: Number,
  distanceKm: Number,
  updatedAt: { type:Date, default:Date.now }
});
export default mongoose.model('Route', routeSchema);
