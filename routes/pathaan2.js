const express= require('express');
const router= express.Router();
const Pathaan=require('../models/pathaan');



//pathaan
    
//post request
router.post("/Pathaan/insert",async(req,res)=>{
    const username=req.body.username;
    const city=req.body.city;
    const review=req.body.review;
    const rating=req.body.rating;
   const movie2= await Pathaan.create({username:username,city:city,review:review,rating:rating});
    try {
       movie2.save();
       res.send("inserted data");
    } catch (error) {
       console.log("error");
    }
})

//get request
router.get("/Pathaan/read",async(req,res)=>{
 await Pathaan.find().then((err,result)=>{
   if(err){
       return res.send(err);
   }
   return res.send(result);
 });
});

//put request

router.put("/Pathaan/update",async(req,res)=>{
 
   const newreview=req.body.review;
   const id= req.body.id;
   const movie2= await Pathaan.findById(id);
   try {
      
       movie2.review=newreview;
       movie2.save();
       res.send("updated details");
   } catch (error) {
       console.log(error);
   }
});

//delete request
router.delete("/Pathaan/delete/:id",async(req,res)=>{
   const id= req.params.id;
   await Pathaan.findByIdAndRemove(id).exec();
   try {
       res.send("deleted");
   } catch (error) {
       console.log(error);
   }
});


module.exports=router;