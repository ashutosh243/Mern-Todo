const taskModel=require('../models/task.model');
const apiError=require('../utils/apiError');
const {StatusCodes:http}=require('http-status-codes');

class TaskService{

    async getuser(){
           
        const users=await taskModel.find({});
        if(!users){
           throw  new apiError(http.NOT_FOUND,"user not found");
        }
        return users;
    }
    async getUserById(id){
         
        const user=await taskModel.find({_id:id});
        if(!user){
           throw  new apiError(http.NOT_FOUND,"user not found");
        }
        return user;
    }
    async adduser(user){

        const newuser=await taskModel.create(user);
        if(!newuser){
            throw new apiError(http.BAD_REQUEST,"user not created");
        }
        // console.log(newuser);
        return newuser;
    }
    async deleteUser(id){

        const user=await taskModel.findByIdAndDelete(id);
        if(!user){
            throw new apiError(http.NOT_FOUND,"user not found");
        }
        return user;
    }
    async updateuser(id,user){
        const newuser=await taskModel.findByIdAndUpdate(id,user,{new:true});
        if(!newuser){
            throw new apiError(http.NOT_FOUND,"user not found");
        }
        return newuser;
    }
}

module.exports=TaskService;