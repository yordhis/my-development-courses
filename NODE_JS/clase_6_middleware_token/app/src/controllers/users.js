const User = require('../models/users')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const c = console.log

const getAdmin = (req, res)=>{
    jwt.verify(req.token, 'secret-key', (err, userData)=>{
        if(err){
            res.send("ha ocurrido un error " + err)
        }else{
            res.json({
                message: "Todo esta correcto",
                data: userData
            })
        }
    })
}

const login = (req, res)=>{
    const {email, password} = req.body
    User.findOne({email:email}, (err, result)=>{
        if(err){
            res.send("Ha ocurrido un error " + err)
        }else{
            if(result){
                if(bcrypt.compareSync(password, result.password)){
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

module.exports = {
        getAdmin,
        login,
        register
}