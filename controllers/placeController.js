const Place = require("../models/Place");

exports.addPlace = async (req, res) => {
    const place = new Place(req.body);
    await place.save();
    res.json({ message: "Place added", place });
};
