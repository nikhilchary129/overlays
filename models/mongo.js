const mongodb = require('mongodb');
const mongoose= require("mongoose");
const Schema=mongoose.Schema

const userSchema= new Schema({
    username:{
        type:String,
      
    },
    password:{
        type:String,
      
    },
   
   
})
const user = mongoose.model('user', userSchema);
const productSchema = new Schema({
    code:{
        type:String,
        
    },
    nam:{
        type:String,
      
    },
   img1:{
        type:String,
      
    },
    img2:{
        type:String,
      
    },
    img3:{
        type:String,
      
    },
    price:{
        type:String,
      
    },
   type:{
        type:String,
      
    },
    xs:{
        type:String,
      
    },
    s:{
        type:String,
      
    },
    m:{
        type:String,
      
    },
    l:{
        type:String,
      
    },
   xl:{
        type:String,
      
    },
})
const product = mongoose.model('product',productSchema);

module.exports = {
    user,
    product,

};