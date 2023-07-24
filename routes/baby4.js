const express=require('express');
const router=express.Router();
const Baby= require('../models/baby');

//baby
    
//post request
router.post("/Baby/insert",async(req,res)=>{
    const username=req.body.username;
    const city=req.body.city;
    const review=req.body.review;
    const rating=req.body.rating;
   const movie4= await Baby.create({username:username,city:city,review:review,rating:rating});
    try {
       movie4.save();
       res.send("inserted data");
    } catch (error) {
       console.log("error");
    }
})

//get request
router.get("/Baby/read",async(req,res)=>{
 await Baby.find().then((err,result)=>{
   if(err){
       return res.send(err);
   }
   return res.send(result);
 });
});

//put request

router.put("/Baby/update",async(req,res)=>{
 
   const newreview=req.body.review;
   const id= req.body.id;
   const movie4= await Baby.findById(id);
   try {
      
       movie4.review=newreview;
       movie4.save();
       res.send("updated details");
   } catch (error) {
       console.log(error);
   }
});

//delete request
router.delete("/Baby/delete/:id",async(req,res)=>{
   const id= req.params.id;
   await Baby.findByIdAndRemove(id).exec();
   try {
       res.send("deleted");
   } catch (error) {
       console.log(error);
   }
});




module.exports=router;