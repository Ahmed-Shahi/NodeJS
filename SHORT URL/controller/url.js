const URL = require('../model/url')
const shortid = require('shortid')

async function handleCreateKeyOfUrl(req,res) {
    const body = req.body.Url
    
    if(!body){
        return res.status(400).json({Message: "Invalid Url"});
    }

    const shortId = shortid()
    const result = await URL.create({
        Key : shortId,
        Url : body,
        visitHistory : []
    } )
    return res.status(201).json({Message:'Successful!!!'})
}

async function handleRedirectToUrl(req,res) {

    const Key = req.params.key
    
    if(!Key)return res.status(400).json({Message: "Invalid Url"});
        
    const result = await URL.findOneAndUpdate({Key},{$push:{
        visitHistory:{
            visitTime : Date.now()
        }
    }})
    res.redirect(result.Url)
}

async function handleShowVisitHistory(req,res) {
    
    const Key = req.params.id;
    const result = await URL.findOne({Key})
    return res.json({TotalClicks : result.visitHistory.length})
}

module.exports ={
    handleCreateKeyOfUrl,
    handleRedirectToUrl,
    handleShowVisitHistory,
}