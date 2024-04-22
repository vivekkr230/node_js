const express=require("express")
const bodyparser=require("body-parser");
const fileupload=require("express-fileupload");
const app=express();
const port=8888;

// how do we bind the ejs file
app.use(express.static(__dirname + '/public'))
app.set('view engine','ejs')

app.get('/',(req,res)=>{
    res.render('index')
})

app.post('/upload',(req,res)=>{
    console.log(req.files)
    console.log(req.body)
    const imageFile=req.files.ufile
    imageFile.mv(`${__dirname}/public/images/${imageFile.name}`,(err,data)=>{
        if (err) throw err
        res.render('display',{title:req.body.names,image:`${imageFile.name}`})
    })
})


app.listen(port,(err)=>{
    console.log(`server listening at ${port}`)
})