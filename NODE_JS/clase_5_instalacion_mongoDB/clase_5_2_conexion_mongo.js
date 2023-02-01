/**
 * Barinas 21-11-2022 
 * 
 * CURSO DE NODE.JS
 * PROFESOR: PABLO ESPAÑA BRAVO
 * @video 5.2
 * 
 * @_CONEXION_A_MONGODB
 * 
 *      @_PASO_1    Configuramos el archivo /src/config.js de nuestra app
 *                  Quedaria de la siguiente manera:
 */
            module.exports = {
                mysql_database: {
                    host: "localhost",
                    user: "root",
                    pass: "",
                    database: "to-do-list"

                },
                mongodb: {
                    host: "localhost",
                    user: "",
                    pass: "",
                    database: "mydb",
                    port: 27017
                }
            }
 /**  
 *      @_PASO_2    Despues nos dirigimos a configurar el archivo ubicado en
 *                  src/connection.js
 * 
 *                  Pero antes debemos instalar el paquete @mongoose que gestionara 
 *                  todo con la base de datos mongoDB, con el siguiente comando:
 * 
 *                  <comando----> npm install mongoose <----/comando>
 * 
 *                  Despues de tener instalado @mongoose lo debemos requerir en el archivo src/connection.js
 *                  y realizamos la conexion y quedaria de la siguiente manera
 */
                    const mongoose = require('mongoose')
                    const { mongodb } = require('./config')
                    
                    
                    const connection = mongoose.connect(`mongodb://${mongodb.host}:${mongodb.port}/${mongodb.database}`)
                    .then((db)=>{
                            console.log('Conexión exitosa')
                    }).catch((err)=>{
                            console.log('Ha ocurrido un error en la conexión. Error: ' + err)
                    })

 /**                  
 * 
 *      @_PASO_3    Y debemos requerir la @const connection en el @main o @index y 
 *                  y despues correr la app y verificar que todo este bien
 * 
 *                  
 * 
 */