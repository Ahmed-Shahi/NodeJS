const express = require('express')
const router = require('./router/url')
const {Connect} = require('./connectDB')

const app = express()


Connect("mongodb://127.0.0.1:27017/ShortURL").then(()=> console.log("Connected Successful")).catch((err)=>console.log(err))

app.use(express.json())

app.use('/url', router )




app.listen(8000)