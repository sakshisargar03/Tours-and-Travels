const Coupon = require("../models/coupon.model");

exports.applyCoupon = async (req, res) => {
  try {
    const coupon = await Coupon.findOne({ code: req.body.code });
    if (!coupon) return res.json({ message: "Invalid Coupon" });

    res.json({ success: true, discount: coupon.discount });
  } catch (err) {
    res.json({ message: err.message });
  }
};
exports.getCoupons = async (req, res) => {
  try {
    const coupons = await Coupon.find(req.query);
    res.json({ success: true, coupons });
    } catch (err) { 
    res.status(500).json({ message: err.message });
  }
};
exports.addCoupon = async (req, res) => {
    try {
    const coupon = await Coupon.create(req.body);
    res.json({ success: true, coupon });
  }
    catch (err) {
    res.status(500).json({ message: err.message });
    }
};
exports.getCouponDetails = async (req, res) => {
  try {
    const coupon = await Coupon.findById(req.params.id);    
    if (!coupon) {
      return res.status(404).json({ success: false, message: "Coupon not found" });
    }
    res.json({ success: true, coupon });
    } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.updateCoupon = async (req, res) => {
  try {
    const coupon = await Coupon.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    if (!coupon) {
      return res.status(404).json({ success: false, message: "Coupon not found" });
    }
    res.json({ success: true, coupon });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.deleteCoupon = async (req, res) => {
  try {
    const coupon = await Coupon.findByIdAndDelete(req.params.id);
    if (!coupon) {
        return res.status(404).json({ success: false, message: "Coupon not found" });
    }
    res.json({ success: true, coupon });
  }
    catch (err) {
    res.status(500).json({ message: err.message });
  }
};

