const { app, port } = require("./app");

app.use((req, res) => {
  res.send("server running");
});

app.listen(port, () => {
  console.log(`server running port http://localhost:${port}`);
});
