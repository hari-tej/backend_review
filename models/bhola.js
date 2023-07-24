const mongoose= require('mongoose');

const bholaSchema= new mongoose.Schema({
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

const Bhola=mongoose.model("Bhola",bholaSchema);

module.exports=Bhola;