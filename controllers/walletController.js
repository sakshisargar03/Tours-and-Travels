const Wallet = require("../models/wallet.model");

exports.addMoney = async (req, res) => {
  try {
    const wallet = await Wallet.findOne({ user: req.user.id });
    wallet.balance += req.body.amount;
    await wallet.save();
    res.json({ success: true, wallet });
  } catch (err) {
    res.json({ message: err.message });
  }
};

exports.getWalletBalance = async (req, res) => {
  try {
    const wallet = await Wallet.findOne({ user: req.user.id });
    res.json({ success: true, balance: wallet.balance });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getWalletDetails = async (req, res) => {
  try {
    const wallet = await Wallet.findOne({ user: req.user.id });
    res.json({ success: true, wallet });
    } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deductMoney = async (req, res) => {
  try {
    const wallet = await Wallet.findOne({ user: req.user.id });
    if (wallet.balance < req.body.amount) {
      return res.status(400).json({ success: false, message: "Insufficient balance" });
    }
    wallet.balance -= req.body.amount;
    await wallet.save();
    res.json({ success: true, wallet });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getTransactionHistory = async (req, res) => {
  try {
    const wallet = await Wallet.findOne({ user: req.user.id }).populate("transactions");
    res.json({ success: true, transactions: wallet.transactions });
    } catch (err) {
    res.status(500).json({ message: err.message });
  }
};