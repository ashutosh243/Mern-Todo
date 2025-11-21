const dotenv=require('dotenv');
dotenv.config();

module.exports ={
    port:process.env.PORT,
    datbase_url:process.env.database
}