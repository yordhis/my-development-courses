/**
 * Barinas 1-09-2022 
 * 
 * CURSO DE NODE.JS
 * PROFESOR: PABLO ESPAÑA BRAVO
 * @video 3.5
 * 
 * @_MIDDLEWARE
 * @_ARCHIVOS_ESTATICO
 * 
 * Estos son los JS, HTML, CSS  para el frontend
 * 
 * PASO 1. Se crear dentro del 
 * @_SRC / el directorio 
 * @_PUBLIC
 * Tambie se crea @_CSS Y @_JS Y EN LA RAIZ SE
 * DEJAN LOS @_HTML
 * 
 * PASO 2. Se crea la ruta estatica con @_EXPRESS usando el __dirname
 * el __dirname = C:\xampp\htdocs\curso-js\NODE_JS\clase_3_express\app\src
 * y el @_Public es donde tenemos los archivos estaticos
 * app.use(express.static(__dirname+'/public'))
 * 
 * @_Y_la_otra_forma_de_hacer_esto_
 * 
 * @_IMPORTAR_modulo_PATH
 * 
 * const path = require('path')
 * 
 * @_Y_SE_USA_
 * app.use(express.static(path.join(__dirname, 'public')))
 * 
 * 
 */