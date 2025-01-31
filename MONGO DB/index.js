const express = require('express')
const {Connect} = require('./connection')
const userRouter = require('./router/user')

const app = express();

app.use(express.urlencoded({extended : false}))

Connect("mongodb://127.0.0.1:27017/Universty").then(()=> console.log("Connected Successful")).catch((err)=>console.log(err))

app.use("/api/user",userRouter)


app.listen('8000')