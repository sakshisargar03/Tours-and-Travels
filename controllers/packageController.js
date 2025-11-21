const Package = require("../models/package");

exports.getAllPackages = async (req, res) => {
    const packages = await Package.find().populate("places");
    res.render("packages", { packages });
};

exports.getPackageDetails = async (req, res) => {
    const pkg = await Package.findById(req.params.id).populate("places");
    res.render("package-details", { pkg, apiKey: process.env.MAP_KEY });
};
