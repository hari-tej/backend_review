const express=require('express');
const router=express.Router();
const Ranga= require('../models/rangabali');

//Rangabali
    
//post request
router.post("/Ranga/insert",async(req,res)=>{
    const username=req.body.username;
    const city=req.body.city;
    const review=req.body.review;
    const rating=req.body.rating;
   const movie5= await Ranga.create({username:username,city:city,review:review,rating:rating});
    try {
       movie5.save();
       res.send("inserted data");
    } catch (error) {
       console.log("error");
    }
})

//get request
router.get("/Ranga/read",async(req,res)=>{
 await Ranga.find().then((err,result)=>{
   if(err){
       return res.send(err);
   }
   return res.send(result);
 });
});

//put request

router.put("/Ranga/update",async(req,res)=>{
 
   const newreview=req.body.review;
   const id= req.body.id;
   const movie5= await Ranga.findById(id);
   try {
      
       movie5.review=newreview;
       movie5.save();
       res.send("updated details");
   } catch (error) {
       console.log(error);
   }
});

//delete request
router.delete("/Ranga/delete/:id",async(req,res)=>{
   const id= req.params.id;
   await Ranga.findByIdAndRemove(id).exec();
   try {
       res.send("deleted");
   } catch (error) {
       console.log(error);
   }
});




module.exports=router;