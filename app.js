const express = require('express')
const app = express()
port = 8889
const web = require('./Routes/web')
const fileUpload = require('express-fileupload')
const connect = require('./DB/ConnectDB')
connect()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))


// parse application/json
app.use(bodyParser.json())

app.use(fileUpload({
    useTempFiles : true,
}));

app.use('/',web)
app.set('view engine','ejs')
app.use(express.static('public'))



app.listen(port,()=>{
    console.log(`Server is Running ${port}`);
})