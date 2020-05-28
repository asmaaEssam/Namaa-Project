const express = require("express");
const User = require("../models/usermodel");
//const JWT_SECRET=require("./configuration")
//const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userRouter = express.Router();
userRouter.use(function (req, res, next) {
    console.log("Time:", Date.now());
    console.log(req.url); 
    console.log("Request Type:", req.method);
    next();
  });
 const saltRound=10;
 userRouter.post("/register",async (req, res, next) => {
  const token = req.headers.authorization;
  jwt.verify(token,process.env.JWT_SECRET, function (err, decoded) {
    const _id = decoded._id;
    if ( _id!= "5ecf2eaadad5b62c28ebfc31") {
      res.send("User is not authorized");}
      else{
  const { name, username, password, role } = req.body;
  //const hashedpassword = await bcrypt.hash(password, saltRound);
  const newuser = {
    name: name,
    username: username,
    password: password,
    role: role,
  };
  User.create(newuser)
    .then((data) => {
     
      res.send("post successed");
    })
  }
      })
 })
  
 userRouter.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username,password:password });
    //const isMatch = await bcrypt.compare(password, user.password);

    
    if (user) {
      return jwt.sign(
        { _id: user.id},
        process.env.JWT_SECRET,
        {expiresIn:"60m"},
        (err, token) => {
          return res.send({ token });
        }
      );
    }
    throw new Error("username or password is wrong");
  } catch (error) {
    next(error);
  }
})
userRouter.get("/", (req, res, next) => {
  
    
    const token = req.headers.authorization;
    jwt.verify(token, process.env.JWT_SECRET, (err,decoded) => {
      const _id = decoded._id;
      if ( _id!= "5ecf2eaadad5b62c28ebfc31") {
        res.send("User is not authorized");
      }
      else{
      User.find({}, { name: 1, id: 1, username:1, role:1,password:1 }, (err, data) => {
        if (err) {
          return next(err);
        }
        res.send(data);
      });
    }
    });
});

userRouter.delete("/:id", (req, res, next) => {
  
    const token = req.headers.authorization;
    jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
      const _id = decoded._id;
      if (_id!= "5ecf2eaadad5b62c28ebfc31") {
        res.send("User is not authorized");
      } else {
        User.findByIdAndDelete({ _id: req.url.slice(4) }, (err, data) => {
          if (err) {
            return next(err);
          } else {
            res.send("deleted successfully");
          }
        });
      }
    });
});
userRouter.patch("/:id", (req, res, next) => {
  
    const token = req.headers.authorization;
    jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
      const _id = decoded._id;
      if (_id!= "5ecf2eaadad5b62c28ebfc31") {
        res.send("Not Authorized invalid token");
      } else {
        if (req.body.username == ""|| req.body.name==""||req.body.role==""||req.body.password=="") {
          res.send("Invalid Editing");
        } else {
          const update = { username: req.body.username,name:req.body.name,role:req.body.role,password:req.body.password };
          User.findByIdAndUpdate({ _id:req.url.slice(4)}, update).exec();
        }

        res.send({
          msg: "user was edited successfully",
          username: req.body.username,
          name:req.body.name,
          role:req.body.role,
          password:req.body.password
        });
      }
    })
      })
  userRouter.use(function (err, req, res, next) {
    console.error(err.stack);
    if (error.status <= 500) {
      return res.status(err.status).send(err.message);
    }
    res.status(500).send("Internal server error");
  });
  module.exports = { userRouter };
