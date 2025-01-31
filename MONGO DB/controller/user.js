const User = require('../model/user')


async function handleCreateNewUser(req,res) {
    const body = req.body
    const result = await User.create({
        goodName: body.goodName,
        email : body.email,
    })
    console.log(result);
    
 return res.status(201).json({Message: 'ADDED!!!'})

}

async function handleShowAllUser(req,res) {
    const query = await User.find({})
    return res.json(query)
}

async function handleDeleteUserById(req,res) {
    const body = req.body.ID
    console.log(body);
    const query = await User.findByIdAndDelete(body)
    return res.json({Message:'Delete Successful!!'})
    
}

async function handleUpdateUserById(req,res) {
    const id = req.body.id
    const updateName = req.body.update
    const query = await User.findByIdAndUpdate(id,{goodName : updateName})
    return res.json({Message:'Update Successful!!'})

}

module.exports = {
    handleCreateNewUser,
    handleShowAllUser,
    handleDeleteUserById,
    handleUpdateUserById,
}