const route=require('express').Router()
const userControllers=require('../controllers/user.controllers')

route.post('/',userControllers.create)

module.exports=route