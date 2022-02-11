const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const router = require("../queryPerameter/router/queryRouter");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(router);

app.get("/registration", (req, res) => {
  res.sendFile(__dirname + "/form.html");
});

app.post("/registration", (req, res) => {
  console.log(req.body);
  res.send(`<h1> Login Success Full Name = ${req.body.fullName} </h1>`);
});

module.exports = { app, port };
