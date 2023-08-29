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

    expect(response.status).toEqual(200);
  });
});
