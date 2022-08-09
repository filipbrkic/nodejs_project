const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const VehicleModels = require("../models/models");

const modelRouter = express.Router();
modelRouter.use(bodyParser.json());

modelRouter.route("/")
    .get((req,res,next) => {
        VehicleModels.find(req.query)
            .then((vehicle) => {
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.json(vehicle);
            }, (err) => next(err))
            .catch((err) => next(err));
    })

    .post((req,res,next) => {
        VehicleModels.create(req.body)
            .then((vehicle) => {
                res.statusCode = 201;
                res.setHeader("Content-Type", "application/json");
                res.json(vehicle);
            }, (err) => next(err))
            .catch((err) => next(err));
    })

module.exports = modelRouter;