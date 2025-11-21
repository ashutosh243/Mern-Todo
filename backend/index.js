const express=require('express');
const cors=require('cors');
const config=require('./config/config');
const app=express();
const todoRoutes=require('./Routes/todo.routes');
const connectDb=require('./database/connection');
const taskModel=require('./models/task.model');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/api/v1/todo',todoRoutes);


app.listen(config.port,()=>{
    connectDb(config.datbase_url);
    console.log(`listening on port ${config.port}`);
});