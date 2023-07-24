const express=require('express');
const router=express.Router();
const Shezam= require('../models/shezam');

//Shezam
    
//post request
router.post("/Shezam/insert",async(req,res)=>{
    const username=req.body.username;
    const city=req.body.city;
    const review=req.body.review;
    const rating=req.body.rating;
   const movie9= await Shezam.create({username:username,city:city,review:review,rating:rating});
    try {
       movie9.save();
       res.send("inserted data");
    } catch (error) {
       console.log("error");
    }
})

//get request
router.get("/Shezam/read",async(req,res)=>{
 await Shezam.find().then((err,result)=>{
   if(err){
       return res.send(err);
   }
   return res.send(result);
 });
});

//put request

router.put("/Shezam/update",async(req,res)=>{
 
   const newreview=req.body.review;
   const id= req.body.id;
   const movie9= await Shezam.findById(id);
   try {
      
       movie9.review=newreview;
       movie9.save();
       res.send("updated details");
   } catch (error) {
       console.log(error);
   }
});

//delete request
router.delete("/Shezam/delete/:id",async(req,res)=>{
   const id= req.params.id;
   await Shezam.findByIdAndRemove(id).exec();
   try {
       res.send("deleted");
   } catch (error) {
       console.log(error);
   }
});

module.exports=router;