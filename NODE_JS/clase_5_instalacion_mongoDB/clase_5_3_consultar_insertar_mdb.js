/**
 * Barinas 21-11-2022 
 * 
 * CURSO DE NODE.JS
 * PROFESOR: PABLO ESPAÑA BRAVO
 * @video 5.3
 * 
 * @_INSERTAR_CONSULTAR_EN_MDB
 * 
 *      @_PASO_1    Creamos un directorio en src/models
 *        
 *      @_PASO_2    Importamos el modulo @mongoose
 * 
 *      @_PASO_3    Procedemos a crear uns @const Schema 
 * 
 *      @_PASO_4    Diseñamos el Esquema con una instancia de 
 *                  @const Schema y lo asignamos a la 
 *                  @const UserSchema
 * 
 *      @_PASO_5    Creamos el Esquema con el paquete de la 
 *                  @const mongoose.model('User', UserSchema)
 * 
 *      @_PASO_6    Exportamos el modelo o esquema 
 *                  
 *      @_PASO_7    Procedemos a requerir el @var Schema en el controlador deseado
 *      
 * 
 */

// Ejemplo:
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
        name: String,
        age: Number
})

const User = mongoose.model('User', UserSchema)
module.exports = User