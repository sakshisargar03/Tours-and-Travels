import Event from "../models/Event.js";

export const getEvents = async (req, res) => {
  const data = await Event.find();
  res.json(data);
};

export const addEvent = async (req, res) => {
  const data = await Event.create(req.body);
  res.json({ msg: "Event Added", data });
};
