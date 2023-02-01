const mongoose = require('mongoose')
mongoose.set('strictQuery', false);
const connection = mongoose.connect(`mongodb://127.0.0.1:27017/jwdb`)
.then((db)=>{
    console.log('Conexión exitosa')
})
.catch((err)=>{
    console.log('Ha ocurrido un error al conectarse '+ err)
})

module.exports = connection
