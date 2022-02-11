const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const id = req.query.id;
  const name = req.query.name;
  const clas = req.query.class;
  res.send({ id, name, clas });
});

router.get("/us", (req, res) => {
  const id = req.header("authorization");
  const name = req.header("name");

  res.send({ id, name });
});

router.get("/user/:id/user/:name", (req, res) => {
  const { id, name } = req.params;
  res.send(`<h1>Id =${id} and name = ${name} </h1> `);
});

router.get("/home", (req, res) => {
  res.send("this is home router ");
});

module.exports = router;
