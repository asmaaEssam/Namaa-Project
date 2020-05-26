require('./configuration')
const express=require('express')
const app= require ('./connection')
app.use(express.json())
const {userRouter}= require('./Api/userapi.js')
app.use('/users', userRouter)
// app.listen(process.env.PORT,()=>{
//     console.log('server listening on port ' + PORT +' at '+ LINK)
// })