const express = require('express')
const data = require("../models/mongo")
const jwt = require('jsonwebtoken')
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
    .then((allproducts) => {
      res.render('allproducts', { allproducts })
    })
    .catch(err => {
      console.log(err, 'allproducts')
    })
}
const productview = (req, res) => {
  const productid = req.params.productid
  data.product.findById(productid)
    .then((product) => {
      res.render('product', { product })
    })
    .catch((err) => {
      console.log(err, 'product view')
    })
}
const login = async (req, res) => {
  const idu = req.body.email
  const pwu = req.body.pw
  const dbdata = await data.user.findOne({ email: idu });

  if (dbdata.email === idu) {
    //console.log(dbdata.password, pwu)
    console.log(dbdata.password, pwu)
    if (dbdata.password === pwu) {

      const token = jwt.sign({ email: idu }, "keybro")
      res.cookie("token", token, {
        expiresnew: Date(Date.now() + 900000),
      })

      res.redirect('/product')
    } else res.render("login", { pw: true })
  } else {
    res.render("login", { email: true })
  }

}
const register = async (req, res) => {
  const idu = req.body.email
  const pwu = req.body.password
  // console.log(idu, pwu)
  const idalreadyexsits = await data.user.findOne({ name: idu });
  // console.log( idalreadyexsits.name,idu)
  if (idalreadyexsits) {
    //  console.log("brp")
    // let da= {  con: true  }
    res.render("register", { email: true });
  } else {
    const newuser = new data.user({
      email: idu,
      password: pwu,
    })
    newuser.save()
    const token = jwt.sign({ _id: newuser._id }, "keybro")
    res.cookie("token", token, {
      expiresnew: Date(Date.now() + 900000),
    })
    const url = "/product/"
    res.redirect(url)
  }

}
const cookiesclear = async (req, res) => {
  res.cookie("token", null, {
    expires: new Date(Date.now())
  })
  res.redirect("login")

}

const displaycart = () => {

}
const addtocart = (req,res) => {
  console.log(req.body)

  res.render("cart")
  //we get product with size 
}
const delivery = () => {
  //sends to the admin page

}
const order = () => {
  //finally order product at that event

}
const displayorder = () => {

}
module.exports = {
  newproduct,
  allproducts,
  productview,
  login,
  register,
  addtocart,
}