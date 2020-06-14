
const express= require("express")
const User = require("../models/usermodel");

const Footpath= require('../models/footpathasset')
const footpathRouter = express.Router();
footpathRouter.use(function (req, res, next) {
  console.log("Time:", Date.now());
  console.log(req.url);
  console.log("Request Type:", req.method);
  next();
});

footpathRouter.post('/add', async (req,res,next)=>{
    try {

        const {assetname,location,dateofsurvey,surveyorname,pothole,cracks,erosion,slipperySurface,fallenBranches,QualityOfCurbing
        ,degreeOfCleanliness,conditionofDrains,pedestrians_Sainage_Condition,generalCondition  } = req.body;
        const newdata = {
            assetname:assetname ,
            location : location,
            dateofsurvey : dateofsurvey,
            surveyorname:surveyorname,
          pothole:pothole,
          cracks:cracks,
          erosion:erosion,
          slipperySurface:slipperySurface,
          fallenBranches:fallenBranches,
          QualityOfCurbing:QualityOfCurbing,
          degreeOfCleanliness:degreeOfCleanliness,
          conditionofDrains:conditionofDrains,
          pedestrians_Sainage_Condition:pedestrians_Sainage_Condition,
          generalCondition:generalCondition

        }
       
        Footpath.create(newdata)
          .then((data) => {
            res.send(data);
          })
          .catch((error) => {
            req.statusCode = 405;
            next(error);
          });
      } catch (error) {
        req.statusCode = 405;
        next(error);
      }
    
})
module.exports = footpathRouter;