var express = require("express");

var router = express.Router();

router.get("/", function(req,res,){
    console.log("hello I'm on the start page here");
    res.render("index");
});

router.get("/products", function(req,res){
    console.log("hello I'm on the product page");
    res.render("products");
})

module.exports = router;
