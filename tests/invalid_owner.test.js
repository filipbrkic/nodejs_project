const request = require("supertest");
const app = require("../app");
const mongoose = require("mongoose");
var config = require("../config");

const url = config.mongoUrl;

const sessionId = "session-id=s%3AmUsm1bk9_xiu-yO7yWb7G5pi0r0mrcIx.Fyw5%2BGNl3ISD41n3BW1ZHl0NO3giYRoa9U07banvsgY";

describe("testing owners - errors", () => {
    beforeAll(() => {
        mongoose.connect(url);
    });
    afterAll((done) => {
        mongoose.disconnect(done);
    });
    
    test("GET operation", () => {
        return request(app)
            .get("/owner")
            .set("Cookie", sessionId)
            .expect(404);
    });
    test("POST operation", () => {
        return request(app)
            .post("/owners")
            .set("Cookie", sessionId)
            .send({
                fName: "owner firstName test",
                lastName: "owner lastName test"
            })
            .expect(500);
    });
});