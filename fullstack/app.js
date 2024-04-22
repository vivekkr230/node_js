let express=require("express")
let app=express();
let dotenv=require("dotenv");

dotenv.config();

let port=process.env.PORT || 7230;



let menu=[
    {link:'/',name:'Home'},
    {link:'/category',name:'Category'},
    {link:'/products',name:'Products'}
]
let productItem=require("./src/router/product")(menu);
let categoryItem=require("./src/router/category")(menu);


app.use(express.static(__dirname + 'public'));

app.set('views','./src/views');

app.set('view engine','ejs');



app.get('/',function(req,res){
    //res.send('index');
    res.render("index",{title:"Default Page",menu});
})


app.use('/category',categoryItem);
app.use('/products',productItem);

app.listen(port,function(err){
    if(err) throw err;
    console.log(`Server listeinig at ${port}`);
})