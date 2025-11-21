const placeSchema = new mongoose.Schema({
  name: String,
  state: String,
  district: String,
  description: String,   // long content, tips, best time, entry fees
  images: [String],
  lat: Number,
  lng: Number,
  tags: [String]         // beach, temple, hillstation ...
});
export default mongoose.model('Place', placeSchema);
