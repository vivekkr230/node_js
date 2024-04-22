let express=require("express");
let mongodb=require("mongodb").MongoClient;
let redis=require("redis");
let app=express()
let mongourl="mongodb://localhost:27017"
let port=5878;
let client=redis.createClient({
    host:"localhost",
    port:6379
})


app.get('/products',(req,res)=>{
    const userInput=(req.query.color).trim();
    return client.get(`${userInput}`,(err,result)=>{
        // if data is in redis
        if(result){
            const output=JSON.parse(result)
            res.send(output)
        }else{
            mongodb.connect(mongourl,(err,dbc)=>{
                if(err){
                    res.send("Error");
                }else{
                    let dbObj=dbc.db('aug15');
                    dbObj.collection('products').find({color:'userInput'}).toArray((err,results)=>{
                        client.setex(`${userInput}`,3600,JSON.stringify({source:'Redis Cache',results}))
                        res.send({source:"mongodb",results})
                    })
                }
            })
        }
    })
})

app.listen(port,(err)=>{
    console.log(`server running on ${port}`)
})