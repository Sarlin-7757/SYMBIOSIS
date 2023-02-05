const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine' , 'ejs');
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"));


app.get("/" , function(req,res){
    res.render("home");
});

app.get("/about2",function(req ,res){
    res.render("about2");
});

app.get("/whatsnew",function(req,res){
    res.render("whatsnew")
});

app.get("/reachus",function(req,res){
    res.render("reachus")
});


app.listen(3000 , function(){
    console.log("your server is running on port 3000");

});

