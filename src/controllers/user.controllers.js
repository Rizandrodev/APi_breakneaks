function create(req,res){
    const {name,username,email,idade,password,background,avatar,img} = req.body;

    if(!name||!email||!password || !username || !idade || !background){
        return res.status(401).send({message:"falta dados aqui... "})
    }
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