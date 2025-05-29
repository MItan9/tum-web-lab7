const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const db = require("../database");
const { generateToken } = require("../utils/jwt");

router.post("/token", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "Username and password required" });
  }

  db.get("SELECT * FROM users WHERE username = ?", [username], (err, user) => {
    if (err) return res.status(500).json({ error: "Database error" });
    if (!user) return res.status(401).json({ error: "Invalid username or password" });

    const match = bcrypt.compareSync(password, user.password);
    if (!match) return res.status(401).json({ error: "Invalid username or password" });

    const token = generateToken({
      id: user.id,
      username: user.username,
      role: user.role,
      permissions: JSON.parse(user.permissions || "[]"),

    });

    res.json({ token });
  });
});

module.exports = router;
