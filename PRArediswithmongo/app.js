let express=require("express");
let redis = require('redis');

let mongodb=require("mongodb").MongoClient;
//let axios=require("axios")
let app=express();
let port=1237;
let mongoulr="mongodb://localhost:27017"
let client=redis.createClient({
    host:"localhost",
    port:6379
})

app.get('/data',(req,res)=>{
    let userColor=(req.query.color).trim()
    return client.get(`${userColor}`,(err,result)=>{
        if(result){
            let output=JSON.parse(result)
            res.send(output)
        }else{
            mongodb.connect(mongourl,(err,dbc)=>{
                if(err) throw err
                let dbObj=dbc.db("aug15")
                dbObj.collection("products").find({'Color':userColor}).toArray((err,res)=>{
                    client.setex(`${userColor}`,3600,JSON.stringify({server:'api',res}))
                    res.send({server:'mongodb',res})
                })
            })
        }
    })
})


app.listen(port,()=>{
        console.log(`server is running ${port}`)
    })