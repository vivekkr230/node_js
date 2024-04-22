let express=require("express");
let app=express();
let port=5678;
let productRouter=require("./src/views/router/productRouter")
let categoryRouter=require("./src/views/router/categoryRouter")

app.use('/category',categoryRouter);
app.use('/product',productRouter);

app.listen(port,(err)=>{
    if (err) throw err;
    console.log(`Server runs at ${port}`);
})