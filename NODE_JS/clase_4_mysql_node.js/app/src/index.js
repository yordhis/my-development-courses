const express = require('express')
const app = express()
const connection = require('./connection')
const user = require('./routes/users')
const loggedMiddleware = require('./middlewares/logged')
const path = require('path')
const { urlencoded } = require('express')

// SETTING (LAS CONFIGURACIONES GLOBALES DE NODE.JS)
// PODEMOS ACCEDER DE LA SIGUIENTE MANERA
app.set('title', 'Mi app en NODE.JS')
app.set('port', 3000)
// se configura el motor de plantillas
app.set('view engine', 'ejs')
// se configura la direccion de las platillas
app.set('views', path.join(__dirname, 'views'))

// hicimos el envio del formulario por post
// pero muestra UNDEFINED porque se debe añadir un middleware de express 
// que permite ver los datos enviados
app.use(express.urlencoded({extended:false}))



// middleware
// app.use(loggedMiddleware.isLogged)
// app.use(express.static(__dirname+'/public'))

app.use(express.static(path.join(__dirname, 'public')))

// --IMPORTAR RUTAS--  *******************
app.get("/", (req, res) => {
    // res.send('Bienvenido a mi app express')
    res.render('index')
})
// En esta parte importamos todas las rutas del usuario
app.use("/users",user)

// Escuchamos el servidor
app.listen(app.get('port'), () => {
    console.log(app.get('title') + " esta corriendo en el puerto " + app.get('port'))
})