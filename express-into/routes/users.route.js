const express = require("express");
const router = express.Router();

router.get("/home", (req, res) => {
  res.send("<h1> this is home router </h1>");
});
router.get("/contact", (req, res) => {
  res.send("<h1> this is contact router </h1>");
});
router.get("/about", (req, res) => {
  res.send("<h1> this is about router </h1>");
});

module.exports = router;
