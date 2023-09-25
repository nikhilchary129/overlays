const express = require("express")
const c= require('../controllers/controls')


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

route.post('/admin/newproduct',c.newproduct)
route.get('/product',c.allproducts)
module.exports=route