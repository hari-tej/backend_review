const mongoose= require('mongoose');

const oppenheimerSchema= new mongoose.Schema({
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

const Oppenheimer=mongoose.model("Oppenheimer",oppenheimerSchema);

module.exports=Oppenheimer;