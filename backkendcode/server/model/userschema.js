var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var userSchema=new Schema({
    username:{
        type:String
    },
    email:{
        type:String,
        unique:true,
        index:true
    }, 
    password:{
        type:String
    },
    phoneNumber:{
        type:Number
    }
   
});
var user=module.exports=mongoose.model('userData',userSchema);