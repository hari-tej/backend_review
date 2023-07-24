const express=require('express');
const router=express.Router();
const John= require('../models/john');

//John Wick
    
//post request
router.post("/John/insert",async(req,res)=>{
    const username=req.body.username;
    const city=req.body.city;
    const review=req.body.review;
    const rating=req.body.rating;
   const movie8= await John.create({username:username,city:city,review:review,rating:rating});
    try {
       movie8.save();
       res.send("inserted data");
    } catch (error) {
       console.log("error");
    }
})

//get request
router.get("/John/read",async(req,res)=>{
 await John.find().then((err,result)=>{
   if(err){
       return res.send(err);
   }
   return res.send(result);
 });
});

//put request

router.put("/John/update",async(req,res)=>{
 
   const newreview=req.body.review;
   const id= req.body.id;
   const movie8= await John.findById(id);
   try {
      
       movie8.review=newreview;
       movie8.save();
       res.send("updated details");
   } catch (error) {
       console.log(error);
   }
});

//delete request
router.delete("/John/delete/:id",async(req,res)=>{
   const id= req.params.id;
   await John.findByIdAndRemove(id).exec();
   try {
       res.send("deleted");
   } catch (error) {
       console.log(error);
   }
});

module.exports=router;