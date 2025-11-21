const hotelSchema = new mongoose.Schema({
  name: String,
  address: String,
  state: String,
  district: String,
  rating: Number,
  pricePerNight: Number,
  images: [String],
  location: { lat:Number, lng:Number }
});
export default mongoose.model('Hotel', hotelSchema);
