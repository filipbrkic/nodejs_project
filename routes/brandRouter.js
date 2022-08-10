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

    .put((req, res,next) => {
        res.statusCode = 404;
        res.end("Please specify ID to update it");
    })

    .delete ((req, res, next) => {
        res.statusCode = 404;
        res.end("Please specify ID to delete it");
    })


brandRouter.route("/:id")
    .get((req,res,next) => {
        VehicleBrands.findById(req.params.id)
            .then((vehicle) => {
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.json(vehicle);
            })
    })

    .post((req,res,next) => {
        res.statusCode = 405;
        res.end("POST operation is not supported on " + req.params.id)
    })

    .put((req,res,next) => {
        VehicleBrands.findByIdAndUpdate(req.params.id, { $set: req.body }, {new: true})
            .then((vehicle) => {
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.json(vehicle);
            }, (err) => next(err))
            .catch((err) => next(err));
    })

    .delete((req,res,next) => {
        VehicleBrands.findByIdAndDelete(req.params.id)
            .then((vehicle) => {
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.end(req.params.id + " has been deleted!");
            }, (err) => next(err))
            .catch((err) => next(err));
    })

module.exports = brandRouter;