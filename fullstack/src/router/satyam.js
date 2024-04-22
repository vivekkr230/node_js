/*let express=require("express")
let app=express();
let mongodb=require("mongodb").MongoClient;
let mongourl="mongodb://localhost:27017";
let satyam=express.Router();


satyam.route('/')
    .get((req,res)=>{
        mongodb.connect(mongourl,(err,dbc)=>{
            console.log("1");
            if(err){
                console.log("2");
                res.status(500).send("Error")
            }
            else{
                console.log("3");
                let dbObj=dbc.db("config")
                console.log("4");
                dbObj.friends.find().toArray((err,result)=>{
                    if(err){
                        res.status(500).send("Error")
                    }else{
                        res.send(result);
                    }
                })
            }
        })
    })

module.exports=satyam*/
let mongodb = require("mongodb").MongoClient;
let express = require("express");
let app = express();
let mongourl = "mongodb://localhost:27017";
let satyam = express.Router();

satyam.route('/')
    .get((req, res) => {
        mongodb.connect(mongourl, (err, dbc) => {
            if (err) {
                console.error("Error connecting to MongoDB:", err);
                res.status(500).send("Error");
            } else {
                console.log("Connected to MongoDB successfully"); // Log when connected
                let dbObj = dbc.db("config");
                dbObj.collection('friends').find().toArray((err, result) => {
                    if (err) {
                        console.error("Error fetching data from MongoDB:", err);
                        res.status(500).send("Error");
                    } else {
                        res.send(result);
                    }
                    dbc.close(); // Close the connection after using it
                });
            }
        });
    });

module.exports = satyam;
