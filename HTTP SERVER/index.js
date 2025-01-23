const http = require("http")
const fs = require("fs")
const url = require("url")

const myServer = http.createServer((req , res)=>{    
   
    if(req.url === "/favicon.ico") return res.end()
    
    const detail = `${Date.now()}: new request found ${req.method} \n`
    const myUrl =  url.parse(req.url,true)
    console.log(myUrl);
    const pathQuery = `Path: ${myUrl.pathname}\nQuery 1: ${myUrl.query.id}\nQuery 2: ${myUrl.query.name}\n`
    console.log(pathQuery);
    
        

    fs.appendFile("./text.txt", detail+pathQuery, (err )=>{
        if(err){
            console.log(err);
        }
        else{
            res.end(`All Good, ${myUrl.query.name}`)
        }
    })

    // fs.readFile("./text.txt",'utf-8',(err,data)=>{
    //     if(err){
    //        console.log("Error"+ err);
    //     }
    //     else{
    //         console.log(data);    
    //     }
    // })

})

myServer.listen(8000)