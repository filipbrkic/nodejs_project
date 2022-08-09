const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const VehicleBrands = require("../models/brands");

const brandRouter = express.Router();
brandRouter.use(bodyParser.json());

brandRouter.route("/")
    .get((req,res,next) => {
        VehicleBrands.find(req.query)
            .then((vehicle) => {
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.json(vehicle);
            }, (err) => next(err))
            .catch((err) => next(err));
    })

    .post((req,res,next) => {
        VehicleBrands.create(req.body)
            .then((vehicle) => {
                res.statusCode = 201;
                res.setHeader("Content-Type", "application/json");
                res.json(vehicle);
            }, (err) => next(err))
            .catch((err) => next(err));
    })

module.exports = brandRouter;