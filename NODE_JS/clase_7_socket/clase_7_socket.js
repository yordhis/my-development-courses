/**
 * Barinas 5-01-2023
 *  
 * 
 * CURSO DE NODE.JS
 * PROFESOR: PABLO ESPAÑA BRAVO
 * @video 7.1
 * 
 * @_Que_son_los_web_socket
 * 
 * 
 * 
 * @_Paquete
 * @var socket.io
 *      es unos de los motores mas viable y usados 
 *      para desarrollar chats, y app colaborativas
 * 
 */

/**
 * CURSO DE NODE.JS
 * PROFESOR: PABLO ESPAÑA BRAVO
 * @video 7.2
 * 
 * @_Configuracion_app
 *
 * @_Paso_1 
 *      @var Instalar_paquetes
 *      @param express
 *      @param socket.io
 * 
 *      code: npm i express sokect.io
 *  @_Paso_2
 *      @param nodemon 
 *      code: npm i nodemon -D
 *      
 *  @_Paso_3
 *      Despues de creamos una estructura de carpetas de la siguien
 *      manera:
 *      @param app
 *          @param node_module
 *          @param src
 *              @param public
 *                  @var index.html
 *                  @var index.js
 *                  @var styles.css
 *              @var index.js
 *              @var socket.js
 *          @var package.lock.json
 *          @var package.json
 *       
 *  
 */

/**
 * @video 7.3
 * 
 * @_Configuracion_servidor_con_socket_io
 *  
 */
/** Esta configuracion es del @var index.js */
    const express = require('express')
    const path = require('path')
    // debemos requerir http ya que el socket.io lo requiere
    // para ejecutarse
    const http = require('http')
    const socketio = require('socket.io')
    const app = express()

    app.set('port', 3000)
    app.use(express.static(path.join(__dirname, 'public')))

    // Creamos un servidor HTTP 
    const server = http.createServer(app)
    // Le decimos socket.io que use este server
    const io = socketio(server) 
    //requerimos el socket oonfigurado
    require('./socket')(io)


    server.listen(app.get('port'), ()=>{
        console.log('App corriendo en el puuerto: ' + app.get('port'))
    })

/** Esta configuracion es del @var socket.js */
module.exports = (io)=>{
    console.log('cargando socket...')
}


/**
 * @video 7.4
 * 
 * @_Configuracion_socket_y_conexiones
 *  
 */
/** @_Paso_1 */
/** Esta configuracion es del @var socket.js */
module.exports = (io)=>{
    io.on('connection', (socket)=>{
        console.log('Se ha conectado un usuario')
        socket.on('disconnect', ()=>{
            console.log('El usuario se deconectado X')
        })
    })
}

/** 
 * @_paso_2
 *      Nos dirigimos a la url del proyecto y copiamos
 *      @url localhost:3000/socket.io/socket.io.js 
 * 
 * @_Paso_3 
 *      Despues incluimos dentro del @var index.html
 *      los siguientes script:
 *      @script src="/socket.io/socket.io.js"
 *      @script src="index.js"
 * 
 * @_Paso_4
 *      Para tener el socket activo del lado del usuario
 *      creamos una constante en el @var index.js de la carpeta
 *      @param public
 *          
 */
/** Esta configuracion es del @var public__index.js */
    const socket = io()


/**
 * @video 7.5 y 7.6
 * 
 * @_Emitiendo_eventos_parte_1
 *  
 */
/** Esta configuracion es del @var public__index.html */
/**
 * @_Paso_1 crear el chat en el index
 * @_Paso_2 Le damos estilos al chat
 */

/** Esta configuracion es del @var public__index.js */
/**
 * @_Paso_3 configuramos para emitir un evento al presionar ENTER
 * 
 */
const socket = io()
const c = console.log 
// obtenemos los datos del chat
const username = document.getElementById("username")
const writeMessage = document.getElementById("writeMessage")
// escuchamos el evento del textarea
writeMessage.addEventListener('keyup', (event)=>{
    // Validamos que la tecla presionada sea enter para ejecutar la accion
    if(event.key == 'Enter'){
        // validamos que los campos tengan informacion
        if(username.value != "" && writeMessage.value != ""){
            // emitir eventos
            // el emit('nombre_del_evento', puede enviar: string, number, array y objetos)
            // en este caso enviamos un objeto
            socket.emit('message', {
                username: username.value,
                message: writeMessage.value.slice(0,-1)
            })
        }else{
            c("Ingrese los campos completo")
        }
    }
})
// Escuchamos el evento del servidor (message)
socket.on('messages', (messages)=>{
    let content = '' 
    // Recorremos el objeto de todos los mensajes
    for (let i = 0; i < messages.length; i++) {
        content += ` 
            <div class="message">
                ${messages[i].username}: 
                ${messages[i].message}
            </div>
            <br>
        `
        all_messages.innerHTML = content
        // configuracion del scroll
        all_messages.scrollTop = all_messages.scrollHeight
    }
})

/** Esta configuracion es del @var socket.js */
/**
 * @_Paso_4 configuramos para recibir y emitir un evento al presionar ENTER
 * 
 */
// exportamos el socket
module.exports = (io)=>{
    // declarando la variable que contendra todos los mensajes
    const messages = []
    // usuamos io.on connection para detectar quie se conecto
    io.on('connection', (socket)=>{
        console.log('Se ha conectado un usuario')
        // emitimos un evento desde el servidor
        io.emit('messages', messages)

        // escuchamos un evento den front-end
        socket.on('message', (data)=>{
            messages.push(data)
            // Emitimos un evento para todos los usuario
            io.emit('messages', messages)
        })
        // detectar si se desconecta
        socket.on('disconnect', ()=>{
            console.log('El usuario se deconectado')
        })

        
    })
}




/**
 * @video 7.7
 * 
 * @_Emitiendo_eventos_con_BROADCASTINT
 *  
 * Estos son eventos que se emiten para todos los usuario
 * menos para el usuario que lo emite
 */
/** @var index.js */
// escuchamos el evento de l text tarea si estan tipíando
writeMessage.addEventListener('keydown', (event)=>{
    if (username.value != '') {
        // emitimos un evento hacia el servidor
        socket.emit('writing', username.value)
    } else {
        errorNameUser.innerHTML = "Por favor ingrese su nombre de avatar"    
        setTimeout(()=>{
            errorNameUser.innerHTML = ""
        }, 3000)
    }
})

socket.on("writing", (username)=>{
    writing.innerHTML = username + " Esta escribiendo"
    setTimeout(()=>{
        writing.innerHTML = ""
    }, 3000)
})
/** @var socket.js */
    // emitiendo un evento que avisa a todos los usuario 
    socket.broadcast.emit('newUser', 'Se ha coenectado un nuevo usuario')

    // escuchar y emitir un evento que esta escribiendo el usuario
    socket.on('writing', (username)=>{
            if (username != "") {
                socket.broadcast.emit('writing', username)
            }
    })