/*
* @author felipe ferraresi
* create schema mongodb product 
*/
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true //Required field
    },
    description:{
        type: String,
        required:true  // Required field
    },
    url:{
        type: String,
        required: true
    },
    createAt:{
        type: Date,
        default: Date.now
    }
});

/*
 * add schema in mongoose
 */

 mongoose.model('Product',productSchema);