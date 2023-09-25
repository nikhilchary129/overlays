const http = require("http")
const express = require("express")
const data = require("./models/mongo.js")
const mongodb = require('mongodb');
const bodyPaser = require("body-parser")
const mongoose = require("mongoose");
const db = "mongodb://localhost:27017/books"

const path = require("path");
const { render } = require("ejs");
const router = require("./routes/routes.js")
const app = express()
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")));
app.get('/',(req,res)=>{
    res.render('home.ejs')
})

app.use(express.urlencoded({ extended: true }));

mongoose.connect((db),{
    useNewUrlParser: true, useUnifiedTopology: true
})
 app.use(router)
const port = process.env.PORT || 3000;
app.listen(port)