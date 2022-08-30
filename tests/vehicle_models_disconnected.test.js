const request = require("supertest");
const app = require("../app");
const bson = require('bson');
const mongoose = require("mongoose");

const sessionId = "session-id=s%3AmUsm1bk9_xiu-yO7yWb7G5pi0r0mrcIx.Fyw5%2BGNl3ISD41n3BW1ZHl0NO3giYRoa9U07banvsgY";

const id = new bson.ObjectId();

describe("testing disconnected vehicle models", () => {
    beforeAll(() => {
        mongoose.disconnect();
    });
    
    test("GET operation", () => {
        return request(app)
            .get("/models")
            .set("Cookie", sessionId)
            .expect(500);
    });
    test("POST operation", () => {
        return request(app)
            .post("/models")
            .set("Cookie", sessionId)
            .send({
                name: "brand test name",
                description: "brand test description",
            })
            .expect(500)
    });

    test("GET operation with ID", () => {
        return request(app)
            .get(`/models/${id}`)
            .set("Cookie", sessionId)
            .expect(500);
    });
    test("PUT operation with ID", () => {
        return request(app)
            .put(`/models/${id}`)
            .set("Cookie", sessionId)
            .expect(500);
    });
    test("DELETE operation with ID", () => {
        return request(app)
            .delete(`/models/${id}`)
            .set("Cookie", sessionId)
            .expect(500);
    });
});