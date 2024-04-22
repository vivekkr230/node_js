let express=require("express");
let app=express();

//let dotenv=require("dotnev");
//dotenv.config();
let port=5644;

let shubhankaritem=require("./src/router/shubhankar");
let ujjwalitem=require("./src/router/ujjwal");

// static file path
app.use(express.static(__dirname +'public'));

//html file path
app.set('views','./src/views');

//view engine name
app.set('view engine','ejs')

app.get('/',function(req,res){
   // res.send("Hi from express")
   res.render('index1');
})



app.use('/ujjwal',ujjwalitem);
app.use('/shubhankar',shubhankaritem);


app.listen(port,function(err){
    if (err) throw err;
    console.log(`Server is running at ${port}`);
})
