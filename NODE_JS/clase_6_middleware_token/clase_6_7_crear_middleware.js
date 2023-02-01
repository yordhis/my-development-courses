/**
 * Barinas 05-01-2023 
 * 
 * CURSO DE NODE.JS
 * PROFESOR: PABLO ESPAÑA BRAVO
 * @video 6.7
 * 
 * @_Crean_y_manejar_token_desde_middleware
 * 
 */
/** 
 * @_Paso_1 Crear un directorio en la raiz de SRC con el nombre middleware
 *          y generamos un archivo con un nombre descriptivo de lo que va a hacer el middleware
 *          @verifyToken
 */

/**
 * @_Paso_2 Configurar el middleware para la validacion del token enviado
 */
// Por estandar el nombre del archivo debe ser igual al middleware
    const verifyToken = (req, res, next)=>{
        // Obtenemos el token del header
        const authorization_header = req.headers['authorization']
        // Validamos que no sea indefinido
        if(authorization_header !== undefined){
            console.log(authorization_header)
            // limpiamos el token para solo poseer la cadena del token
            const token = authorization_header.split(" ")[1]
            // Asignamos el  token a la variable global req.token para 
            // poder solicitarlos en los controladores y rutas
            req.token = token
            // el next() es para decirle al middleware que continue con la solicitud del usuario
            next()
        }else{
            console.log("No ingreso el token")
        }
    }

    // exportamose le middleware
    exports.verifyToken = verifyToken

/**
 * @_Paso_3 Requerir y usar el middleware de verifyToken en nuestras rutas en este
 *          caso en las rutas del usuario
 */
    // requerimos
    const verifyToken = require('../middlewares/verifyToken')
    // usamos
    router.get('/admin', verifyToken.verifyToken, userController.getAdmin)

/**
 * @_Paso_4 configurar el controlador solicitado en la ruta para que verifique el 
 *          token recibido por la solicitud y rediriga o muestre la informacion
 */

const getAdmin = (req, res)=>{
    // usamos el paquete JWT con el metodo de verificacion verify()
    // el cual recibe tres parametros
    // param1: token, param2: la clave secreta, param3: callback
    // callback esta funcion retorna err, userData
    jwt.verify(req.token, 'secret-key', (err, userData)=>{
        if(err){
            res.send("ha ocurrido un error " + err)
        }else{
            res.json({
                message: "Todo esta correcto",
                data: userData
            })
        }
    })
}