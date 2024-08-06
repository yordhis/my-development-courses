const isLogged = (req, res, next) => {
    let logged = false
    if ( logged ) {
        next()
    } else {
        res.send('No se puede acceder, Debe logearse')
    }
}

exports.isLogged = isLogged