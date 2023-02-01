/**
 * Barinas 04-01-2023 
 * 
 * CURSO DE NODE.JS
 * PROFESOR: PABLO ESPAÑA BRAVO
 * @video 6.5
 * 
 * @_Registrando_datos
 * 
 */
const register = (req, res)=>{
    const {name, email, password } = req.body

    const user = new User({
        name: name,
        email: email,
        password: bcrypt.hashSync(password, 10)
    })
    user.save((err, result)=>{
        if(err){
            res.send('Ha ocurrido un error '+ err)
        }else{
            res.send('registrado con exito')
        }
    })
}

