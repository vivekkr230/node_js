let express=require("express");
let app=express();

let categoryItem=express.Router();
let mongodb=require("mongodb").MongoClient
let url=process.env.MONGOURL;


function router(menu)
{
    categoryItem.route('/')
    .get(function(req,res){
       // res.send("Hi From category team");
        mongodb.connect(url,(err,datab)=>{
            if(err){
                res.status(500).send("Error while connecting");
            }else{
                let dbObj=datab.db("aug15");
                dbObj.collection.find().toArray((err,result)=>{
                    if(err){
                        res.status(500).send("Error")
                    }else{
                        res.render(category,{title:'category',data:result,menu:'menu'});
                    }
                })
            }
        })
       
    })

    categoryItem.route('/details')
    .get(function(req,res){
        res.send("category details");
    })
    return categoryItem
}




module.exports=router;