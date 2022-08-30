const request = require("supertest");
const app = require("../app");
const bson = require('bson');
const mongoose = require("mongoose");
var config = require("../config");

const sessionId = "session-id=s%3AmUsm1bk9_xiu-yO7yWb7G5pi0r0mrcIx.Fyw5%2BGNl3ISD41n3BW1ZHl0NO3giYRoa9U07banvsgY";

const url = config.mongoUrl;
const id = new bson.ObjectId();

describe("testing owners", () => {
    beforeAll(() => {
        mongoose.connect(url);
    });
    afterAll((done) => {
        mongoose.disconnect(done);
    });
    
    test("GET operation", () => {
        return request(app)
            .get("/owners")
            .set("Cookie", sessionId)
            .expect(200);
    });
    test("POST operation", () => {
        return request(app)
            .post("/owners")
            .set("Cookie", sessionId)
            .send({
                firstName: "owner firstName test",
                lastName: "owner lastName test"
            })
            .expect(201);
    });
    test("PUT operation", () => {
        return request(app)
            .put("/owners")
            .set("Cookie", sessionId)
            .expect(405);
    });
    test("DELETE operation", () => {
        return request(app)
            .delete("/owners")
            .set("Cookie", sessionId)
            .expect(405);
    });

    test("GET operation with ID", () => {
        return request(app)
            .get(`/owners/${id}`)
            .set("Cookie", sessionId)
            .expect(200);
    });
    test("POST operation with ID", () => {
        return request(app)
            .post(`/owners/${id}`)
            .set("Cookie", sessionId)
            .send({
                firstName: "jest",
                lastName: "from test",
            })
            .expect(405);
    });
    test("PUT operation with ID", () => {
        return request(app)
            .put(`/owners/${id}`)
            .set("Cookie", sessionId)
            .expect(200);
    });
    test("DELETE operation with ID", () => {
        return request(app)
            .delete(`/owners/${id}`)
            .set("Cookie", sessionId)
            .expect(200);
    });
});