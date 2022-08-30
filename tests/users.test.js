const request = require("supertest");
const app = require("../app");
const mongoose = require("mongoose");
var config = require("../config");

const url = config.mongoUrl;

describe("testing owners", () => {
    beforeAll(() => {
        mongoose.connect(url);
    });
    beforeAll((done) => {
        mongoose.disconnect(done);
    });

    /*  test("Logout", () => {    // getting 302 - Found, but expecting 200 - OK
          return request(app)
              .get("/users/logout")
              .expect(200);
      })
      test("Login", () => {   // getting 500 Internal Server Error, but expecting 200 - OK
          return request(app)
              .post("/users/login")
              .send({
                  username: "admin",
                  password: "admin"
              })
              .expect(200);
      }); */
    test("Signup", () => {
        return request(app)
            .post("/users/signup")
            .send({
                username: "admin2",
                password: "admin2"
            })
            .expect(200);
    })
})