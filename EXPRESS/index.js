const express = require('express')
const fs = require('fs')
const users = require('./MOCK_DATA.json');
const app = express();

// Middleware
app.use(express.urlencoded({extended : false}))

app.get('/api/users',(req,res)=>{
    res.json(users)
})


app.get('/api/users/:id',(req,res)=>{
    const id = Number(req.params.id)
    const user = users.find( (user) => user.id === id)
    return res.send(user)
})

app.post('/api/users',(req,res)=>{
    const body = req.body
    users.push({id : users.length + 1,...body})
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users),(err,data)=>{
        
        return res.json({status : "Done!!"})
   
    })
})

app.delete('/api/users',(req,res)=>{

    const body = Number(req.body.ID)    
    const user = [users.find((u)=> u.id === body)]
    const index = [users.findIndex((u)=> u.id === body)]
    

    users.splice(index,1)
    
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users),(err,data)=>{
        
        return res.json({status : "Done!!"})
   
    })

})

app.listen('8000')

// app.get('/',(req,res)=>{
//     res.send(`Welcome, Home ${req.query.name}`)
// })


// app.get('/search',(req,res)=>{
//     res.send(`Welcome, in ${req.path} \n The ${req.query.search} is Search by ${req.query.name}`)
// })


