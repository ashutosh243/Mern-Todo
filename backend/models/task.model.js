const mongoose=require('mongoose');

const schema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
   status:{
    type:String,
    enum:['TODO',"DONE"]
   },
   deadline:{
    type:Date,  
    required:true
   },
    linkedfile:{
        data:Buffer,
        contentType:String,
    }
},{timestamps:true});
const taskModel=mongoose.model('Task',schema);

module.exports=taskModel;