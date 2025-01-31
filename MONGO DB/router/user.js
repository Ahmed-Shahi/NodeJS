const express = require('express')
const {handleUpdateUserById,handleCreateNewUser,handleShowAllUser,handleDeleteUserById} = require('../controller/user')
const router = express.Router()


router.post('/', handleCreateNewUser)
.get('/', handleShowAllUser)
.delete('/',handleDeleteUserById)  
.patch('/',handleUpdateUserById )  


module.exports = router