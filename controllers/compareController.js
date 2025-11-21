import Route from "../models/Route.js";

export const compareRoute = async (req, res) => {
  const { from, to } = req.body;

  const data = await Route.findOne({ from, to });

  res.json(data);
};
