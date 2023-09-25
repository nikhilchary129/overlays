const express = require('express')
const data = require("../models/mongo")
const newproduct = async (req, res) => {
    const { code, nam, img1, img2, img3, type, price, xs, s, m, l, xl } = req.body
    const product = new data.product({
        code: code,
        nam: nam,
        img1: img1,
        img2: img2,
        img3: img3,
        price: price,
        type: type,
        xs: xs,
        s: s,
        m: m,
        l: l,
        xl: xl,
    })
    product.save()
    res.redirect('/admin')
}

const allproducts = async (req, res) => {
   
    data.product.find()
    .then( (allproducts)=>{
        res.render('allproducts',{allproducts})
    })
    .catch(err=>{
        console.log(err,'allproducts')
    })
}


module.exports = {
    newproduct,
    allproducts,
}