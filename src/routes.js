/*
* Author Felipe ferraresi
* Routes server file
*/
const express = require('express');
const routes = express.Router();

//import controllers product
const ProductController = require('./controllers/ProductController');

//router action product
routes.get('/products', ProductController.index);

module.exports = routes;

