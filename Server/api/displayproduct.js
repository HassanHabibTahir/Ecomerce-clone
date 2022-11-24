const express=require('express');
const router=express.Router();
const displayproduct=require('../Displaypro.json');

router.get('/',(req,res,next)=>{
    res.status(200).json(displayproduct);
    console.log(displayproduct);
})
module.exports=router;