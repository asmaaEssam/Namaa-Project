require('./configuration')
const express=require('express')
const app= require ('./connection')

const userRouter= require('./Api/userapi')
const projectRouter= require('./Api/projectapi')

app.use(express.json())

app.use('/users', userRouter)
app.use('/projects',projectRouter)
// app.listen(process.env.PORT,()=>{
//     console.log('server listening on port ' + PORT +' at '+ LINK)
// })