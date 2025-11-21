import Hotel from "../models/Hotel.js";

export const getHotels = async (req, res) => {
  const data = await Hotel.find();
  res.json(data);
};

export const addHotel = async (req, res) => {
  const data = await Hotel.create(req.body);
  res.json(data);
};
