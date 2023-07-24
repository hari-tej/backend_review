const mongoose= require('mongoose');

const pathaanSchema= new mongoose.Schema({
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

const Pathaan=mongoose.model("Pathaan",pathaanSchema);

module.exports=Pathaan;