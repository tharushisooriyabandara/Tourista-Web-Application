const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../app")

require("dotenv").config();

/* Connecting to the database before each test. */
beforeEach(async () => {
    await mongoose.connect(process.env.DB_URL);
});

/* Closing database connection after each test. */
afterEach(async () => {
    await mongoose.connection.close();
});


describe("GET /api/user/all-quizes", () => {
    it("should return all quizes", async () => {
        const res = await request(app).get("/api/user/all-quizes");
        expect(res.statusCode).toBe(200);
        expect(res.body.length).toBeGreaterThan(0);
    });
});