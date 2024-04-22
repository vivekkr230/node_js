let express=require("express");
let app=express();


let ujjwalitem=express.Router();

ujjwalitem.route('/')
    .get(function(req,res){
        res.send("Hello Ujjwal here");
    })
    ujjwalitem.route('/love')
    .get(function(req,res){
        res.send("Hello UMA here ujjwal's love");
    })



module.exports=ujjwalitem;