/**
 * Barinas 27-12-2022 
 * 
 * CURSO DE NODE.JS
 * PROFESOR: PABLO ESPAÑA BRAVO
 * @video 6.3
 * 
 * @_Creacion_de_modelos
 *      - Un modelo es una representacion de un objeto que posee atributos 
 *        El cual recibe un @Schema o esquema de datos el cual estran conectados o relacionados 
 *        con la base de datos.
 */ 
// primero requerimos el paquete de mongoose
const mongoose = require('mongoose')
// Despues asignamos el prototimo Schema que nos provee mongoose
const Schema = mongoose.Schema
// A continuación porcedemos a crear el Schema Del usuario
// con la expresion NEW que nos indica que vamos a instanciar un nuevo esquema
const userSchema = new Schema({
    // Declaramos los atributos del esquema usuario esto estara relaciona con la DB
    name: String,
    email: String,
    password: String
})
// Ya para culminar creamos el Modelo de usuario
const User = mongoose.model('User', userSchema)
// por ultimo exportamos el modulo para darle uso en nuestra app
module.export = User

