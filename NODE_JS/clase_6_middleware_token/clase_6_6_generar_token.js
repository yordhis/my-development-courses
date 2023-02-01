/**
 * Barinas 04-01-2023 
 * 
 * CURSO DE NODE.JS
 * PROFESOR: PABLO ESPAÑA BRAVO
 * @video 6.6
 * 
 * @_Generar_token
 * 
 */
// creamos nuestro login
const login = (req, res)=>{
    const {email, password} = req.body
    // Realizamos la busqueda del usuario por medio de su email
    User.findOne({email:email}, (err, result)=>{
        if(err){
            res.send("Ha ocurrido un error " + err)
        }else{
            // Si se localiza el usuario procedemos
            if(result){
                // Verificamos la clave con el paquete BCRYPT
                // y usamos el metodo compareSync(param1: clave que se recibe, param2: la clave de la base de datos)
                if(bcrypt.compareSync(password, result.password)){
                    // con el paquete de JWT procedemos a crear el token con el metodo SING
                    // sing(param1: los tados del usuario, param2: clave secreta generada por nosotros, param3: callback)
                    // el callback retorna un (err, token)
                    jwt.sign({user: result}, 'secret-key', (err, token)=>{
                        res.send({token:token})
                    })
                }else{
                    res.send("Contraseña incorrecta")
                }
            }else{
                res.send("El usuario no existe")
            }
        }
    })
}