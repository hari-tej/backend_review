const express=require('express');
const mongoose= require('mongoose');
require('dotenv').config(); // this helps 
const app= express();
const cors= require('cors');


// this will be used if server gives a port if not 3003 will be used
const PORT= process.env.PORT || 3003;

// this will allow to use json
app.use(express.json());

// this will connect front end and back end 
app.use(cors());

// connecting to mongodbAtlas
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("connected to the database");
    app.listen(PORT,()=>{
        console.log("listening at port 3003");
    });
}).catch((err)=>{
    console.log(err);
});

//for oppenheimer movie
const oppenrouter=require('./routes/oppenheimer1');
app.use(oppenrouter);

//for john wick movie
const johnrouter=require('./routes/john8');
app.use(johnrouter);

//for shezam movie
const shezamrouter=require('./routes/shezam9');
app.use(shezamrouter);

//for pathaan movie
const pathaanrouter=require('./routes/pathaan2');
app.use(pathaanrouter);
//for kisikabhai movie
const bhairouter=require('./routes/bhaijaan7');
app.use(bhairouter);

//for bhola movie
const bholarouter=require('./routes/bhola6');
app.use(bholarouter);



//bro movie
const brorouter=require('./routes/bro3');
app.use(brorouter);
//baby movie
const babyrouter=require('./routes/baby4');
app.use(babyrouter);
//rangabali movie
const rangarouter=require('./routes/ranga5');
app.use(rangarouter);

