const express=require("express")
const mongoose=require("mongoose")
const {engine}=require("express-handlebars")
const methodOveride=require("method-override")
const taskRouter=require("./routes/taskRoutes")
let app=express()
let PORT=5000;

async function db(){
    await mongoose.connect("mongodb://127.0.0.1:27017")
    console.log("MongoDB connected");
}
db()

//inbilt middlewares
app.use(express.static("public"))

//to use the form data
app.use(express.urlencoded({extended:false}))

app.use(methodOveride("_method"))

//mout template engine
app.engine("handlebars",engine())
app.set("view engine","handlebars")

//"/"---root route in the case express
//"/task-manager"--root route in the case task-manager app

//router-level-middleware
app.use("/task-manager",taskRouter)
// http://localhost:5000/task-manager/task

// app.get("/",(req,res)=>{
//     res.send("task manager")
// })

//update task manager
//app.use(methodOverride('/task-manager/task/:id',updateTask))

app.listen(PORT,(err)=>{
    if(err) throw err
    console.log(`server is running on ${PORT}`);
})