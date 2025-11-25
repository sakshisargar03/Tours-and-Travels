const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/toursDB"),{ useNewUrlParser:true, useUnifiedTopology:true };
    console.log("MongoDB connected");
  } catch (err) {
    console.error("DB connect error:", err);
    process.exit(1);
  }
}

module.exports = connectDB;

