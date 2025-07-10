const ProductModel = require('../models/productModel');

//Get products API - /api/v1/product
exports.getproduct = async (req,res,next) => {

    const query = req.query.keyword?{name: {
        $regex: req.query.keyword,
        $options: 'i' // case-insensitive search
    }}:{}
    const products = await ProductModel.find(query)
    res.json({
        success: true,
        products
    })
}
//single products API - /api/v1/product/:id

exports.getsingleproduct = async (req,res,next) => {

    try{

    console.log(req.params.id,'ID')
    const product = await ProductModel.findById(req.params.id)
    res.json({
        success: true,
        product
    })}
    catch(error){
        res.status(404).json({
            success: false,
            message: 'Unable to find product',
        })
    }
}