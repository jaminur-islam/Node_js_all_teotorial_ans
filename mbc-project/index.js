const express = require("express");
const { app, port } = require("./app");
const router = require("./routes/userRoutes");
app.use(express.urlencoded({ extended: true }));

app.use(router);
app.listen(port, () => {
  console.log(`server running port http://localhost:${port}`);
});
