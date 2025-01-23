const express = require('express')
const users = require('./MOCK_DATA.json')
const app = express();

app.get('/api/users',(req,res)=>{
    res.json(users)
})


app.get('/api/users/:id',(req,res)=>{
    const id = Number(req.params.id)
    const user = users.find( (user) => user.id === id)
    return res.send(user)
})

// app.get('/api/users/:name',(req,res)=>{
//     const name = req.params.name
//     const user = users.find( (user) => user.first_name === name)
//     return res.send(user)
// })


app.listen('8000')

// app.get('/',(req,res)=>{
//     res.send(`Welcome, Home ${req.query.name}`)
// })


// app.get('/search',(req,res)=>{
//     res.send(`Welcome, in ${req.path} \n The ${req.query.search} is Search by ${req.query.name}`)
// })


