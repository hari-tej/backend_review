const express= require('express');
const router= express.Router();
const Bhola=require('../models/bhola');



//Bhola
    
//post request
router.post("/Bhola/insert",async(req,res)=>{
    const username=req.body.username;
    const city=req.body.city;
    const review=req.body.review;
    const rating=req.body.rating;
   const movie6= await Bhola.create({username:username,city:city,review:review,rating:rating});
    try {
       movie6.save();
       res.send("inserted data");
    } catch (error) {
       console.log("error");
    }
})

//get request
router.get("/Bhola/read",async(req,res)=>{
 await Bhola.find().then((err,result)=>{
   if(err){
       return res.send(err);
   }
   return res.send(result);
 });
});

//put request

router.put("/Bhola/update",async(req,res)=>{
 
   const newreview=req.body.review;
   const id= req.body.id;
   const movie6= await Bhola.findById(id);
   try {
      
       movie6.review=newreview;
       movie6.save();
       res.send("updated details");
   } catch (error) {
       console.log(error);
   }
});

//delete request
router.delete("/Bhola/delete/:id",async(req,res)=>{
   const id= req.params.id;
   await Bhola.findByIdAndRemove(id).exec();
   try {
       res.send("deleted");
   } catch (error) {
       console.log(error);
   }
});


module.exports=router;