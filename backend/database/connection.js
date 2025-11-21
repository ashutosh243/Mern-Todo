const mongoose=require('mongoose');
 

module.exports= async function connectDb(url){

    try{
       await mongoose.connect(url);
       console.log(`connected to database: ${mongoose.connection.name}`);
    }
    catch(e)
    {
        console.log("Error in connectDb function",e);
    }
}