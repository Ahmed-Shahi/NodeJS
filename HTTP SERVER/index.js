const http = require("http")
const fs = require("fs")

const myServer = http.createServer((req , res)=>{    
   
    const detail = `${Date.now()}: ${req.url} new request found \n`
   
    fs.appendFile("./text.txt", detail, (err )=>{
        if(err){
            console.log(err);
        }
        else{
            res.end("All Good")
        }
    })

    fs.readFile("./text.txt",'utf-8',(err,data)=>{
        if(err){
           console.log("Error"+ err);
        }
        else{
            console.log(data);    
        }
    })

})

myServer.listen(8000)