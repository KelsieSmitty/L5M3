const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = 4000;

app.use(express.raw({ type: "image/jpeg", limit: "10mb" }));
app.use(cors());

module.exports = {
  app,
  port,
};
