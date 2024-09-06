const express=require('express')
const app=express()
const {conectDB}=require('./src/database/db')

const userRoute=require('./src/routes/user.routes')

//const conectDB = require('./src/database/db')
conectDB()

app.use(express.json())
app.use('/user',userRoute)
app.listen(8080,()=>console.log('server rodando na porta 8080'))

