/**
 * Barinas 17-08-2022 
 * 
 * CURSO DE NODE.JS
 * PROFESOR: PABLO ESPAÑA BRAVO
 * @video 2.1
 * 
 * @_USO_DEL_PAQUETE_HTTP
 * 
 * - Esto es el servidor que debemos configurar en un puerto
 * 
 * @const http = require('http'),
 *      server = http.createServer()
 *      
 *      server.listen(3000) // el metodo listen resibe el puerto donde se va aejecutar el servidor
 * 
 * @video 2.2
 * 
 * @_Request_y_Response
 * - Esto es lo que el servidor recibe y envia
 * 
 * @_Request
 * - Es toda la solicitud del cliente al servidor 
 *   Y la solisitud se puede apreciar con un: 
 *   </ conose.log(request) > // Muestra todo lo que hay en la solicitud
 *   </ conose.log(request.headers.host) > // Aqui podemos visualisar el puerto donde se esta ejecutando el servidor
 *   </ conose.log(request.url) > // Muestra la url del servidor
 *   </  console.log(req.method) > // Muestra el metodo de la solicitud del cliente
 * 
 * @_Response
 * - Esto es la respuesta del servidor para el cliente
 * 
 * </ res.setHeader('Content-type', "text/plain") > // Aqui seteamos una cabesera espesificanto el tipo de contenido 
 * </ res.setHeader('Content-type', "text/html") > // Aqui seteamos una cabesera espesificanto el tipo de contenido 
 * </ res.write('Bienvenidos al curso de node.js') > // el @write nos permite escribir en el DOM una respuesta 
 * </ res.end() > // el @end finaliza la respuesta 
 * 
 * @video_2_3
 * 
 * @_importar_archivos
 * - usamos el modulo que viene de manera nativa en node.js que es:
 * @module fs 
 *      </ const fs = require('fs') >
 * 
 * @_La_formaa_de_leer
 * - </
 *      fs.readFile('index.html', (err, content)=>{
 *          res.setHeader('Content-type', "text/html")
 *          res.write(content)
 *          res.end()
 *      })
 *  >
 * 
 */ 