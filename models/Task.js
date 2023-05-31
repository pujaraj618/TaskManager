let mongoose=require("mongoose")

//schema,stores data in db, let us have validation for the data

let TaskSchema=new mongoose.Schema({
    task:{
        type:String,
        required:true,
        trim:true
    },
    
},{timestamps:true})

module.exports=mongoose.model("task",TaskSchema)