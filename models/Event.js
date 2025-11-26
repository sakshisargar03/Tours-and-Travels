import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    // 🎫 Basic Event Details
    title: { type: String, required: true },
    category: { type: String }, // IPL, Concert, Festival, Comedy Show etc
    description: String,
    shortDescription: String,

    // 📅 Event Schedule
    date: Date,
    endDate: Date,
    timings: {
      startTime: String,
      endTime: String
    },

    // 📍 Venue & Location
    venue: String,
    address: String,
    city: String,
    state: String,
    country: String,
    location: { 
      lat: Number, 
      lng: Number 
    },

    // 🪑 Seat & Ticketing
    seatsTotal: Number,
    seatsBooked: { type: Number, default: 0 },
    seatTypes: [
      {
        type: { type: String },         // VIP / Premium / General
        price: Number,
        total: Number,
        booked: { type: Number, default: 0 }
      }
    ],

    // 💸 Pricing & Discounts
    price: Number,
    discount: Number,
    dynamicPricing: { type: Boolean, default: false },

    // 🖼 Media
    image: String,
    gallery: [String],

    // ⭐ Ratings & Reviews
    reviews: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        rating: Number,
        comment: String,
        date: { type: Date, default: Date.now }
      }
    ],
    averageRating: { type: Number, default: 0 },

    // 🔐 Organizer / Host Info
    organizerName: String,
    organizerContact: String,
    organizerEmail: String,
    organizerWebsite: String,

    // 🚨 Rules & Policies
    ageLimit: String,         // 18+, No alcohol etc
    refundPolicy: String,
    entryRules: [String],

    // 🎟 Booking Related
    isSoldOut: { type: Boolean, default: false },
    isCancelled: { type: Boolean, default: false },

    // 🌍 Multi-Language Support
    language: { type: String, default: "English" },

    // 🔥 Trending / Popular
    isTrending: { type: Boolean, default: false },
    popularityScore: { type: Number, default: 0 },

  },
  { timestamps: true }
);

export default mongoose.model("Event", eventSchema);
