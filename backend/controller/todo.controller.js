
const TaskService=require('../service/task.service');
const apiError = require("../utils/apiError");
const {StatusCodes:http}=require('http-status-codes');

const getUser=async(req,res)=>{
      
    try{
        const taskservice=new TaskService();
        const userData=await taskservice.getuser();
        res.send({data:userData,success:true});
    }
    catch(e)
    {
        throw new apiError(e.statusCode||http.BAD_REQUEST,e.message);
    }
};

const postUser=async(req,res)=>{

    try{
          const taskservice=new TaskService();
          const file=req.file;
          const body=req.body;
          const userData={...body,linkedfile:{data:req.file.buffer,contentType:req.file.mimetype}};
          const newuser=await taskservice.adduser(userData);
          res.send({data:newuser,success:true});
    }
    catch(e)
    {
        throw new apiError(e.statusCode||http.BAD_REQUEST,e.message);
    }
};

const deleteUser=async(req,res)=>{

    try{
          const {id}=req.params;
          const taskservice=new TaskService();
          const deleteduser=await taskservice.deleteUser(id);
          res.send({data:deleteduser,success:true});
         
    }
    catch(e)
    {
        throw new apiError(e.statusCode||http.BAD_REQUEST,e.message);
    }
};

const updateUser=async(req,res)=>{

    try{
         const {id}=req.params;
         const taskservice=new TaskService();
         const updateduser=await taskservice.updateuser(id,req.body);
         res.send({data:updateduser,success:true});
    }
    catch(e)
    {
        throw new apiError(e.statusCode||http.BAD_REQUEST,e.message);
    }
};

module.exports={getUser,postUser,updateUser,deleteUser};