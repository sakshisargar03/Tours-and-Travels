import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  const hash = await bcrypt.hash(password, 10);

  const user = await User.create({ name, email, password: hash });
  res.json({ msg: "Registered", user });
};

export const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  res.json(user);
};
