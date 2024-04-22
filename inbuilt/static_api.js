let fs=require("fs");

let http=require("http");
let server=http.createServer((req,res)=>{
    fs.readFile("class.json","utf-8",(err,data)=>{
        if(err) throw err;
            res.write(data);
            res.end();
    })
})

server.listen(5867);
console.log("Server listens at http://128.0.0.1.5867");