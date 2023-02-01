/**
 * Barinas 27-12-2022 
 * 
 * CURSO DE NODE.JS
 * PROFESOR: PABLO ESPAÑA BRAVO
 * @video 6.4
 * 
 * @_Creacion_de_rutas
 *      - Para crear las rutas primero procedemos a crear un directorio donde estran todas las rutas de la 
 *        app y debe estar ubicada en ./src/routes
 *      - Por estandar el archivo se crea con el nombre del modelo a solicitar ejemplo: users.js
 *        en ese archivo estaran todas las rutas que tengan que ver con los usuarios
 */
// En la configuracion de las rutas necesitamos requerir
// Express, despues asignar el modulo de 'Router' que posee 'Express' a una constante
// que por convencion la llamaremos 'router'
const express = require('express')
const { appendFile } = require('fs')
const router =  express.Router()
// Tambien requerimos de acciones en nuestras rutas 
// por lo tanto requerimos de controladores en este caso el controlador de 'users'
const { getAdmin, login, register } = require('../controllers/users')
// Declaramos las rutas
router.get('admin', getAdmin)
router.post('login', login)
router.post('register', register)
// exportamos para poderdarle uso en la app
module.exports = router

// Despues de exportar nos dirigimos al main (./src/index.js) de la app
// y requerimos las rutas y las usamos
const userRoutes = require('./routes/users')
// usamos
app.use(userRoutes)