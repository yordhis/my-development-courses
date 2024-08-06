/**
 * 18-01-2023
 * Profesor: Pablo España
 * @Video_5
 * 
 * @_COOKIES_Y_SESIONES
 * 
 */

/** @var Cookies  @video_5_2 *******************************************/

// Para manejar las cookies se debe instalar el modulo cookie-parser
// Este modulo nos permite visualizar los valores de la cookies en 
// el lado del servidor.

// Requerimos el modulo
    const cookiesParser = require('cookie-parser')

// Uso del middlware cookies
    app.use(cookiesParser())

// Uso practico
    app.get('/',(req, res)=>{
        // console.log(req.cookies.user)
        // console.log(req.cookies.password)
        let profile = {
            user: req.cookies.user,
            password: req.cookies.password
        }
        res.render('index', {profile})
    })

    app.get('/login',(req, res)=>{
        res.render('login')
    })

    app.post('/login',(req, res)=>{
        // Para crear las cookies
        res.cookies('user', req.body.user)
        res.cookies('password', req.body.password)
        res.redirect('/')
    })
// Para visualizar las COOKIES debemos darle F12 O inspeccionar 
// y en la barra de herramientas buscamos la seccion APLICACION
// despues buscamos donde diga COOKIES y podremos visualizar los valores

/** @var Sesiones_PARTE_1    @video_5_3 *********************************************/

// Para manejar las SESSIONES se debe instalar el modulo express-session

// Requerimos el modulo
const expressSission = require('express-sission')

// Uso del middlware  express-session
    app.use(expressSission({
        secret: 'my_secret'
    }))

// Uso practico
    app.get('/',(req, res)=>{
        // console.log(req.cookies.user)
        // console.log(req.cookies.password)
        let profile = {
            user: req.session.user,
            password:  req.session.password
        }
        // eliminar una session
        delete req.session.user
        delete req.session.password

        res.render('index', {profile})
    })

    app.get('/login',(req, res)=>{
        res.render('login')
    })

    app.post('/login',(req, res)=>{
        // Para crear las cookies
        req.session.user =  req.body.user
        req.session.password req.body.password
        res.redirect('/')
    })

/** @var Sesiones_PARTE_2  @video_5_4 ************************************/

// Para manejar las SESSIONES se debe instalar el modulo connect-flash

// Requerimos el modulo
const expressSission = require('express-sission')
const connectFlash = require('connect-flash')

// Uso del middlware express-session
app.use(expressSission({
    secret: 'my_secret'
}))
// Este modulo usa por de bajo las sessiones de express-session
app.use(connectFlash())

// Uso practico
app.get('/',(req, res)=>{
    let profile = {
        user: req.flash('user')[0],
        password: req.flash('password')[0],
    }
    res.render('index', {profile})
})

app.get('/login',(req, res)=>{
    console.log(req.flash())
    res.render('login')
})

app.post('/login',(req, res)=>{
    // Para crear las sesiones con connect-flash hacemos lo siguiente
    req.falsh('user', req.body.user)
    req.falsh('password', req.body.password)
    // console.log(flash()) 
    // si dejamos este console.log que acceda a los datos de la session
    // los va a borrar despues de mostrar lo y no se prodria visualizar en el
    // index
    res.redirect('/')
})