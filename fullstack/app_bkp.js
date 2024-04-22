let express=require("express");
let app=express();
let port=5549;

app.get('/',(req,res)=>{
    res.send("This is express");
})

app.listen(port,(err)=>{
    if(err) throw err;
    console.log(`server listens at ${port}`);
})