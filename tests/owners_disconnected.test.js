const request = require("supertest");
const app = require("../app");
const bson = require('bson');
const mongoose = require("mongoose");

const sessionId = "session-id=s%3AmUsm1bk9_xiu-yO7yWb7G5pi0r0mrcIx.Fyw5%2BGNl3ISD41n3BW1ZHl0NO3giYRoa9U07banvsgY";

const id = new bson.ObjectId();

describe("testing disconnected owners", () => {
    beforeAll(() => {
        mongoose.disconnect();
    });
    
    test("GET operation", () => {
        return request(app)
            .get("/owners")
            .set("Cookie", sessionId)
            .expect(500);
    });
    test("POST operation", () => {
        return request(app)
            .post("/owners")
            .set("Cookie", sessionId)
            .send({
                firstName: "owner firstName test",
                lastName: "owner lastName test",
            })
            .expect(500);
    });
    test("PUT operation", () => {
        return request(app)
            .put("/owners")
            .set("Cookie", sessionId)
            .expect(500);
    });
    test("DELETE operation", () => {
        return request(app)
            .delete("/owners")
            .set("Cookie", sessionId)
            .expect(500);
    });

    test("GET operation with ID", () => {
        return request(app)
            .get(`/owners/${id}`)
            .set("Cookie", sessionId)
            .expect(500);
    });
    test("POST operation with ID", () => {
        return request(app)
            .post(`/owners/${id}`)
            .set("Cookie", sessionId)
            .send({
                firstName: "owner firstName test",
                lastName: "owner lastName test",
            })
            .expect(500);
    });
    test("PUT operation with ID", () => {
        return request(app)
            .put(`/owners/${id}`)
            .set("Cookie", sessionId)
            .expect(500);
    });
    test("DELETE operation with ID", () => {
        return request(app)
            .delete(`/owners/${id}`)
            .set("Cookie", sessionId)
            .expect(500);
    });
});

describe("testing owners - errors", () => {
    test("GET operation with error", () => {
        return request(app)
            .get("/owner")
            .set("Cookie", sessionId)
            .expect(500);
    });
    test("POST operation with error", () => {
        return request(app)
            .post("/owners")
            .set("Cookie", sessionId)
            .send({
                firsName: "owner firstName test",
                lastName: "owner lastName test"
            })
            .expect(500);
    });
});