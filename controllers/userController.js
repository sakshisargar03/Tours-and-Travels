const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    await User.create(req.body);
    res.redirect("/");
};

exports.login = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.send("User Not Found");

    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) return res.send("Wrong Password");

    req.session.user = user;
    res.redirect("/");
};
