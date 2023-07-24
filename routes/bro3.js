const express=require('express');
const router=express.Router();
const Bro= require('../models/bro');

//bro
    
//post request
router.post("/Bro/insert",async(req,res)=>{
    const username=req.body.username;
    const city=req.body.city;
    const review=req.body.review;
    const rating=req.body.rating;
   const movie3= await Bro.create({username:username,city:city,review:review,rating:rating});
    try {
       movie3.save();
       res.send("inserted data");
    } catch (error) {
       console.log("error");
    }
})

//get request
router.get("/Bro/read",async(req,res)=>{
 await Bro.find().then((err,result)=>{
   if(err){
       return res.send(err);
   }
   return res.send(result);
 });
});

//put request

router.put("/Bro/update",async(req,res)=>{
 
   const newreview=req.body.review;
   const id= req.body.id;
   const movie3= await Bro.findById(id);
   try {
      
       movie3.review=newreview;
       movie3.save();
       res.send("updated details");
   } catch (error) {
       console.log(error);
   }
});

//delete request
router.delete("/Bro/delete/:id",async(req,res)=>{
   const id= req.params.id;
   await Bro.findByIdAndRemove(id).exec();
   try {
       res.send("deleted");
   } catch (error) {
       console.log(error);
   }
});




module.exports=router;