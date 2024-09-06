const User =require("../models/User")

function Create(body){
    return User.create(body)
}


module.exports={Create}