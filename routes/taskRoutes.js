const express =require("express")
let taskRouter=express.Router()
const{getTask,postTask,getTasks,updateTask,deleteTask}=require("../controllers/taskController")


// route to create task
// taskRouter.get("/task",createTask)
taskRouter.get("/task", getTasks)

//route to post task
taskRouter.post("/task",postTask)

//get one task to update
taskRouter.get("/task/:id",getTask)

//update one task
taskRouter.put("/task/:id",updateTask)

//delete task
 taskRouter.delete("/task/:id",deleteTask)

module.exports=taskRouter;

// http://localhost:5000/task-manager/task