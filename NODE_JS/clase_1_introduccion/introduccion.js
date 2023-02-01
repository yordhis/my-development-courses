/**
 * Barinas 17-08-2022 
 * 
 * CURSO DE NODE.JS
 * PROFESOR: PABLO ESPAÑA BRAVO
 * @video 1.1
 * 
 * @_INTRODUCCION_
 * 
 * ¿Que es Node.js?
 * 
 * - Es un entorno de ejecucion de JavaScript construido con el motor de javaScript V8 CHROME
 *
 * ¿Que es un motor?
 *  
 * es el encargado de convertir el lenguaje de programacion a lenguaje de maquina
 * basado en C++
 * 
 * ¿Quien lo creo?
 * - Lo creo RYAN DAHL 
 * 
 * ¿Como funciona?
 * - funciona en base a eventos y un evento puede ser considerado a una solicitud del cliente al servidor 
 * procesar imagenes, inserciones y mas...
 *
 * - Tiene un hilo de funcionamiento
 * 
 * es usado por paypal y otras empresas importantes
 *
 * 
 * 
 *  Procedemos a instalar el motor de NODE.JS desde su pagina oficial
 * 
 * @video 1.2 hasta 1.4
 * 
 * - Explica como se instala en windows y ubuntu
 * 
 * - tambien podemos ejecutar desde la consola CMD los archivo o programas ejemplo
 * 
 * - creamos un archivo en el escritorio (desktock)
 *      index.js
 *          console.log("Hola gente")
 * 
 * - para ejecutar el archivo escribimos node index.js o sin la extencion de igual manera se ejecuta
 *
 * @video 1.5
 * 
 * @_NPM_
 * 
 * - Es el manejador de paquetes por defecto de node.js
 * link: @www_npmjs_com 
 * - En este link se puede leer la documentacion de todos los modulos de npm
 * 
 * @param Para_empezar
 * 
 * - comandos: </ npm init --y  > Este comando lo que hace es crear el @packege_json
 * 
 * - Tambien podemos añadir @script en el @packege_json para ejecutar un archivo en espesifico
 *   como @index_js 
 *          "scripts": {
 *              "start": "node index.js"
 *          },
 * 
 * @_Como_podemos_instalar_un_modulo
 * 
 * - comando: </ npm install hola-mundo-nodejs > esto instal una dependencia que nos ayuda con el hola mundo
 *  
 * @_Instalar_NODEMON
 * 
 * - Esto se encarga de detectar los cambios y recargar el proyecto para visualisar 
 *   y evitar estar ejecutando cada rato npm start
 * 
 * - para instalar @nodemon </ npm install nodemon -D >
 * 
 * - Esta dependencia solo se usa en el entorno de desarrollo
 *  
 * - Para que nodemon quede funcionando en nuestro entorno de desarrollo
 *   se crea un @_script @param server
 *          "scripts": {
 *              "server": "nodemon index.js"
 *          },
 * 
 *  y esto se encargara de matener el proyecto actualizado a cada cambio
 * 
 * @_Correr_el_servidor_con_nodemon
 * 
 * - comando: </ npm run server >
 * 
 * 
 * 
 * 
 */