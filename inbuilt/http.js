let http=require("http");

let server=http.createServer((req,res)=>{
    res.write("<h1>This is nodeJSss 234 server</h1>")
    res.end()
})

server.listen(5688);
console.log("server listens at 5688");