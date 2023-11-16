import express from 'express'
import dbConnect from './Config/dbConnect.js'

const app= express()
dbConnect()
app.get("/user",(req,res)=>{
    console.log("hiiiii")
})
app.listen(5000,()=>{
    console.log("port starting on 5000")
})