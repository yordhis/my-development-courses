const User = require('../models/users')

const c = console.log

// const path = require('path')
// const root = path.join( __dirname, '../public' )

const getUsers = (req, res) => {


    User.find({}, (err, result)=>{
        if (err){
            console.log('Ha ocurrido un error en la consulta de usuarios')
        }else{
           res.render('users', {users: result})
        }
    })
}

const getUser = (req, res) => {

    User.find({_id: req.params.id}, (err, result)=>{
        if (err){
            console.log('Ha ocurrido un error en la consulta de usuarios')
        }else{
           res.render('users', {users: result})
        }
    })
}

const getCreateUser = (req, res) => {
    res.render('create-user')
}

const getUpdateUser = (req, res) => {
    const param = req.params.id
    User.find({_id: param }, (err, result)=>{
        if(err){
            c("Ha ocurrido un error: " + err)
        }else{
            // c(result)
            res.render('update-user', {users: result})
        }

    })

}

const getDeleteUser = (req, res) => {
    const param = req.params.id
    User.find({_id: param}, (err, result)=>{
        if (err){
            console.log("Ha ocurrido un error al consultar los datos a eliminar: " + err)
        }else{
            res.render('delete-user', { users: result})
        }
    })

}

// acciones
const updateUser = (req, res) => {
    const param = req.params.id
    const data = req.body

    User.findOneAndUpdate({_id: param }, data, (err, result)=>{
        if (err){
            c("Ha ocurrido un error: " + err)
        }else{
            c("Usuario actualizado")
            res.redirect('/users/list')
        }
    })

}


const deleteUser = (req, res) => {
    const param = req.params.id
    User.deleteOne({_id: param}, (err, result)=>{
        if(err){
            c("Ha ocurrido un error al eliminar usuario" + err)
        }else{
            res.redirect('/users/list')
        }
    })

    
}

const createUser = (req, res) => {
    const data = req.body
    const user = new User({
        name: data.name,
        age: data.age
    })
    user.save((err, result)=>{
        if (err){
            console.log('Ha ocurrido un error al insertar usuario.')
        }else{
            console.log('Registro exitoso')
            res.redirect('list')
        }
    })
  
}


module.exports = { 
        getUsers, 
        getUser,
        getCreateUser, 
        getUpdateUser, 
        getDeleteUser,
        
        updateUser,
        deleteUser,
        createUser
    
    }