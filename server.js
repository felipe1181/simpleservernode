 

const express = require('express');
const mongoose = require('mongoose');

const app = express();
mongoose.connect("mongodb://192.168.99.100:27017/nodeapi",{useNewUrlParser:true})

app.get('/',function(req,res){
    res.send('aaaaaai');
});

app.listen(3001);
