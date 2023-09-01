const http = require("http");
const app = require("./app");
const dotenv = require("dotenv");

dotenv.config();

const port = process.env.PORT || 3001;

app.set("port", port);

const server = http.createServer(app);

server.listen(port);
server.on("listening", () => {
  console.log(`Server is running on port ${port}, yeah boy!`);
});
