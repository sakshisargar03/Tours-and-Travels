const User = require("../models/user.model");

exports.registerUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ success: true, user });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email }).select("+password");
    if (!user || !(await user.matchPassword(req.body.password))) {
      return res.status(400).json({ success: false, message: "Invalid Credentials" });
    }
    res.json({ success: true, token: user.generateToken() });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.json({ success: true, user });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
exports.updateProfile = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req
.user.id, req.body, { new: true, runValidators: true });
    res.json({ success: true, user });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.user.id);
    res.json({ success: true, message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};