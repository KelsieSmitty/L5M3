const request = require("supertest");
const { app } = require("../server-setup");
const apiRequest = request(app);
const fs = require("fs");

describe("API Tests", () => {
  it("should respond with 200 OK when POSTing to /api", async () => {
    const imageBuffer = fs.readFileSync("./images/testcar1.jpg");

    const response = await apiRequest
      .post("/api/upload")
      .set("Content-Type", "image/jpg")
      .attach(imageBuffer);

    expect(response.status).toEqual(200);
  });
});
