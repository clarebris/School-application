const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../Models/User.models");

const router = express.Router();

const signToken = (userId) => {
  if (!process.env.JWT_SECRET) {
    throw new Error(" JWT_SECRET is missing in .env");
  }

  console.log(
    "🔑 Using JWT_SECRET:",
    process.env.JWT_SECRET.slice(0, 12) + "..."
  );

  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

router.post("/register", async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = new User({ email, password: hashedPassword });
    await user.save();

    const token = signToken(user._id);

    console.log(
      "Register success -> User:",
      user._id,
      "Token:",
      token.slice(0, 20) + "..."
    );

    res.json({ token });
  } catch (err) {
    console.error(" Register error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = signToken(user._id);

    console.log(
      "Login success -> User:",
      user._id,
      "Token:",
      token.slice(0, 20) + "..."
    );

    res.json({ token });
  } catch (err) {
    console.error("Login error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
