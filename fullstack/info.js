let express=require("express")
let app=express();
let port=5622;
//let mongodb=require("mongodb").MongoClient;

let satyam=require("./src/router/satyam");




app.use('/satyam',satyam)







app.listen(port,(err)=>{
    if (err) throw err
    console.log(`Server listens at ${port}`);
})