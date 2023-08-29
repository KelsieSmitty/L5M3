const request = require("supertest");
const express = require("express");
const fs = require("fs");
const app = express();

// Import the routes module and server setup module
const routes = require("../routes");
const { app: serverApp } = require("../server-setup");

// Mount the routes on the app
app.use("/", routes);

describe("POST /api", () => {
  it("should respond with high probability predictions", async () => {
    const imageData = fs.readFileSync("./images/testcar1.jpg");

    // Make a request to your Express app using supertest
    const response = await request(serverApp).post("/api").send(imageData);

    expect(response.statusCode).toBe(200);
    // Add more assertions to check the response data as needed
  });
});
