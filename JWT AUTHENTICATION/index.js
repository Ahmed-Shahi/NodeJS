const express = require("express")
const router = require("./router/signUp")
const {Connect} = require("./connectDB")
const app = express()

Connect("mongodb://127.0.0.1:27017/JWT_Authentication").then(()=>console.log("Connected Successful")).catch((err)=>console.log(err))

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/signup',router)
app.use("/signin",router)



app.listen(8000)