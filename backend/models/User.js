const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String, // In real app: hash passwords!
    role: { type: String, default: "student" },
});

module.exports = mongoose.model("User", userSchema);
