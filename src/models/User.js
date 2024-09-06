const mongoose = require('mongoose')
//const { use } = require('../routes/user.routes')

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    background:{
        type:String,
        required:true
    }
})

const User = mongoose.model("User", UserSchema)

module.exports = User