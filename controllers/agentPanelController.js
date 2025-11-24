const Agent = require("../models/agent.model");

exports.registerAgent = async (req, res) => {
  try {
    const agent = await Agent.create(req.body);
    res.json({ success: true, agent });
  } catch (err) {
    res.json({ message: err.message });
  }
};

exports.getAgentStats = async (req, res) => {
  try {
    const stats = {
      totalBookings: 124,
      monthlyCommission: 5000
    };
    res.json({ success: true, stats });
  } catch (err) {
    res.json({ message: err.message });
  }
};
exports.getAvailableCommissions = async (req, res) => {
  try {
    const commissions = {
        totalCommission: 15000,
        withdrawnAmount: 5000,
        availableAmount: 10000
    };
    res.json({ success: true, commissions });
  }
    catch (err) {
    res.json({ message: err.message });
  }
};
exports.withdrawCommission = async (req, res) => {
  try {
    const { amount } = req.body;    
    res.json({ success: true, message: `Withdrawal of ${amount} requested.` });
  } catch (err) {
    res.json({ message: err.message });
  }
};
exports.getAgentProfile = async (req, res) => {
  try {
    const agent = await Agent.findById(req.params.id);
    if (!agent) {
      return res.status(404).json({ success: false, message: "Agent not found" });
    }
    res.json({ success: true, agent });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};