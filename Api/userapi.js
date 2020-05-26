const express = require("express");
const User = require("../models/usermodel");
const bcrypt = require("bcryptjs");
const userRouter = express.Router();
userRouter.use(function (req, res, next) {
    console.log("Time:", Date.now());
    console.log(req.url);
    console.log("Request Type:", req.method);
    next();
  });
  const saltRound = 10;
  userRouter.post("/register",async (req, res, next) => {
    const { username, password,role } = req.body;
    const hashedpassword = await bcrypt.hash(password, saltRound);
    const newuser = {
      username: username,
      password: hashedpassword,
      role: role
    };
    (await User.create(newuser)).save()
      .then((data) => {
        console.log(data);
        res.send("post successed");
      })
      .catch((error) => {
        res.send("Failed to regiser");
        next(error);
      });
  });
  userRouter.use(function (err, req, res, next) {
    console.error(err.stack);
    if (error.status <= 500) {
      return res.status(err.status).send(err.message);
    }
    res.status(500).send("Internal server error");
  });
  module.exports = { userRouter };
