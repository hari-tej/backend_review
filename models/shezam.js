const mongoose= require('mongoose');

const shezamSchema= new mongoose.Schema({
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

const Shezam=mongoose.model("Shezam",shezamSchema);

module.exports=Shezam;