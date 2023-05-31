const Task=require("../models/Task")
const getTasks=async(req,res)=>{
    try{
        let tasks=await Task.find().lean()
        res.status(200).render("home",{tasks})
    }catch (error){
        res.status(404).json({
            message:"No task added"
        })
    }
}
   
   // const createTask=(req,res)=>{
   // res.send("create task")

//    const getTask=(req,res)=>{
//    res.render("home")
//}

const postTask=async (req,res)=>{
    try{
        // let{task}=req.body
        let task=req.body.task
      // console.log(req.body);
       let duplicate=await Task.findOne({task:task}).lean()
       if(duplicate){
        res.json({
            message:"task is already present"
        })
       }
       else{
        await Task.create({task:task})
         res.redirect("/task-manager/task")
       }
    }catch(error){
        console.log(error);
    }
    }

//update task 
const getTask=async (req,res)=>{
  try{  
    let id=req.params.id
    //console.log(id);
    const task=await Task.findOne({_id:id}).lean()
     res.status(200).render("update",{task})
     }catch(error){
    console.log(error);
}
}

const updateTask=async (req,res)=>{
  try{  
    let id=req.params.id
    //console.log(id);
    let updateTask=req.body.task
    await Task.updateOne({_id:id},{$set:{task:updateTask}})
     res.status(200).redirect("/task-manager/task")
     }catch(error){
    console.log(error);
}
}
//deleteTask

const deleteTask=async (req,res)=>{
    try{  
      let id=req.params.id
      //console.log(id);
      await Task.deleteOne({_id:id})
       res.status(200).redirect("/task-manager/task")
       }catch(error){
      console.log(error);
  }
  }
module.exports={
//   createTask

    getTasks,
    postTask,
    getTask,
    updateTask,
    deleteTask
}