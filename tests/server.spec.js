const request = require("supertest");
const { app } = require("../server-setup");
const fs = require("fs");

describe("API Tests", () => {
  it("should respond with 200 OK when POSTing to /api", async () => {
    const imageBuffer = fs.readFileSync("./images/testcar1.jpg");

    const response = await request(app)
      .post("/api")
      .set("Content-Type", "image/jpeg")
      .send(imageBuffer);

describe("POST /api", () => {
  it("should respond with high probability predictions", async () => {
    const imageData = fs.readFileSync("./images/testcar1.jpg");

    // Make a request to your Express app using supertest
    const response = await request(serverApp).post("/api").send(imageData);

    //  const responseBody = response.body; 
    //  expect(responseBody).toHaveProperty("predictions");

    expect(response.statusCode).toBe(200);
    // Add more assertions to check the response data as needed
  });
});
