const mongoose= require('mongoose');

const babySchema= new mongoose.Schema({
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
    },
    likes:{
        type:Number
    }
},{timestamps:true});

const Baby=mongoose.model("Baby",babySchema);

module.exports=Baby;