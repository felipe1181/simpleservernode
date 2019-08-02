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

//create routes
app.use('/api',require('./src/routes'));

//open server in 3001 port
app.listen(3001);
