let express=require("express");
let app=express();
let port=5678;
let productRouter=express.Router()
let categoryRouter=express.Router()

productRouter.route('/')
    .get((req,res)=>{
        res.send("Product");
    })
    productRouter.route('/details')
    .get((req,res)=>{
        res.send("product details")
    })

categoryRouter.route('/')
    .get((req,res)=>{
        res.send("category")
    })
    categoryRouter.route('/details')
    .get((req,res)=>{
        res.send("category details")
    })

app.use('/category',categoryRouter);
app.use('/product',productRouter);

app.listen('port',(err)=>{
    if (err) throw err;
    console.log(`Server runs at ${port}`);
})