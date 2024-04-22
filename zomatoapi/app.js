let express=require("express");
let mongodb=require("mongodb").MongoClient;
let bodyparser=require("body-parser");
let port=1238;
let mongourl="mongodb://localhost:27017"
let app=express();
let authKey=process.env.authKey;

function auth(key){
    if(key==authKey){
        return true
    }else
        return false
}

app.get('/',(req,res)=>{
    res.send(`server is live`);
})
// location
app.get('/location',(req,res)=>{
    //let {key}=req.query
    //let key=req.query.key
    let key=req.header('x-basic-token')
    if(auth(key)){
        dbo.collection('location').find().toArray((err,data)=>{
            if(err) throw err
            res.send(data);
        })
    }else{
        res.send(`unauthorized request`)
    }

})
// resturants
app.get('/resturants',(req,res)=>{
    let query={}
    let stateId=Number(req.query.stateId)
    if(stateId){
        query={'state_Id':stateId}
    }
    dbo.collection('resturants').find(query).toArray((err,data)=>{
        if(err) throw err
        res.send(data);
    })
})
//mealtype
app.get('/mealType',(req,res)=>{
    dbo.collection('mealType').find(query).toArray((err,data)=>{
        if(err) throw err
        res.send(data);
    })
})





mongodb.connect(mongourl,(err,dbc)=>{
    let dbo=dbc.db('aug15')
    app.listen(port,()=>{
        console.log(`server is running ${port}`)
    })
})

