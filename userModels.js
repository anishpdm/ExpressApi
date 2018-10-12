// Create a Model
var mongoose = require('mongoose');
var Users=mongoose.model('Users',{
    name:{
    type: String,
    required:true,
    minlength:1,
    trim:true
    },
    age:{
    type: Number,
    default: 67
    },
    rollno:{
        type:Number
    },
    admno:{
        type:String
    },
    college:{
        type:String,
    }
    
    });

    module.exports={Users}