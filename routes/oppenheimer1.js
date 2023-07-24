const express=require('express');
const router=express.Router();
const Oppenheimer= require('../models/oppenheimer');

//oppenheimer
    
//post request
router.post("/Oppenheimer/insert",async(req,res)=>{
    const username=req.body.username;
    const city=req.body.city;
    const review=req.body.review;
    const rating=req.body.rating;
   const movie1= await Oppenheimer.create({username:username,city:city,review:review,rating:rating});
    try {
       movie1.save();
       res.send("inserted data");
    } catch (error) {
       console.log("error");
    }
})

//get request
router.get("/Oppenheimer/read",async(req,res)=>{
 await Oppenheimer.find().then((err,result)=>{
   if(err){
       return res.send(err);
   }
   return res.send(result);
 });
});

//put request

router.put("/Oppenheimer/update",async(req,res)=>{
 
   const newreview=req.body.review;
   const id= req.body.id;
   const movie1= await Oppenheimer.findById(id);
   try {
      
       movie1.review=newreview;
       movie1.save();
       res.send("updated details");
   } catch (error) {
       console.log(error);
   }
});

//delete request
router.delete("/Oppenheimer/delete/:id",async(req,res)=>{
   const id= req.params.id;
   await Oppenheimer.findByIdAndRemove(id).exec();
   try {
       res.send("deleted");
   } catch (error) {
       console.log(error);
   }
});

module.exports=router;