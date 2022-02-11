const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const users_router = require("./routes/users.route");

app.use("/api/user/", users_router);

app.use("/register", (req, res) => {
  /*  res.statusCode = 404 ;
  res.sendFile(__dirname + "/views/index.html"); */
  /* 
  res.status(202).json({
    name: "sagor",
    statusCode: 200,
  }); */

  res.redirect("/login");
  // res.send("<h1>hi im am register router</h1>");
});
app.use("/login", (req, res) => {
  res.sendFile(__dirname + "/views/register.html");
  /* // res.cookie('name' , 'sagor')
  res.clearCookie("name");
  res.end(); */
  res.append("name", "sagor");
  res.append("statusCode", 200);
});

app.get("/", (req, res) => {
  res.send("<h1> this is main home router </h1>");
});

app.use((req, res) => {
  res.send("<h1> Not Found 404 ! </h1>");
});

module.exports = { app, port };
