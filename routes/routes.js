const express = require("express")
const c= require('../controllers/controls')
const jwt= require('jsonwebtoken')

const route = express()
const data = require("../models/mongo")

route.get('/',(req,res)=>{
    res.render('home.ejs')
})
route.get('/login',(req,res)=>{
    res.render('login')
})
route.get('/register',(req,res)=>{
    res.render('register')
})
route.get('/admin',(req,res)=>{
    res.render('admin')
})
route.post('/login',c.login)
route.post('/register',c.register)
route.post('/admin/newproduct',c.newproduct)
route.get('/product',c.allproducts)
route.get('/product/:productid',c.productview)
route.post('/product/:productid',c.addtocart)
module.exports=route