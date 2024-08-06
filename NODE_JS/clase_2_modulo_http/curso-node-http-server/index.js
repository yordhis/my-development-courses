/**
 * Se requieren todo los pack a usuar
 */
const http = require('http')

/** 
 * @_Parametros_query 
 * Son los datos que se envian por url:
 * http://localhost:5000?email="data"
 * 
 * para manipular las url se usa la libreria @url nativa de node
 * 
*/
const url = require('url')


const port = 5000,
host = "localhost"

const server = http.createServer((request, response) => {
    try {
  
        /** 
         * Configuramos los parametros para poderlos usar
         */
        const parseURL = url.parse(request.url, true)
        /** 
         * Desestructuramos lo que se parsea en la @const parseURL 
         */
        const { name } = parseURL.query


        /**
         * En la siguiente sección se manejan las peticiones HTTP
         * @param POST
         * @param GET
         */

        if (request.url == '/' && request.method == "GET") {
            console.log("Entro al metodo get");
            response.statusCode = 200
            response.end(JSON.stringify({message: "Accediendo a la app"}))
            
            
        } else if(parseURL.pathname == "/profile" && name){

            response.end(JSON.stringify({message: name}))

        }else if(request.url == "/register" && request.method == "POST"){

            let body = ''
            /** 
             * Primero creamos un evento que escucha la entrada de datos @_on ()
             * y la seteamos en la @var body
             */
            request.on('data', (data) => {
                body += data
            })

            /**
             * Despues se crea otro evento que escuche la finalizacion del primer evento
             */
            request.on('end', () => {
                /** Convertimos el JSON recibido a un objeto de js */
                const parsedData = JSON.parse(body)
                /** Destructuramos el objeto recibido en variables independientes */
                const { username, email } = parsedData

                /** Respuesta */
                console.log(username + " - " + email)
                response.statusCode = 201
                response.end(JSON.stringify({ message: "Usuario registrado correctamente."}))
            })


        } else {

            response.statusCode = 404
            response.end(JSON.stringify({message: "No se hallo este sitio xP"}))

        }


    } catch (error) {
        /** manejo de errore con los codigo de error */
        response.statusCode = 500 
        response.end(JSON.stringify({message: `Error interno del servidor. Descripcion del error: ${error.message.toUpperCase()}.`}))
    }
})

server.listen(port, host,() => {
    console.log(`Servidor corriendo en http://${host}:${port}`)
})