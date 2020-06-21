const express = require("express");
const lineSchema = require("../models/footpathasset");
const Footpath = require("../models/footpathasset");
const footpathRouter = express.Router();
footpathRouter.use(function (req, res, next) {
  console.log("Time:", Date.now());
  console.log(req.url);
  console.log("Request Type:", req.method);
  next();
});

footpathRouter.post("/add", async (req, res, next) => {
  try {
    const {
      _id,
      assetname,
      geometry,
      dateofsurvey,
      image,
      surveyorname,
      pothole,
      cracks,
      erosion,
      slipperySurface,
      fallenBranches,
      QualityOfCurbing,
      degreeOfCleanliness,
      conditionofDrains,
      pedestrians_Sainage_Condition,
      generalCondition,
    } = req.body;
    console.log(_id);
    const newdata = {
      assetname: assetname,
      geometry: geometry,
      dateofsurvey: dateofsurvey,
      surveyorname: surveyorname,
      pothole: pothole,
      image: image,
      cracks: cracks,
      erosion: erosion,
      slipperySurface: slipperySurface,
      fallenBranches: fallenBranches,
      QualityOfCurbing: QualityOfCurbing,
      degreeOfCleanliness: degreeOfCleanliness,
      conditionofDrains: conditionofDrains,
      pedestrians_Sainage_Condition: pedestrians_Sainage_Condition,
      generalCondition: generalCondition,
    };

    Footpath.updateOne({ _id }, newdata)
      .then((data) => {
        res.send(data);
      })
      .catch((error) => {
        req.statusCode = 405;
        next(error);
      });
    // Footpath.create(newdata)
    //   .then((data) => {
    //     res.send(data);
    //   })
    //   .catch((error) => {
    //     req.statusCode = 405;
    //     next(error);
    //   });
  } catch (error) {
    req.statusCode = 405;
    next(error);
  }
});

footpathRouter.get("/", (req, res, next) => {
  try {
    Footpath.find({}, (err, data) => {
      if (err) {
        return next(err);
      }
      res.send(data);
    });
  } catch (err) {
    next(err);
  }
});
module.exports = footpathRouter;
