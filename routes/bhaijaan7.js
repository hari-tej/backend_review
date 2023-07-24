const express= require('express');
const router= express.Router();
const Bhai=require('../models/kisikabhai');



//KisikaBhai
    
//post request
router.post("/Bhai/insert",async(req,res)=>{
    const username=req.body.username;
    const city=req.body.city;
    const review=req.body.review;
    const rating=req.body.rating;
   const movie7= await Bhai.create({username:username,city:city,review:review,rating:rating});
    try {
       movie7.save();
       res.send("inserted data");
    } catch (error) {
       console.log("error");
    }
})

//get request
router.get("/Bhai/read",async(req,res)=>{
 await Bhai.find().then((err,result)=>{
   if(err){
       return res.send(err);
   }
   return res.send(result);
 });
});

//put request

router.put("/Bhai/update",async(req,res)=>{
 
   const newreview=req.body.review;
   const id= req.body.id;
   const movie7= await Bhai.findById(id);
   try {
      
       movie7.review=newreview;
       movie7.save();
       res.send("updated details");
   } catch (error) {
       console.log(error);
   }
});

//delete request
router.delete("/Bhai/delete/:id",async(req,res)=>{
   const id= req.params.id;
   await Bhai.findByIdAndRemove(id).exec();
   try {
       res.send("deleted");
   } catch (error) {
       console.log(error);
   }
});


module.exports=router;