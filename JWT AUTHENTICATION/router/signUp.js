const express = require("express")
const {handleCreateNewUser,handleLoginUser} = require("../controller/signUp")

const router =  express.Router()

router.route('/').post(handleCreateNewUser)
router.route('/').get(handleLoginUser)
module.exports = router