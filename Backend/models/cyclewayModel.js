const mongoose = require("mongoose");
const geometrySchema = new mongoose.Schema({
  coordinates: [[Number]],
  type: { type: String },
});

const cyclewaySchema = new mongoose.Schema({
  cyclewayName: {
    type: String,
    required: [true],
  },
  geometry: geometrySchema,
  projectname: [
    { type: mongoose.Schema.ObjectId, ref: "Project" },
    // { required: [true, "Surveyor's name is required"] },
  ],
  surveyorname: {
    type: String,
  },
  dateofsurvey: {
    type: Date,
    // required: [true, "Date of aurvey is required"],
  },
  Potholes: {
    type: String,
  },
  SurfaceCracking: String,
  signageQuality: String,
  widthRestriction: String,
  lightingQuality: String,
  roadMarkings: String,
});

const Cycleway = mongoose.model("Cycleway", cyclewaySchema);
module.exports = Cycleway;
