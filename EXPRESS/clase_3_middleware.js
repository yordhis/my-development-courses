/**
 * 17-01-2023
 * Profesor: Pablo España
 * @Video_3
 * 
 * @_MIDDLEWARE
 *      CREACION Y USO DE LOS MIDDLEWARE
 *      
 * - PERMITE MANEJAR ERRORES
 * - VALIDAR SESIONES (LOGIN)
 * 
 */
/** Creando el primer middleware @_video_3_2 */
// este es un middleware a nivel de aplicacion
const logger = (req, res, next)=>{
    const userLoggued = true // false
    if (userLoggued) {
        next()
    } else {
        res.send('Inicie sesion por favor.')
    }
}

app.use(logger)

/** @var Middleware_para_rutas_espesificas @_video_3_4 */ 
// estos middleware son a nivel de rutas
// Primero creamos un directorio donde deben estar todas las rutas
/** directorios @routes / @users */
// y creamos el middleware directamente en la ruta y lo usamos
    const express = require('express')
    const router = express.Router()
    const loggerRouteUser = (req, res, next)=>{
        const userLoggued = true // false
        if (userLoggued) {
            next()
        } else {
            res.send('Inicie sesion por favor.')
        }
    }

    router.get('/users', loggerRouteUser, (req, res)=>{
        res.send('Bienvenido user')
    })

    module.exports = router

    /** en el @index_js requerimos y usamoe la ruta */
    const userRoutes = require('./router/users')
    app.use('prefijo', userRoutes)

/** @var Middleware_manejo_de_errores @_video_3_5 */ 

    // creamos la funcion que va a manejar los errores 
    // este middleware posee 4 parametros
    const errorHandling = (err, req, res, next)=>{
        res.status(500).send("Ha ocurrido un error")
        next()
    }

    // usamos el manejador de errores
    // para que el manejador de errores funcione correctamente
    // se debe usar a lo ultimo de todas las rutas
    app.use(errorHandling)

/** @var Uso_de_Middleware__de_terceros @_video_3_6 */ 

// middleware de express
    app.use(express.static(path.join(__dirname, 'public')))
    app.use(express.urlencoded({extended: false}))

// Middleware de tercero (morgan)
// instalamos el paquete
// comando -> npm i morgan
    const morgan = require('morgan')
    app.use(morgan('dev'))