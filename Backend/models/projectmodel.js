const mongoose = require("mongoose");

const pointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["Point"],
    required: true,
  },
  coordinates: {
    type: [Number],
    required: true,
  },
});

const Schema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  manager: {
    type: String,
    required: true,
  },
  location: {
    type: pointSchema,
    // required: true
  },
  start_date: {
    type: Date,
    required: true,
  },
  end_date: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "in progress",
  },
  employees: [{ type: mongoose.Schema.ObjectId, ref: "User" }],
});

const Project = mongoose.model("Project", Schema);

module.exports = Project;
