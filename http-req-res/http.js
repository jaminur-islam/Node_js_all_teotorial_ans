/* Http Status code 
1. informational response (100-199)
2. Successful REsponse (200-299)
3. Redirects (300 - 399)
4. Clients ERrors (400 - 499)
5. Server Errors (500 - 599)
*/

const http = require("http");
const port = 5000;
const hostname = "127.0.0.1";

const myserver = http.createServer((req, res) => {
  res.writeHead(202, { "content-type": "text/plain" });
  res.write(`<h1> this is my name </h1>`);
  res.end();
});

myserver.listen(port, hostname, () => {
  console.log(`server running port http://${hostname}:${port}`);
});
