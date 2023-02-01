/**
 * Barinas 27-12-2022 
 * 
 * CURSO DE NODE.JS
 * PROFESOR: PABLO ESPAÑA BRAVO
 * @video 6.2
 * 
 * @_Configuracion_y_Conexion_DB
 * 
 * @_Configuracion
 *      - La configuracion se puede visualizar en el ./src/index de la app desarollada
 *  
 */

/** @conexion_DB_mongo */

const mongoose = require('mongoose')

const connection = mongoose.connect(`mongodb://127.0.0.1:27017/jwdb`)
.then((db)=>{
    console.log('Conexión exitosa')
})
.catch((err)=>{
    console.log('Ha ocurrido un error al conectarse '+ err)
})

module.exports = {
    connection
}

/** 
 * Despues de configurar nuestra conexion la requerimos en el index de nuestra app
 */