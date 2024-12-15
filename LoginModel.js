const mongoose = require('mongoose')
const LoginSchema = new mongoose.Schema({
    Contact:{
        type:String,
        Required:true
    }
},{
    timestamps:true
})

const LoginModel = mongoose.model('Contact',LoginSchema)
module.exports = LoginModel