const Review = require("../models/review.model");

exports.addReview = async (req, res) => {
  try {
    const review = await Review.create(req.body);
    res.json({ success: true, review });
  } catch (err) {
    res.json({ message: err.message });
  }
};
exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.find(req.query);
    res.json({ success: true, reviews });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.getReviewDetails = async (req, res) => {
    try {
    const review = await Review.findById(req.params.id);
    if (!review) {
        return res.status(404).json({ success: false, message: "Review not found" });
    }
    res.json({ success: true, review });
  }
    catch (err) {
    res.status(500).json({ message: err.message });
    }
};
exports.updateReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    if (!review) {
      return res.status(404).json({ success: false, message: "Review not found" });
    }
    res.json({ success: true, review });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.deleteReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id);   
    if (!review) {
        return res.status(404).json({ success: false, message: "Review not found" });
    }
    res.json({ success: true, review });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

