const Userservice=require("../service/User.service")

async function create(req,res){
    const {name,username,email,idade,password,background,avatar,img} = req.body;

    if(!name||!email||!password || !username || !idade || !background){
        return res.status(401).send({message:"falta dados aqui... "})
    }
     const user =await new Userservice.Create(req.body)
        res.status(201).send({
            message:'sucessfull',
            user:{
                name,
                username,
                email,
                idade,
                password,
                background,
                avatar
            }
        })

}

module.exports={create}