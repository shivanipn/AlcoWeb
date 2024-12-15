const mongoose = require('mongoose')
const connect = ()=>{
    con = 'mongodb://localhost:27017/AlcoWEB'
    return mongoose.connect(con)
    .then(()=>{
        console.log("Connected Successfully")
    }).catch((err)=>{
        console.log(err);
    }

)}

module.exports = connect