const mongoose = require('mongoose');


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

const User = mongoose.model("Account", mySchema)

module.exports = User