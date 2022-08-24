const request = require("supertest");
const app = require("../app");
const bson = require('bson');
const mongoose = require("mongoose");

beforeEach(() => {
    mongoose.disconnect();
});

const id = new bson.ObjectId();

describe("testing owners", () => {
  /* test("GET operation", () => {
        return request(app)
        .get("/owners")
        .expect(500);
    }); */
   /* test("POST operation", () => {
        return request(app)
        .post("/owners")
        .send({
            firstName: "owner firstName test",
            lastName: "owner lastName test",
        })
        .expect(500);
    }); */
    test("PUT operation", () => {
        return request(app)
        .put("/owners")
        .expect(405);
    });
    test("DELETE operation", () => {
        return request(app)
        .delete("/owners")
        .expect(405);
    });

   /* test("GET operation with ID", () => {
        return request(app)
        .get(`/owners/${id}`)
        .expect(500);
    }); */
    test("POST operation with ID", () => {
        return request(app)
        .post(`/owners/${id}`)
        .send({
            firstName: "owner firstName test",
            lastName: "owner lastName test",
        })
        .expect(405);
    });
    test("PUT operation with ID", () => {
        return request(app)
        .put(`/owners/${id}`)
        .expect(500);
    });
    test("DELETE operation with ID", () => {
        return request(app)
        .delete(`/owners/${id}`)
        .expect(500);
    });
});

describe("testing owners - errors", () => {
    test("GET operation with error", () => {
        return request(app)
        .get("/owner")
        .expect(404);
    });
    test("POST operation with error", () => {
        return request(app)
        .post("/owners")
        .send({
            firsName: "owner firstName test",
            lastName: "owner lastName test",
        })
        .expect(500);
    });
});