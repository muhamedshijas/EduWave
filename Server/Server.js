import express from 'express'
import dbConnect from './Config/dbConnect.js'
import cors from 'cors'
import path from 'path'
import cookieParser from 'cookie-parser'
import userRouter from './Routers/UserRouter.js'

const app= express()
dbConnect()
app.use(cookieParser())
app.use(express.json({limit:'50mb'}))

app.use(express.urlencoded({limit:'50mb', extended:true}))
app.use(
    cors({
        origin:["http://localhost:3000"], 
        credentials:true
    })
)

app.use("/user",userRouter)

app.listen(5000,()=>{
    console.log("port starting on 5000")
})