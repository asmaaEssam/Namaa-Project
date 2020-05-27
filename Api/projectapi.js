const express = require("express");
const Project = require("../models/projectmodel");
const projectRouter = express.Router();

//Get All Projects
projectRouter.get('/',async (req,res,next)=>{
    try{
        const projects = await Project.find({});
        res.status(200).json(projects)
    }catch(err)
    {
        next(err);
    }
})

//Add Project
projectRouter.post('/add',async (req,res,next)=>{
    try{
        const {category,name,owner,manger,location,start_date,end_date,status} = req.body;
        const newProject = new Project({
            category,name,owner,manger,location,start_date,end_date,status
        });
        const savedProject = await newProject.save();
        res.status(201).send(savedProject.toJSON())
    }catch(err)
    {
        next(err);
    }
})