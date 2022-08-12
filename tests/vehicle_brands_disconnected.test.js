const request = require("supertest");
const app = require("../app");
const bson = require('bson');

const mongoose = require("mongoose");

mongoose.disconnect();

const id = new bson.ObjectId();

describe("testing vehicle brands", () => {
   /* test("GET operation", () => {
        return request(app)
        .get("/brands")
        .expect(200);
    }); */
    test("POST operation", () => {
        return request(app)
        .post("/brands")
        .send({
            name: "brand test name",
            description: "brand test description",
        })
        .expect(500)
    });

   /* test("GET operation with ID", () => {
        return request(app)
        .get(`/brands/${id}`)
        .expect(200);
    }); */
    test("PUT operation with ID", () => {
        return request(app)
        .put(`/brands/${id}`)
        .expect(500);
    });
    test("DELETE operation with ID", () => {
        return request(app)
        .delete(`/brands/${id}`)
        .expect(500);
    });
});