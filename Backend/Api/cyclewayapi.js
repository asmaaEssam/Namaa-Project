const express = require("express");
const cyclewayRouter = express.Router();
const Cycleway = require("../models/cyclewayModel");

cyclewayRouter.post("/", async (req, res, next) => {
  try {
    const {
      body: { cyclewayName, geometry },
    } = req;

    const newCycleway = new Cycleway({ cyclewayName, geometry });
    const createdCycleway = await newCycleway.save();
    //push asset to project
    return res.status(201).send(createdCycleway.toJSON());
  } catch (err) {
    next(err);
  }
});
module.exports = cyclewayRouter;
