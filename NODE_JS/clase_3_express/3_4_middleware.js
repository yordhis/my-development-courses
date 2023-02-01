/**
 * Barinas 1-09-2022 
 * 
 * CURSO DE NODE.JS
 * PROFESOR: PABLO ESPAÑA BRAVO
 * @video 3.4
 * 
 * @_MIDDLEWARE
 * 
 *  ES UN INTERSEPTOR DE PETICIONES Y RESPUESTAS QUE SE USA COMUNMENTE PARA 
 *  VERIFICAR SI UN USUARIO ESTA LOGEADO O NO.
 * 
 * @_1 CREAMOS EL DIRECTORIO DE /MIDDLEWARE
 * 
 * @_2 CREAMOS EL ARCHIVO logged.js SE CONFIGURA EL METODO Y SE EXPORTA
 * 
 * const isLogged = (req, res, next) => {
 *  let logged = false
 *   if ( logged ) {
 *       next()
 *   } else {
 *       res.send('No se puede acceder, Debe logearse')
 *   }
 * }
 *
 * exports.isLogged = isLogged
 * 
 * @_3 IMPORTAMOS Y USAMOS 
 * 
 * IMPORTAR
 * const loggedMiddleware = require('./middlewares/logged')
 * 
 * USAR
 * app.use(loggedMiddleware.isLogged)
 * 
 */