var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var ridesschema=new Schema({
   
    location:{
        type:String
    },
     fare:{
        type:Number
    },
    destination:{
        type:String
    },
     time : { 
         type : Date, 
         default: Date.now 
        },
    userid:{
        type:String,
        index:true
    }
})
var user=module.exports=mongoose.model('rides',ridesschema);