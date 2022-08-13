const asyncHandler = require("express-async-handler")
const companyModel = require("../Model/storeScheama")

module.exports = {
    getSomeData: asyncHandler(async (req,res)=>{
        console.log(req.body,"sdfsdfsfsfdsdfsdfsdfsdfsdf");
        const {searchData} = req.body;
        var cursor = await companyModel.find({Name: { $regex: searchData, $options: "i" }})

        console.log(cursor,"cursorcursorcursorcursor");
        res.json(cursor)


    })
}