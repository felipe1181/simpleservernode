const mongoose = require('mongoose');
const Product = mongoose.model('Product');

//export transform select products in json
module.exports = {
    async index(req,res){
        const products = await Product.find();
        return res.json(products);
    }
};