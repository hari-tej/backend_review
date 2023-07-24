const mongoose= require('mongoose');

const broSchema= new mongoose.Schema({
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

const Bro=mongoose.model("Bro",broSchema);

module.exports=Bro;