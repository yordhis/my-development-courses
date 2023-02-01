/**
 * Barinas 1-09-2022 
 * 
 * CURSO DE NODE.JS
 * PROFESOR: PABLO ESPAÑA BRAVO
 * @video 4.3
 *
 * @_PASO_1
 *      DEBEMOS REQUERIR LA CONEXION EN EL CONTROLADOR DONDE VAMOS A REALIZAR LAS
 *      LAS INSERCIONES Y CONSULTAS
 *      
 *      DESPUES CREAMOS UNA VAARIABLE QUE CONTENGA LA SENTECIA @SQL
 *      YA CONFIGURADA LA SENTECIA SQL SE PROCEDE A EJECUTAR LA SENTENCIA
 *      CON LA CONEXION QUEDARIA DE LA SIGUIENTE MANERA
 */

    const connection = require('./connection')
    // EN ESETE CONTROLADOR SE ESTA REALIZANDO UNA CONSULTA A LA TABLA DE USERS (USUARIOS)
    const getUsers = (req, res) => {

        const sql = 'SELECT * FROM users'
        connection.query(sql, (err, result)=>{
            if (err){
                console.log('Ha ocurrido un error en la consulta de usuarios')
            }else{
               res.render('users', {users: result})
            }
        })
    }
    
/**
 * @_PASO_2
 *      PROCEDEMOS A REALIZAR UNA INSERCION DE DATOS A LA DB
 *      
 *      @_PRIMERO PROCEDEMOS A VERIFICAR QUE LOS DATOS QUE SE ENVIAN SE ESTAN RECIVIENDO
 *      
 *      @_DOS PROCEDEMOS A REALIZAR LA CONFIGURACION DEL SQL
 *      
 *      @_TRES SE EJECUTA LA SENTENCIA
 * 
 * 
 * 
 */