const mongoose = require('mongoose')
const ActionSchema = new mongoose.Schema({
    Name:{
        type:String,
        Required:true
    },
    Email:{
        type:String,
        Required:true
    },
    Password:{
        type:String,
        Required:true
    },
    Date:{
        type:String,
        Required:true
    },
   
    image:{
        public_id:{
            type:String,
            Required:true
        },
        url:{
            type:String,
            Required:true
        },
    }
   
},{
    timestamps:true
})

const ActionModel = mongoose.model('User',ActionSchema)
module.exports = ActionModel