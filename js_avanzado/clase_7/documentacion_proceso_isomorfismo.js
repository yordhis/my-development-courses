/**
 * 
 * Barinas, 03-08-2022
 * video 7.1
 * 
 * profesor: Jonathan Mircha
 * 
 * @_INTRODUCCION_A_ISOMORFISMO
 *
 * - ISOMORFICO = IGUALDAD DE FORMAS
 * 
 * - Codigo con el mismo lenguaje en el frontend, 
 *   el backend y la persistencia de datos
 * 
 *   hoy, solo se puede con Javascript
 * 
 *   @_BABEL
 *   @_ECMAScript_6
 *   @_BROWSERIFY
 *   @_NODE
 *   @_NPM
 *   @_EX (manejador de rutas)
 *   @_NODEMON (Es un script que permite observar cambios y levantas los cambios en el servidor)
 * 
 */

/**
 * video 7.2
 * 
 * @_CONFIGURACION_DE_
 * @_BABEL_NODE
 * @_BABEL
 * @_EXPRESS
 * 
 * 1- abrir terminal y ejecutar comando </ npm init >
 * 2- creamos un archivo babel con el comando </ touch babel.config.json > || </ touch .babelrc >
 * 3- Este archivo babelrc se registran los plugin con formato JSON 
 *    y se instancia { "presets": ["env"] }
 * {
    "presets": [
      [
        "@babel/preset-env",
        {
          "targets": {
            "edge": "17",
            "firefox": "60",
            "chrome": "67",
            "safari": "11.1"
          },
          "useBuiltIns": "usage",
          "corejs": "3.6.5"
        }
      ]
    ]
  }
 * 3.1- ejecutamos la instalacion de @babel </ npm install --save-dev @babel/core @babel/cli @babel/preset-env >
 * 3.2- instalamos @_EXPRESS npm i express
 * 4- Creamos las carpetas del entorno de trabajo como:
 * /workflow_isomorfico
 *    /public
 *      styles.css
 *      script.js
 *    /node_model
 *    /src
 *       /js (estos JS son los que el frontend necesita)
 *          index.js
 *          suma.js
 *          producto.js
 *          divicion.js
 *       /scss
 *          scss.js
 *       /views
 *          /includes
 *            layout.pug
 *          error.pug
 *          index.pug
 *       /app (backend con nodejs va estar aqui las peticiones a la DB)
 *          routes.js
 *    .babelrc (deprecado)
 *    babel.config.json
 *    package.json
 *    app.js
 *    server.js
 * 
 * 5- Configuramos /.babelrc
 *      - Importamos modulos:
 *      </ import express from 'express' > (Esto sin babel falla, porque node nativamente no puede compilar esto)
 *      para node seria -> </ const express = require('express') > pero esto ya esta deprecado
 * 
 *   video 7.3
 * 6- Terminamos de mandar a instalar el resto de dependencias como:
 * 
 *  </ npm i -D  node-sass-middleware pug serve-favicon nodemon >
 * 
 *  @_node_sass_middleware : este plugin se usa para compilar y trabajar con el framewor es para los estilos
 *  @_pug para el html
 *  @_serve_favicon se busca los favicon mas eficientes
 *  @_nodemon esto es para gestionar demonios esto permite mantener actualizada la app en cada
 *  cambion sin necesidad de estar prendiendo y apagando la app
 * 
 * @alert Tambien falto:
 * 
 *  @_ack_reload </ npm i -D ack-reload
 * 
 * 
 */

  /**
   * app.js
   *      </  @_Comenzamos_con_las_importaciones
   * 
   *          import express from 'express'
   *          import pug from 'pug'
   *          import favicon from 'serve-favicon'
   *          import sassMiddleware from 'node-sass-iddleware'
   *          import routes from './src/app/routes'
   * 
   *          @_Declarar_constantes
   * 
   *          const env = 'development',
   *                port = process.env.PORT || 3000,
   *                publicDir = `${__dirname}/public`, //Esto es la ubicacion publica de la app parte de ./workflow-isomorfico
   *                viewDir = `${__dirname}/src/views`, //Directorios donde va abuscar las vistas
   *                faviconDir = `${__dirname}/public/img/favicon.png`,
   *                app = express() // instanciamos express
   *                
   *                app
   *                   .set('view', viewDir)
   *                   .set('view engine', 'pug')
   *                   .set('port', port)
   *                   .set('env', env)
   * 
   *                   .use(sassMiddleware({
   *                        src: `${__dirname}/src/scss`,
   *                        dest: publicDir,
   *                        debug: false,
   *                        outputStyle: 'compressed',
   *                    }))
   *
   * video 7.4
   * 
   *        @_Establesemos_los_metodos_estaticos
   *        Nota: el pluin siempre se ejecuta antes de esto
   *                  
   *                    .use(express.static(publicDir))
   *                    .use(favicon(faviconDir))
   *                    .use( routes )
   * 
   *        @_configurar_los_errores_500_y_400
   * 
   *                    if( app.get('env') === 'production' ){
   *                      app.use( (req, res, next) => {
   *                        let err = new Error('Not Found')
   *                        err.status = 404
   *                        next(err)
   *                      })
   *                      
   *                      app.use(( err, req, res, next ) => {
   *                          res.status( err.status || 500 )
   *                          res.render( 'error', { err: err } )
   *                      })
   *                    }
   *      @_configurar_quien_va_a_escuchar_la_app_con_EXPORT
   * 
   *                    export default app
   * 
   * 
   *    // despues abrimos nuestro archivo server.js
   * 
   *                import http from 'http'
   *                import app from './app'
   *                import reload from 'ack-reload'
   * 
   *                const server = http.createServer(app)
   * 
   *   // para hacer que fincione el reload debemos usarla como un middleware
   *                
   *                 if( app.get('env') === 'development' ){
   *                    app.use( reload.middleware( `${__dirname}/public`, server ) )  // para produccion se comenta
   *                }
   *                server.listen( 
   *                  app.get('port'),
   *                  () => console.log( `Iniciando servidor en el puerto ${app.get('port')}` )
   *                )
   * 
   * 
   *    @Configurar_las_rutas
   *    archivo ROUTES.JS
   *                 import express from 'express'
   *                 const routes = express.Router()
   * 
   *                 routes
   *                    .get( '/', (req, res, next) => {
   *                      res.render('index', {
   *                        title: 'titolo home',
   *                        descripcion: 'Este es el home',
   *                      })  
   *                    })
   *                    
   *                    .get( '/about', (req, res, next) => {
   *                      res.render('index', {
   *                        title: 'titolo about',
   *                        descripcion: 'Este es el about',
   *                      })  
   *                    })
   * 
   * video 7.5
   * 
   *        @_Configurando_el_LAYOUT_PUG_platilla
   *        
   *        doctype html
   *        html( lang = "es" )
   *          head
   *            meta(charset = "utf-8")  
   *            meta(name = "viewport", content = "whidth=device-width, initial-scale=1")
   *            meta(http-equiv = "X-UA-Compatible", content= "IE=edge, chrome = 1")
   *            block metatags
   *            link(rel="stylesheet", href="./styles.css")  // esto va a estar en la carpeta public
   *          body
   *          block content
   *          script( src="/reload/reload.js" ) // para produccion se comenta
   *           script( src="./script.js" ) // esto va a estar en la carpeta public
   *
   * 
   *        @_Configurando_el_INDEX_PUG_platilla
   * 
   *        extends includes/layout.pug
   *        block metatags
   *          title = title
   *          meta( name="description", content=description )
   *        block content
   *          main.App
   *            h1=title
   *            p=description
   *            img(src="./img/edteam-logo.png")
   *  
   *        @_Configurando_el_ERROR_PUG_platilla
   * 
   *        extends includes/layout.pug
   *        block metatags
   *          title = `Error N° ${err.status}: ${err.message}`
   *          
   *        block content
   *          main.App
   *            h1=`Error N° ${err.status}: ${err.message}`
   *            div
   *              pre=err.stack
   * 
   *      @_confiurar_nodemon_dentro_de_package_json
   * 
   *      "script":{
   *          "server": "nodemon --watch src -e pug,scss,js,json --exec babel-node server.js"
   *      }
   * 
   * 
   *  video 7.6
   * 
   *      @_Instalamos_mas_dependencia_como_
   *      
   *      </ npm i -D browserify watchify babelify >
   * 
   *      @_Configurar_las_acciones_suma_resta_division_producto
   * 
   *      suma.js
   *        export function suma (a, b){
   *            return a+b
   *        }
   * 
   *      resta.js
   *        export function resta (a, b){
   *            return a-b
   *        }
   * 
   *      division.js
   *        export default function division (a, b){
   *            return a-b
   *        }
   *        export function modulo (a, b){
   *            return a % b
   *        }
   *      
   *      producto.js
   *        export default function producto (a, b){
   *            return a * b
   *        }
   *        export function cuadrado (a){
   *            return a * a
   *        }
   * 
   *        export function potencia (b, e){
   *            return Math.pow(b, e)
   *        }
   * 
   *      @_Desestructuracion_en_los_impor
   *      
   *      import React, {Components, Proptypes} from 'react'
   * 
   *      La destructuracion se usa cuando en un archivo no tengamos un expor por default
   * 
   *      @_Configuramos_browserify_para_recargar_vista_automaticamente
   * 
   *      "script":{
   *          "watchify": "watchify ./src/js/index.js -d -o ./public/script.js -t [ babelify --presets [ env ] -v ]"
   *          "browserify": "browserify ./src/js/index.js -d -o ./public/script.js -t [ babelify --presets [ env ] ]"
   *          "start": "npm run watchify | npm run serve"
   *          // | ejecuta uno o el otro simultaneo
   *          // & ejecuta uno y despues el otro
   *      }
   * 
   *      @_Manejador_de_todas_las_peticiones_
   *      
   *      index.js
   *        import { suma } from './suma'
   *        import resta from './resta'
   *        import division, { modulo } from './division'
   *        import producto, { potencia, cuadrado } from './producto'}
   * 
   *      nota: solo puede existir un solo expor default
   * 
   *      const c = console.log
   * 
   *      c( suma(6,4) )
   *      c( resta(6,3) )
   *      c( division(100,4) )
   *      c( modulo(5, 33) )
   *      c( cuadrado(5) )
   *      c( potencia(5) )
   *      c( producto(8, 8) )
   * 
   *     // alert("borwserify funcionando")
   * 
   * video 7.7
   *  nota: webpack: es un paquetador
   *    @_tarea_de_publicacion_desplegar_app
   *      
   *    1- instalamos </ npm i -D autoprefixer postcss uglify >
   * 
   *    @var autoprefixer: es un plugin de postcss
   *    @var uglify: es un plugin que permite mimificar el codigo js
   *            
   *    @_Configurar_comandos_en_package
   *      nota: no se debe escribir en el package cuando se este instalando
   *      una dependencia porque puede haber conflictos con las escritura del archivo
   *        
   *        package.json
   * 
   *        "script":{
   *          "uglify": "uglify ./public/script.js -c -o ./public/script.js",
   *          "autoprefixer": "postcss -u autoprefixer --autoprefixer.browsers \"> 5%, ie 10\" -r ./public/style.css ",
   *          "build": "npm run browserify && npm run uglify && npm run autoprefixer && babel-node server.js"
   *        }
   * 
   * 
   * 
   * 
   */