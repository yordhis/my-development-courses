/**
 * Barinas 1-09-2022 
 * 
 * CURSO DE NODE.JS
 * PROFESOR: PABLO ESPAÑA BRAVO
 * @video 4.2
 * 
 * @_CLASE_DE_CONEXION_A_BASE_DE_DATOS_EN_NODE_JS
 * 
 * @PASO_1 CREAR UN ARCHIVO EN LA RAIZ APP/ CON NOMBRE @CONGIF_JS
 *         DENTRO DEL ARCHIVO DEBEMOS CREAR UN MODULO QUE RETORNE
 *         UN @OBJETO  CON LA CONFIGURACION DE LA CONEXION
 *         DE LA SIGUIENTE FORMA:
 * 
 */
module.exports = {
    mysql_database: {
        host: "localhost",
        user: "root",
        pass: "",
        database: "mydb"

    }
}

/**
 *  * @PASO_2 CREAR UN ARCHIVO EN LA RAIZ APP/ CON NOMBRE @CONNECTION_JS
 *         DENTRO DEL ARCHIVO DEBEMOS REQUERIR EL MODULO (MYSQL) Y PARA ESO DEBEMOS
 *         INSTALAR EL MODULO POR LA NPM
 * 
 *         @_INSTALANDO_EL_MODULO_DE_MYSQL
 *      
 *         <comando> npm i mysql </comando>
 * 
 *    @_DESPUES_REQUERIMOS_EL_MODULO_MYSQL 
 *      
 *     Y TAMBIEN REQUERIMOS LA CONFIGURACION DE LA CONEXION
 *      EL ARCHIVO CONNECTION.JS QUEDARIA DE LA SIGUIENTE MANERA
 *  
 */

const mysql = require('mysql')
const { mysql_database } = require('./config')

const connection = mysql.createConnection(mysql_database)

connection.connect((error, conn)=>{
        if (error){
            console.log('Ha ocurrido un error al conectarse a la base de datos.')
        }else{
            console.log('Conexion exitosa')
            return conn
        }
})

module.exports = connection