const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const circleRouter = require("./routes/circle");
const router21 = require("./routes/traingle");

// == middle Wear ==//
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(circleRouter);
app.use(router21);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
  console.log(__dirname + "/views/index.html");
});

module.exports = { app, port };
