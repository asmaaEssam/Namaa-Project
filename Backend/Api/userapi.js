const express = require("express");
const User = require("../models/usermodel");
const { JWT_SECRET } = require("../configuration");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const customError = require("../helpers/customError");
const userRouter = express.Router();
userRouter.use(function (req, res, next) {
  console.log("Time:", Date.now());
  console.log(req.url);
  console.log("Request Type:", req.method);
  next();
});

const saltRound = 10;
userRouter.post("/register", async (req, res, next) => {
  const token = req.headers.authorization;
  jwt.verify(token, process.env.JWT_SECRET, async function (err, decoded) {
    const _id = decoded._id;
    const user = await User.findOne({ _id: _id }).exec();
    if (user.role != "admin") {
      res.send("User is not authorized");
    } else {
      const { name, username, password, role } = req.body;
      //const hashedpassword = await bcrypt.hash(password, saltRound);
      const newuser = {
        name: name,
        username: username,
        password: password,
        role: role,
      };
      User.create(newuser).then((data) => {
        res.send("post successed");
      });
    }
  });
});

//fadwa's login
userRouter.post(
  "/login",

  async (req, res, next) => {
    const {
      body: { username, password },
    } = req;
    try {
      const user = await User.findOne({ username });
      if (!user)
        throw new customError({
          message: "user does not exist",
          status: 404,
        });
      const isMatch = await bcrypt.compare(password, user.password);

      if (isMatch) {
        //generate token
        jwt.sign(
          { username },
          JWT_SECRET,
          { expiresIn: "60m" },
          (err, token) => {
            if (err) throw new customError({ message: "problem signing in" });
            // const instance = _.omit(user.toJSON(), "password", "__v");
            return res.status(200).send({ user, token: token });
          }
        );
      } else {
        throw new customError({ message: "either un or pw is wrong" });
      }
    } catch (Error) {
      console.log(Error);
      next(Error.message);
    }
  }
);

//fadwa's get user's projects list
//TODO validation
userRouter.get("/:employeeId", async (req, res, next) => {
  try {
    const { employeeId } = req.params;
    if (employeeId) {
      //TODO authentication
      const employeeProjects = await User.findOne(
        { _id: employeeId },
        { projects: 1, _id: 0 }
      ).populate("projects");
      return res.status(200).send(employeeProjects.projects);
    }
    //TODO pagination
    const allprojects = await Project.find();
    return res.status(200).send(allprojects);
  } catch (error) {
    next(error);
  }
});

//  userRouter.post("/login", async (req, res, next) => {
//   try {
//     const { username, password } = req.body;
//     const user = await User.findOne({ username: username,password:password });
//     //const isMatch = await bcrypt.compare(password, user.password);

//     if (user) {
//       return jwt.sign(
//         { _id: user.id},
//         process.env.JWT_SECRET,
//         {expiresIn:"60m"},
//         (err, token) => {
//           return res.send({ token });
//         }
//       );
//     }
//     throw new Error("username or password is wrong");
//   } catch (error) {
//     next(error);
//   }
// })
userRouter.get("/", (req, res, next) => {
  const token = req.headers.authorization;
  jwt.verify(token, process.env.JWT_SECRET, async function (err, decoded) {
    const _id = decoded._id;
    const user = await User.findOne({ _id: _id }).exec();
    if (user.role != "admin") {
      res.send("User is not authorized");
    } else {
      User.find(
        {},
        { name: 1, id: 1, username: 1, role: 1, password: 1 },
        (err, data) => {
          if (err) {
            return next(err);
          }
          res.send(data);
        }
      );
    }
  });
});

userRouter.delete("/:id", (req, res, next) => {
  const token = req.headers.authorization;
  jwt.verify(token, process.env.JWT_SECRET, async function (err, decoded) {
    const _id = decoded._id;
    const user = await User.findOne({ _id: _id }).exec();
    if (user.role != "admin") {
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
  jwt.verify(token, process.env.JWT_SECRET, async function (err, decoded) {
    const _id = decoded._id;
    const user = await User.findOne({ _id: _id }).exec();
    if (user.role != "admin") {
      res.send("User is not authorized");
    } else {
      if (
        req.body.username == "" ||
        req.body.name == "" ||
        req.body.role == "" ||
        req.body.password == ""
      ) {
        res.send("Invalid Editing");
      } else {
        const update = {
          username: req.body.username,
          name: req.body.name,
          role: req.body.role,
          password: req.body.password,
        };
        User.findByIdAndUpdate({ _id: req.url.slice(4) }, update).exec();
      }

      res.send("user was edited successfully");
    }
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
