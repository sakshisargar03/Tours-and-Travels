const RecentSearch = require("../models/recentSearch.model");

exports.saveSearch = async (req, res) => {
  try {
    const data = await RecentSearch.create(req.body);
    res.json({ success: true, data });
  } catch (err) {
    res.json({ message: err.message });
  }
};

exports.getRecentSearches = async (req, res) => {
  try {
    const data = await RecentSearch.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json({ success: true, data });
  } catch (err) {
    res.json({ message: err.message });
  }
};
exports.deleteRecentSearch = async (req, res) => {
  try {
    const data = await RecentSearch.findByIdAndDelete(req.params.id);   
    if (!data) {
        return res.status(404).json({ success: false, message: "Recent search not found" });
    }
    res.json({ success: true, data });
  }
    catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.getSearchDetails = async (req, res) => {
  try {
    const data = await RecentSearch.findById(req.params.id);    
    if (!data) {
        return res.status(404).json({ success: false, message: "Recent search not found" });
    }
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getSearchByRoute = async (req, res) => {
  try {
    const { origin, destination } = req.query;
    const data = await RecentSearch.find({ origin, destination });
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.getSearchByRoute = async (req, res) => {
  try {
    const { origin, destination } = req.query;
    const data = await RecentSearch.find({ origin, destination });
    res.json({ success: true, data });
  }
    catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.getSearchByRoute = async (req, res) => {
    try {
    const { origin, destination } = req.query;
    const data = await RecentSearch.find({ origin, destination });
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.getSearchByRoute = async (req, res) => {
  try {
    const { origin, destination } = req.query;
    const data = await RecentSearch.find({ origin
, destination });
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.getSearchByRoute = async (req, res) => {
  try {
    const { origin, destination } = req.query;
    const data = await RecentSearch.find({ origin, destination });
    res.json({ success: true, data });
  }
    catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.getSearchByRoute = async (req, res) => {
  try {
    const { origin, destination } = req.query;
    const data = await RecentSearch.find({ origin
, destination });
    res.json({ success: true, data });
  }
    catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.getSearchByRoute = async (req, res) => {
  try {
    const { origin, destination } = req.query;
    const data = await RecentSearch.find({ origin
, destination });
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.getSearchByRoute = async (req, res) => {
  try {
    const { origin, destination } = req.query;
    const data = await RecentSearch.find({ origin, destination });
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.getSearchByRoute = async (req, res) => {
  try {
    const { origin, destination } = req.query;
    const data = await RecentSearch.find({ origin
, destination });
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.getSearchByRoute = async (req, res) => {
  try {
    const { origin, destination } = req.query;
    const data = await RecentSearch.find({ origin, destination });
    res.json({ success: true, data });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
