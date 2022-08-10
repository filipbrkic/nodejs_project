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

    .put((req, res,next) => {
        res.statusCode = 404;
        res.end("Please specify ID to update it");
    })

    .delete ((req, res, next) => {
        res.statusCode = 404;
        res.end("Please specify ID to delete it");
    })


modelRouter.route("/:id")
    .get((req,res,next) => {
        VehicleModels.findById(req.params.id)
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
        VehicleModels.findByIdAndUpdate(req.params.id, { $set: req.body }, {new: true})
            .then((vehicle) => {
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.json(vehicle);
            }, (err) => next(err))
            .catch((err) => next(err));
    })

    .delete((req,res,next) => {
        VehicleModels.findByIdAndDelete(req.params.id)
            .then((vehicle) => {
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.end(req.params.id + " has been deleted!");
            }, (err) => next(err))
            .catch((err) => next(err));
    })

module.exports = modelRouter;