const express = require('express');
const router = express.Router();

require('../db/conn');
const Shop = require('../model/shopSchema');

router.get('/getShop', async(req, res) => {
    try {
        const data = await Shop.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})
//Get by ID Method
router.get('/getShopByCategory/:category', async (req, res) => {
    try{
        const data = await Shop.find({ category:  req.params.category  });
        res.json(data)
        
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.get('/getShopByPincode/:category/:pinCode', async (req, res) => {
    try{
        const data = await Shop.find({ category:  req.params.category,pinCode :req.params.pinCode});
        res.json(data)
        
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
//method one of creating REST api using promises
/*router.post('/addShop' , (req,res)=>{
    //instead of req.body.shopName;
    const {shopName , category, services , address , coOrdinates} = req.body;
    if(!shopName || !category || !services || !address || !coOrdinates){
        return res.status(422).json({error:"Please fill all the fields"});
    }
    //console.log(shopName);
    //now will check if the shop already exist
    //in schema we need to add one more field owner id
    
    Shop.findOne({shopName:shopName})
    .then((userExist)=>{
        if(userExist){
            return res.status(422).json({error:"shop already exist"});
        }

        const shop = new Shop({shopName , category, services , address , coOrdinates});

        shop.save()
        .then(()=>{
            res.status(201).json({message:"shop created"});
        })
        .catch((error)=>{
            console.log(error);
        })
    })
})
*/

//method two using async await
router.post('/addShop', async (req, res) => {//make this fun async
    //instead of req.body.shopName;
    const { shopName, category, services, address, coOrdinates,pinCode } = req.body;
    if (!shopName || !category || !services || !address || !coOrdinates || !pinCode) {
        if(!category)return res.status(422).json({error:"please fill category"})
        return res.status(422).json({ error: "Please fill all the fields" });
    }

    try {
        const shopExist = await Shop.findOne({ shopName: shopName });//need to wait
        if (shopExist) {
            return res.status(422).json({ error: "shop already exist" });
        }
        const shop = new Shop({ shopName, category, services, address, coOrdinates ,pinCode });

        const shopRegister = await shop.save();
        if (shopRegister) {
            res.status(201).json({ message: "shop created" });
        }
    } catch (error) {
        console.log(error);

    }

})
module.exports = router;