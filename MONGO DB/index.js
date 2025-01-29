const express = require('express')
const mongoose = require('mongoose');

const app = express();

app.use(express.urlencoded({extended : false}))

// Connection
mongoose.connect("mongodb://127.0.0.1:27017/Universty").then(()=> console.log("Connected Successful")).catch((err)=>console.log(err))

// Schema
const mySchema = new mongoose.Schema({
    goodName:{
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true,
        unique : true,
    }
},
{timestamps: true}
)

// Model
const User = mongoose.model("Account", mySchema)



app.post('/api/users', async(req, res)=>{
    const body = req.body
    const result = await User.create({
        goodName: body.goodName,
        email : body.email,
    })
    console.log(result);
    
 return res.status(201).json({Message: 'ADDED!!!'})

})

app.get('/api/users',async(req,res)=>{
  
  const query = await User.find({})
    
  return res.json(query)
})

app.delete('/api/users', async(req,res)=>{
    const body = req.body.ID
    console.log(body);
    const query = await User.findByIdAndDelete(body)
    
    return res.json({Message:'Delete Successful!!'})
     
})  



app.patch('/api/users', async(req,res)=>{
    const id = req.body.id
    const updateName = req.body.update

    const query = await User.findByIdAndUpdate(id,{goodName : updateName})
    
    return res.json({Message:'Update Successful!!'})
     
})  

app.listen('8000')