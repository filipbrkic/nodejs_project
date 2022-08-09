const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Owners = require("../models/owners");

const ownerRouter = express.Router();
ownerRouter.use(bodyParser.json());

ownerRouter.route("/")
    .get((req,res,next) => {
        Owners.find(req.query)
            .then((owner) => {
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.json(owner);
            }, (err) => next(err))
            .catch((err) => next(err));
    })

    .post((req,res,next) => {
        Owners.create(req.body)
            .then((owner) => {
                res.statusCode = 201;
                res.setHeader("Content-Type", "application/json");
                res.json(owner);
            }, (err) => next(err))
            .catch((err) => next(err));
    })

module.exports = ownerRouter;