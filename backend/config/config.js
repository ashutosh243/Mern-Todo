const dotenv=require('dotenv');
dotenv.config();

module.exports ={
    port:process.env.port,
    datbase_url:process.env.database
}