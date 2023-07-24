const mongoose= require('mongoose');

const rangaSchema= new mongoose.Schema({
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

const Ranga=mongoose.model("Ranga",rangaSchema);

module.exports=Ranga;