const mongoose = require('mongoose')
const { mongodb } = require('./config')


const connection = mongoose.connect(`mongodb://${mongodb.host}:${mongodb.port}/${mongodb.database}`)
.then((db)=>{
        console.log('Conexión exitosa')
}).catch((err)=>{
        console.log('Ha ocurrido un error en la conexión. Error: ' + err)
})

module.exports = connection