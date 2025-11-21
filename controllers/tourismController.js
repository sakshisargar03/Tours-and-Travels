import Place from "../models/Place.js";

export const getPlaces = async (req, res) => {
  const data = await Place.find();
  res.json(data);
};

export const addPlace = async (req, res) => {
  const data = await Place.create(req.body);
  res.json({ msg: "Place Added", data });
};
