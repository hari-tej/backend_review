const mongoose= require('mongoose');

const johnSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    review:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    }
},{timestamps:true});

const John=mongoose.model("John",johnSchema);

module.exports=John;