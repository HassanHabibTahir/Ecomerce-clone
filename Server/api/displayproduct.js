const express=require('express');
const router=express.Router();
const displayproduct=require('../Displaypro.json');

router.get('/',(req,res,next)=>{
    res.status(200).json(displayproduct);
})
module.exports=router;