/**
 * Barinas 1-09-2022 
 * 
 * CURSO DE NODE.JS
 * PROFESOR: PABLO ESPAÑA BRAVO
 * @video 3.1
 * 
 * @_ROUTERS_EXPRESS
 * 
 * @_1 Crear un directorio que contenga todas las rutas ./src/routes
 * 
 * @_2 Crear un archivo @_users donde se configura todas las rutas de usuarios ./src/routes/users.js
 * 
 * @_3 Configuramos las rutas de los usuarios @_importanto el modulo de @_express
 * Ejemplo:
 * </ const express = require("espress") >
 * 
 * @_4 Asignamos el metodo del modulo de @_express_Router
 * ejemplo:
 * </ const router = express.Router() >
 * 
 * @_5 configurar rutas y sus acciones 
 * Ejemplo:
 * </
 *   router.get("/users", (req, res) => {
 *      res.send('Todos los Usuario express')
 *   })
 * >
 * 
 * @_6 Exportamos la rutas de users.js
 * ejemplo:
 * </ module.exports = router >
 * 
 * @_7 en el index.js debemos @_importar las rustas
 * Ejemplo:
 * </ const user = require('./routes/users') >
 * 
 * @_8 Usamos las @rutas en nuestra @app  
 * Ejemplo:
 * </ app.use(user) >
 *
 * 
 * @_9 Simplificamos las rutas creando controladores para eso creamos un directorio /controllers 
 *     y alli creamos el controlador @_users quedaria asi controller/users.js
 * 
 * @_10 Crear los metodos de las rutas
 * ejemplo:
 * 
 * </
 * const getUsers = (req, res) => {
 *      res.send('Todos los Usuario express')
 * }
 *
 * const createUser = (req, res) => {
 *      res.send('Crear Usuario express')
 * }
 *
 * const updateUser = (req, res) => {
 *      res.send('Modificando Usuario express')
 * }
 *
 * const deleteUser = (req, res) => {
 *      res.send('Eliminando Usuario express')
 * }
 * 
 * >
 * 
 * @_11 Exportamos </ module.exports = { getUsers, createUser, updateUser, deleteUser } >
 * 
 * @_12 Requerimos el modulo de los controladores @_users en las @_router
 * Ejemplo: 
 * </ const userController = require('../controllers/users') >
 * 
 * @_13 Configurar las rutas con los controladores
 * Ejemplo:
 * </ 
 *  router.get( "/all", userController.getUsers )
 *  router.get( "/create", userController.createUser )
 *  router.get( "/update",userController.updateUser )
 *  router.get( "/delete", userController.deleteUser ) 
 * >
 * 
 */