const mongoose = require("mongoose");
const pointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["Point"],
   required: true
  },
  coordinates: {
    type: [Number],
    required: true
  },
});

const Schema = new mongoose.Schema({
  assetname: {
    type: String,   //required: [true],
  },
  location: {
    type: pointSchema,
    //required: [true],
  },
  projectname: [
    { type: mongoose.Schema.ObjectId, ref: "Project" },
    { required: [true, "Surveyor's name is required"] },
  ],
surveyorname:{
type:String
},
  dateofsurvey: {
    type: Date,
   // required: [true, "Date of aurvey is required"],
  },
  pothole: {
    type: Number,
   // required: [true, "Degree of pothole is required"],
  },
  cracks: {
    type: Number,
    //required: [true, "Degree of cracks is required"],
  },
  erosion: {
    type: Number,
   // required: [true, "Degree of erosion is required"],
  },
  slipperySurface: {
    type: Number,
   // required: [true, "Degree of slippery surface is required"],
  },

  fallenBranches: {
    type: Number,
    //required: [true, "Degree of fallen branches is required"],
  },
  QualityOfCurbing: {
    type: Number,
   // required: [true, "Quality degree of curbing is required"],
  },
  degreeOfCleanliness: {
    type: Number,
    ////required: [true, "Degree of cleanliness is required"],
  },
  conditionofDrains: {
    type: Number,
   // required: [true, "Drains' condition is required"],
  },
  pedestrians_Sainage_Condition: {
    type: Number,
   // required: [true, "Quality degree of pedestrians sinage is required"],
  },
  generalCondition: {
    type: Number,
    //required: [true, "General condition is required"],
  },
});
const FootPath = mongoose.model("FootPath", Schema);
module.exports = FootPath;
