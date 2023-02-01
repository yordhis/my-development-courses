const express = require("express")
const app = express()
require('./connection')
const userRoutes = require('./routes/users')

app.set('title', "Manejo de Token")
app.set('port', 3100)

app.use(express.urlencoded({extended:false}))
// app.use(express.urlencoded({extended:true}))
app.use( userRoutes)

app.listen(app.get('port'), () => {
    console.log(app.get('title') + " esta corriendo en el puerto " + app.get('port'))
})