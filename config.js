const mongoose = require("mongoose");
const connect=mongoose.connect("mongodb://localhost:27017/NewData");

connect.then(()=>{
    console.log("Database connected successfully");
})
.catch(()=>{
    console.log("Database cannot be connected");
});
const DataSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});
const collection =new mongoose.model("User",DataSchema);
module.exports=collection;
