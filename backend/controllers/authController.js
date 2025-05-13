const User = require("../models/User");

exports.registerUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.json({ message: "User registered", user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
