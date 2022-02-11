const http = require("http");
const port = 5000;
const hostName = "127.0.0.1";

const myServer = http.createServer((req, res) => {
  res.end("this is my first server its running port 5000");
});
myServer.listen(port, hostName, () => {
  console.log(`server running on http://${hostName}:${port} `);
});
