const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();


//enviorment variable
//config the .env file
dotenv.config({path:'./config.env'});
//now can use the variables

//here we dont need to add semicolon att the end of variable at env file
const PORT = process.env.PORT;


//connect to the database
require('./db/conn');
//require schema
//const Shop = require('./model/shopSchema');

//to read the json data
app.use(express.json());
//link the router
app.use(require('./router/auth'));
//middleware
const middleWare  = (req,res,next)=>{

    console.log("this is my middleware");
    next();

}

app.get('/'  , (req,res)=>{
    res.send("back");

})

app.get('/about' ,middleWare, (req,res)=>{
    res.send("about");
})

app.listen(PORT , ()=>{
    console.log(`port is running at ${PORT}`);
});
