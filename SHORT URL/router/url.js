const express = require('express')
const {handleCreateKeyOfUrl,handleShowVisitHistory,handleRedirectToUrl} = require('../controller/url')

const router = express.Router()

router.route('/').post(handleCreateKeyOfUrl)
router.route('/:key').get(handleRedirectToUrl)
router.route('/analytics/:id').get(handleShowVisitHistory)


module.exports = router