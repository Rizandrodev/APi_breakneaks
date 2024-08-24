const express=require('express')
const app=express()
const userRoute=require('./src/routes/user.routes')
app.use(express.json())

app.use('/user',userRoute)
app.listen(8080,()=>console.log('server rodando na porta 8080'))

