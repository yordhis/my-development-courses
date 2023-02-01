/**
 * 16-01-2023
 * Profesor: Pablo España
 * @Video_1
 * 
 * @_EXPRESS
 * 
 */
/** @_Paso_1 @Instalacion_global_de_express_genereitor */
// comando-> npm i express-generator -g

/** @_Paso_2 @Generamos_el_proyecto_de_express */
// comando-> npm express --view=ejs myapp

// --view=ejs : Esto le dice a expres que todos los archivos de la vista seran
// con extencion .ejs en ves de html

// Por consiguiente, esto genera un proyecto en express de manera automatica
// con toda la arquitectura de directorios y archivas para del desarrollo

/** @Solucion_de_restriccion_de_windows */
// Por otra parte debemos asignarle unos permisos de express a nuestra pc desde POWERSHELL
// entonces abrimos el -> Power-shell o consola de comandos
// escribimos -> ExecutionPolicy Unrestricted

/** @_Paso_3 @_Instalar_las_dependencias */
// comando-> npm install

/** @_Ver_configuraciones_locales_de_la_app */
// Codigo-> console.log(app.locals.settings) 
// esto mostrarapor consola un objeto de la configuracion global
/** @_Set_y_Get_de_la_configuracion_local */
// SET
// Codigo-> app.set('port', 3000)  
// Codigo-> app.set('title', 'Mi app')
// GET
// Codigo-> app.get('port')
// Codigo-> app.get('title')

/** @_Redireccionamiento_con_express_o_ROUTES */
// Codigo-> app.Method(route, callback)
// Codigo-> app.get(/, (req, res)=>{ res.send('Bienvenido') })

/** @_Parametros_REQ_Y_RES_de_express */
// Codigo-> app.get(/, (req, res)=>{ 
    // console.log(req.url)
    // console.log(req.body)
    // console.log(req.param)
    // console.log(req.query)
    //  
// })