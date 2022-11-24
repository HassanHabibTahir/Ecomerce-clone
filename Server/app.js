
const express=require('express');


const app=express();
const product=require('./api/product');
const displayproduct=require('./api/displayproduct');
app.use("/assests",express.static("./assests"));
app.use('/products',product);
app.use('/displayproduct',displayproduct);


module.exports=app;