import Package from "../models/package.js";

export const getPackages = async (req, res) => {
  const data = await Package.find().populate("comboEvent");
  res.json(data);
};

export const addPackage = async (req, res) => {
  const data = await Package.create(req.body);
  res.json({ msg: "Package Added", data });
};
