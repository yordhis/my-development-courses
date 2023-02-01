/**
 * 19-01-2023
 * Profesor: Pablo España
 * @Video_7
 * 
 * @_VARIABLE_DE_ENTORNO
 * 
 */

// Accediendo a nuestra variable de entorno
console.log(process.env) // esto muestra por consola el objeto
console.log(process.env.PORT) // aqui intentamos acceder al puerto de la app

// Crear variable sde entorno
// windows
    set PORT=5000
// Linux
    export PORT=5000

/** @var package.json */
// Creamos un nuevo SCRIPT que ejecute la variable de entorno PORT
{
    "scripts":{
        start: "set PORT=5000 && node index.js",
        test: "mocha test/users.test.js --exit"
    }
}

// Para evitar de estar configurando desde mi package.json el puerto de 
// segun el sistema operativo. Usamos el modulo de cross-env
npm i cross-env

{
    "scripts":{
        start: "coss-env PORT=5000 node index.js",
        test: "mocha test/users.test.js --exit"
    }
}

// Este caso es util hasta que necesitemos mas variables de entorno 
// para no hacer que nuestro SCRIPT START no tenga mas lineas de codigos
/** @_Instalar el modulo @var dotenv */

// Ahora creamos un archivo que contendra todas las variables de entorno
.env // en la raiz de la app y alli colocamos todas nuestras variables de entorno

// Para usar estas varaibles de entorno debemos requerir o importar las en el index.js
require('dotenv').config()
console.log(process.env.PORT)

app.set('port', process.env.PORT || 3000)


/**
 *  @param Consumiendo_database_de_mongo_en_la_nube
 *  @link  https://www.mongodb.com/cloud/atlas     ***********************************************/

 /**
  * @var LOGIN
  * 
  * Email: cyberstaffoficial@gmail.com
  * password: Cs24823972**
  * 
  * username: osuna-dev
  * pass: tn3Eg3tVmQIWEvEX
  * 
  */

 /**
  * @_PASO_1 
  *     - Creamos un nuevo proyecto y dejamos todas las configuraciones por default
  * @_PASO_2 
  *     - Configuramos el Network Access
  *     - Le damos permitir todas las ipes
  *     - Y el estatus debe estar en activo
  * 
  * @_PASO_3 
  *     - Nos dirijimos a CLUSTERS
  *     - Presionamos donde dice COLLECTIONS 
  *     - Procedemos a crear una collection y database
  * 
  */

 /** @_PASO_4  */
 // creamos un archivo de configuracion
 config.js
    module.exports = {
        mongodb:{
            host: 'data-icss.khys8fs.mongodb.net',
            user: 'osuna-dev',
            password: "tn3Eg3tVmQIWEvEX",
            database: 'curso-express',
        }
    }
 config.js // conexion utilizando las variables de entorno
    module.exports = {
        mongodb:{
            host: process.env.HOST,
            user: process.env.USER,
            password: process.env.PASSWORD,
            database: process.env.DATABASE,
        }
    }

    // para colocar el host debemos ir a nuestro mongoCloud
    // seleccionamos conectar para que nos genere una url y dentro
    // de la url podemos detectar el host y copiar lo --> data-icss.khys8fs.mongodb.net <--

// despues en otro archivo con nombre connection.js ejecutamos la conexion
connection.js
    const mongoose = require('mongoose')
    const mongodb = require('./config')

    const connection = mongoose.connect(`mongodb+srv://${mongodb.user}:${mongodb.password}@${mongodb.host}/${mongodb.database}`)
    .then(()=>{
        console.log('Conexion exitosa')
    }).catch((err)=>{
        console.log('Error en la conexion: ' + err)
        
    })

    module.exports = connection