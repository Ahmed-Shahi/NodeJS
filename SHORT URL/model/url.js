const mongoose = require("mongoose")

const myschema = new mongoose.Schema({

    Key:{
        type: String,
        required: true,
        unique: true 
    },
    Url:{
        type:String,
        required: true
    },
    visitHistory:[
        {
            visitTime :{
                type: Number
            } 
        }
    ]
},
{timestamps: true})

const URL = mongoose.model("url",myschema)

module.exports = URL