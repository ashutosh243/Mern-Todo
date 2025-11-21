const express=require('express');
const router=express.Router();
const {getUser,postUser,deleteUser,updateUser,}=require('../controller/todo.controller');
const upload=require('../utils/multer');

router.get('/',getUser);
router.post('/',upload.single('pdf'),postUser);
router.patch('/:id',updateUser);
router.delete('/:id',deleteUser);

module.exports=router;