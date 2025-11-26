import mongoose from "mongoose";

const routeSchema = new mongoose.Schema({
  from: { type: String, required: true },     // Source city
  to: { type: String, required: true },       // Destination city

  // Transport Prices
  flightPrice: Number,
  trainPrice: Number,
  busPrice: Number,
  cabPrice: Number,                            // NEW: Cab route estimate
  sharedCabPrice: Number,                      // NEW: Shared taxi

  distanceKm: Number,

  // NEW: Travel Duration
  duration: {
    flight: Number,        // in minutes
    train: Number,
    bus: Number,
    cab: Number
  },

  // NEW: Route Popularity
  popularityScore: { type: Number, default: 0 },

  // NEW: Multi-route Options
  stops: [
    {
      city: String,
      lat: Number,
      lng: Number
    }
  ],

  // NEW: Coordinates (for maps)
  coordinates: {
    from: { lat: Number, lng: Number },
    to: { lat: Number, lng: Number }
  },

  // NEW: Best Travel Suggestions
  bestMode: { type: String, enum: ["flight", "train", "bus", "cab"] },
  recommendedTimeToTravel: String,

  // NEW: Traffic / Weather Alerts
  alerts: [
    {
      type: String,                      // traffic, weather, strike, maintenance
      message: String,
      date: { type: Date, default: Date.now }
    }
  ],

  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model("Route", routeSchema);
