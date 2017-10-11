var express=require('express');
var app=express();



var mongoose=require('mongoose');
var db=mongoose.connection;
mongoose.connect("mongodb://localhost/cabApplication");

var bodyparser=require('body-parser');

var cors=require('cors');

app.use(cors());
app.use(bodyparser.json());

var user=require("./server/route/userdata");
app.post('/api/register',user.registerUser);
app.post('/api/login',user.loginUser);
app.post('/api/forgotpassword',user.forgotpassword);
app.post('/api/UserEnteredData',user.UserEnteredData);
// app.get('/api/getUserEnteredData',user.getUserEnteredData);
var port=3456;
app.listen(port,()=>{
    console.log("you are running on port",port);
})




