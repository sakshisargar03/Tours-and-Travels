import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  title: String,
  category: String,           // IPL, Concert, Festival
  description: String,        // long description
  date: Date,
  venue: String,
  price: Number,
  seatsTotal: Number,
  seatsBooked: { type:Number, default:0 },
  image: String,
  location: { lat:Number, lng:Number }   // for map pins
}, { timestamps:true });

export default mongoose.model('Event', eventSchema);
