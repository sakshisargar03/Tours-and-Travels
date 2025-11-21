const bookingSchema = new mongoose.Schema({
  userName: String,
  userEmail: String,
  bookingType: { type:String, enum:['event','package','combo'] },
  itemId: { type: mongoose.Schema.Types.ObjectId, required:true, refPath: 'onModel' },
  onModel: { type:String, required:true, enum:['Event','Package'] },
  seats: Number,            // for event
  travellers: Number,       // for package
  totalPrice: Number,
  paymentStatus: { type:String, enum:['pending','paid','failed'], default:'pending' },
  paymentDetails: Object,
  qrCodeDataUrl: String,
  createdAt: { type:Date, default:Date.now }
});

export default mongoose.model('Booking', bookingSchema);
import mongoose from 'mongoose';
