require('dotenv').config()
const express = require("express");
const ejs = require("ejs");
const _ = require("lodash");

const app = express();
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get('/', function(req, res){
    res.render("home")
})

app.listen(3000, function () {
    console.log("Server started at 3000");
})