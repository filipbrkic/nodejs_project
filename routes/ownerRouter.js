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

    .put((req, res,next) => {
        res.statusCode = 405;
        res.end("Please specify ID to update it");
    })

    .delete ((req, res, next) => {
        res.statusCode = 405;
        res.end("Please specify ID to delete it");
    })

ownerRouter.route("/:id")
    .get((req,res,next) => {
        Owners.findById(req.params.id)
            .then((owner) => {
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.json(owner);
            })
    })

    .post((req,res,next) => {
        res.statusCode = 405;
        res.end("POST operation is not supported on " + req.params.id)
    })

    .put((req,res,next) => {
        Owners.findByIdAndUpdate(req.params.id, { $set: req.body }, {new: true})
            .then((owner) => {
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.json(owner);
            }, (err) => next(err))
            .catch((err) => next(err));
    })

    .delete((req,res,next) => {
        Owners.findByIdAndDelete(req.params.id)
            .then((owner) => {
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                res.json(owner);
            }, (err) => next(err))
            .catch((err) => next(err));
    })

module.exports = ownerRouter;