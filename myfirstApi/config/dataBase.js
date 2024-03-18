const mongoose=require("mongoose");
require("dotenv").config({path:"./.env"});
const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=>{
        console.log("Connection successfull..");
    }).catch((error)=>{
        console.log(error);
    })
};

module.exports=dbConnect;