const fetch = require("node-fetch")
require('dotenv').config()
const express = require("express");
const ejs = require("ejs");
const _ = require("lodash");

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get('/', function(req, res){
    res.render("home")
})

app.post('/', function(req, res){
    const location = req.body.location;
    fetch("https://examples.opendatasoft.com/api/records/1.0/search/?dataset=world-heritage-unesco-list&q=country_en+%3D+%22" + location + "%22&rows=100&facet=category&facet=country_en&facet=continent_en")
    .then((response) => {
        if (response.ok){
            return response.json();
        } else{
            throw new Error("response unavailable")
        }
    })
    .then(data => {
        console.log(data);
        res.render('sites', {data: data})
    })

})

app.get('/map', function(req, res){
    res.render('map')
})

app.listen(3000, function () {
    console.log("Server started at 3000");
})