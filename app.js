const express = require("express");
const cors = require("cors");
const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.raw({ type: "image/jpeg", limit: "10mb" }));
app.use(cors());

// test data for testing Azure deployment
const myTestData = [
  {
    Name: "Luis",
    "Fab-Food": "BBQ",
  },
  {
    Name: "Kelsie",
    "Fab-Food": "Marmite",
  },
];

// test get API for testing Azure.
app.get("/", (req, res) => {
  res.json(myTestData);
});

app.post("/api", async (req, res) => {
  try {
    const imageBinary = req.body;
    const predictionKey = process.env.PREDICTION_KEY;
    const contentType = process.env.CONTENT_TYPE;
    const apiAddress = process.env.API_ADDRESS;

    const headers = {
      "Prediction-Key": predictionKey,
      "Content-Type": contentType,
    };

    const response = await axios.post(apiAddress, imageBinary, { headers });

    // filter to only capture high probability JSON data received only
    const highProbabilityPredictions = response.data.predictions.filter(
      (prediction) => prediction.probability >= 0.6
    );

    res.json(highProbabilityPredictions);
  } catch (error) {
    console.error("Error making the prediction:", error);
    res
      .status(500)
      .json({ error: "An error occurred while making the prediction." });
  }
});

module.exports = app;
