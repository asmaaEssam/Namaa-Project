const mongoose = require("mongoose");
const { SALT_ROUNDS } = require("../configuration");
const bcrypt = require("bcryptjs");

const Schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
    unique: true,
    minlength: 4,
    maxlength: 15,
  },
  username: {
    type: String,
    required: [true, "username is required"],
    unique: true,
    minlength: 3,
    maxlength: 10,
  },
  password: {
    type: String,
    validate: {
      validator: function (v) {
        return /[A-Z]/.test(v);
      },
      message: "password must have at least one uppercase letter",
    },
    required: [true, "password is required"],
  },
  role: {
    required: true,
    type: String,
  },
  projects: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Project" }],
  },
});

//presave
Schema.pre("save", async function () {
  const userdoc = this;
  console.log("password:" + userdoc.password);
  //hashing
  const hashed = await bcrypt.hash(userdoc.password, 10);
  userdoc.password = hashed;
  console.log("this is presave");
});

const User = mongoose.model("User", Schema);
module.exports = User;
