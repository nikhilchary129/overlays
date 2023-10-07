const mongodb = require('mongodb');
const mongoose= require("mongoose");
const Schema=mongoose.Schema

const userSchema= new Schema({
    email:{
        type:String,
      
    },
    password:{
        type:String,
      
    },
    order:[{
        productid: { type: mongoose.Schema.Types.ObjectId, ref: 'book' },
        quantity: { type: Number, default: 1 },
    }],
    cart:[{
        productid: { type: mongoose.Schema.Types.ObjectId, ref: 'book' },
        quantity: { type: Number, default: 1 },
    }],
   
   
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
        type:Number,
      
    },
    s:{
        type:Number,
      
    },
    m:{
         type:Number,
      
    },
    l:{
         type:Number,
      
    },
   xl:{
        type:Number,
      
    },
})
const product = mongoose.model('product',productSchema);

const deliveryschema= new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    address:{type : String},
    delivery:[{
            productid: { type: mongoose.Schema.Types.ObjectId, ref: 'book' },
            size:{ type: String},
            quantity: { type: Number, default: 1 },
    }]
})
    const delivery= mongoose.model('orders',deliveryschema)

module.exports = {
    user,
    product,
    delivery,

};