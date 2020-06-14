require("./configuration");
const express = require("express");
const app = require("./connection");
const cors = require("cors");

const { userRouter } = require("./Api/userapi");
const projectRouter = require("./Api/projectapi");
const footpathRouter = require("./Api/footpathapi");
const cyclewayRouter = require("./Api/cyclewayapi");

app.use(cors());
app.use(express.json());

app.use("/users", userRouter);
app.use("/projects", projectRouter);
app.use("/footpath", footpathRouter);
app.use("/cycleway", cyclewayRouter);
// app.listen(process.env.PORT,()=>{
//     console.log('server listening on port ' + PORT +' at '+ LINK)
// })
