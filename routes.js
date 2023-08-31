const express = require("express");
const axios = require("axios");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const imageBinary = req.body;
    const predictionKey = process.env.PREDICTION_KEY;
    const contentType = process.env.CONTENT_TYPE;

    const headers = {
      "Prediction-Key": predictionKey,
      "Content-Type": contentType,
    };

    const apiAddress = process.env.API_ADDRESS;

    const response = await axios.post(apiAddress, imageBinary, { headers });

    const highProbabilityPredictions = [];
    for (const prediction of response.data.predictions) {
      if (prediction.probability >= 0.6) {
        highProbabilityPredictions.push(prediction);
      }
    }

    res.json(highProbabilityPredictions);
  } catch (error) {
    console.error("Error making the prediction:", error);
    res
      .status(500)
      .json({ error: "An error occurred while making the prediction." });
  }
});

module.exports = router;
