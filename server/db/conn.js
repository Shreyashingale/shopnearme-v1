const mongoose = require('mongoose');
const dotenv = require('dotenv');

//we need to encode the string if the password contains special characters
/*const DB ="mongodb+srv://shop1205:Yash123@shopnearme.fxlem5q.mongodb.net/shopnearme?retryWrites=true&w=majority"*/

const DB = process.env.DATABASE;

mongoose.connect(DB).then(()=>{
    console.log("connection established");
}).catch((err)=>{
console.log(err);
});
