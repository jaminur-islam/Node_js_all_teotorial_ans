const express = require("express");
const { route } = require("express/lib/router");
const { userControl } = require("../controllers/user");
const router = express.Router();

router.get("/", userControl);

module.exports = router;
