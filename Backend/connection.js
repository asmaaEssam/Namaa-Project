const mongoose = require('mongoose');
const express=require('express')
const{DB_HOST,PORT,LINK}=require("./configuration")
const app=express()
mongoose.connect(DB_HOST,{useNewUrlParser: true, useUnifiedTopology: true},(err)=>{
if (err){
    console.error(err)
    process.exit()
}
console.log("Connected Successfully to Database")
app.listen( 200,()=>{
        console.log('server listening on port ' + 200 +' at '+LINK)
    })
})

module.exports= app;