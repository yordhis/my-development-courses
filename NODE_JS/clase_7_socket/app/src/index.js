const express = require('express')
const path = require('path')
const http = require('http')
const socketio = require('socket.io')
const app = express()

// Config app
app.set('title', 'Manejo de socket')
app.set('port', 3000)
app.use(express.static(path.join(__dirname, 'public')))

// config socket y servidor http
const server = http.createServer(app)
const io = socketio(server) 
require('./socket')(io)


app.listen(app.get('port'), ()=>{
    console.log(`${app.get('title')} esta corriendo en http://localhost:${app.get('port')}`)
})