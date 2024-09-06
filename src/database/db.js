const mongoose=require('mongoose')
function conectDB(){
    console.log('Connecting to the database...');
    mongoose.connect('mongodb+srv://carvalhorizandro:rSt1yaYpzumVufGN@cluster1.xal5r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1')
        .then(() => {
            console.log("mongodb atlas connected");
        })
        .catch((error) => {
            console.error("Erro ao conectar ao MongoDB Atlas:", error);
        });
}


module.exports={conectDB}