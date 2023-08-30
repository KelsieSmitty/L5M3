const { app, port } = require("./server-setup");
const routes = require("./routes");

app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}, yeah boy!`);
});
