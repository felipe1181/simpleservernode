/**
 * @author Felipe ferraresi
 * index server
 * 
 * require libs
*/
const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//open express
const app = express();

//create connection mongodb in docker
mongoose.connect(
    "mongodb://192.168.99.100:27017/nodeapi",
    {useNewUrlParser:true}
);

//require models 
requireDir('./src/models');
const Product = mongoose.model('Product');


app.get('/',function(req,res){
    Product.create({
        title:"NodeJs",
        description:"Node is a better",
        url:"www.instagram.com/felipef1181"
    });

    res.send('Server running');
});

//open server in 3001 port
app.listen(3001);
