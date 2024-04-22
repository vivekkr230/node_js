let express=require("express");
let app=express();

let shubhankaritem=express.Router();



shubhankaritem.route('/')
    .get(function(req,res){
        res.send("Hello Shubhankar here");
    })
    shubhankaritem.route('/love')
    .get(function(req,res){
        res.send("Hello SRUSHTI here shubhankar's love");
    })

module.exports=shubhankaritem;