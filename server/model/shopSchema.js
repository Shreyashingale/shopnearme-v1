const mongoose = require('mongoose');


const shopSchema = new mongoose.Schema({
    shopName:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    services:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true,
    },
    coOrdinates:{
        type:String
    },
    pinCode:{
        type:String//check number once here
    }

})
const Shop = mongoose.model("SHOP",shopSchema);

module.exports = Shop;