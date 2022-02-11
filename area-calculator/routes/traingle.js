const express = require("express");
const router = express.Router();

router.get("/triangleCalculator", (req, res) => {
  res.sendFile(__dirname + "/views/triangle.html");
});

router.post("/triangleCalculator", (req, res) => {
  const { height, base } = req.body;
  const triangle = 0.5 * height * base;
  res.send(` <h1> Area of triangle is ${triangle} </h1>`);
});

module.exports = router;
