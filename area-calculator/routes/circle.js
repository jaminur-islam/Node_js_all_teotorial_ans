const express = require("express");
const router = express.Router();

router.get("/circleCalculator", (req, res) => {
  res.sendFile(__dirname + "/views/circle.html");
});

router.post("/circleCalculator", (req, res) => {
  const { radius } = req.body;
  const area = Math.PI * radius * radius;
  res.send(`<h1> Area radius ${area} </h1> `);
});

module.exports = router;
