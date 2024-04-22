// file System
let fs=require('fs');

//fs.writeFile('greeting.txt',"Good Morning",function(err){
  //  if (err) throw err;
    //console.log("Task Done");
//})

//fs.appendFile("node.txt",`${Math.floor(Math.random()*1000)} new code \n`,function(err){
 //   if(err) throw err;
 //   console.log("File Appended");
//})

// for reading the file
//fs.readFile("greeting.txt",'utf-8',(err,data)=>{
//    console.log(data);
//})

//file delete

//fs.unlink("greet.txt",(err)=>{
  //  if(err) throw err;
    //    console.log("file deleted");
//})

// file name change

fs.rename("node1.txt","node2.txt",(err)=>{
    if (err) throw err;
       console.log("File name changed");
})