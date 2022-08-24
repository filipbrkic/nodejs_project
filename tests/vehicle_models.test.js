const request = require("supertest");
const app = require("../app");
const bson = require('bson');
const mongoose = require("mongoose");
var config = require("../config");
const url = config.mongoUrl;

beforeEach(() => {
    mongoose.connect(url);
});
afterEach((done) => {
    mongoose.disconnect(done);
});
const id = new bson.ObjectId();

describe("testing vehicle models", () => {
    test("GET operation", () => {
        return request(app)
        .get("/models")
        .expect(200);
    });
    test("POST operation", () => {
        return request(app)
        .post("/models")
        .send({
            name: "model test name",
            description: "model test description",
        })
        .expect(201)
    });
    test("PUT operation", () => {
        return request(app)
        .put("/models")
        .expect(405);
    });
    test("DELETE operation", () => {
        return request(app)
        .delete("/models")
        .expect(405);
    });

    test("GET operation with ID", () => {
        return request(app)
        .get(`/models/${id}`)
        .expect(200);
    });
    test("POST operation with ID", () => {
        return request(app)
        .post(`/models/${id}`)
        .send({
            name: "model test name",
            description: "model test description",
        })
        .expect(405);
    });
    test("PUT operation with ID", () => {
        return request(app)
        .put(`/models/${id}`)
        .expect(200);
    });
    test("DELETE operation with ID", () => {
        return request(app)
        .delete(`/models/${id}`)
        .expect(200);
    });
});