import mongoose from 'mongoose';

const packageSchema = new mongoose.Schema({
  name: { type:String, required:true },
  type: { type:String },       // Dream Holiday/Honeymoon/Adventure/Family
  description: String,        // detailed itinerary + place descriptions
  days: Number,
  price: Number,
  image: String,
  hotels: [{ name:String, rating:Number, price:Number }],
  places: [{                 // each place in itinerary
    name: String,
    description: String,     // place specific description (history, tip)
    lat: Number,
    lng: Number,
    durationHours: Number    // approx time to spend
  }],
  location: { lat:Number, lng:Number }, // main location for map
  comboEvent: { type: mongoose.Schema.Types.ObjectId, ref:'Event' }
}, { timestamps:true });

export default mongoose.model('Package', packageSchema);
