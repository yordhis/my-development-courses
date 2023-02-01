const connection = require('../connection')

const c = console.log

// const path = require('path')
// const root = path.join( __dirname, '../public' )

const getUsers = (req, res) => {

    const sql = 'SELECT * FROM users'
    connection.query(sql, (err, result)=>{
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
    const sql = `SELECT * FROM users WHERE id=${param}`
    connection.query(sql, (err, result)=>{
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
    const sql = `SELECT * FROM  users WHERE id = ${param}`
    connection.query(sql, (err, result)=>{
        if (err){
            c("Ha ocurrido un error al eliminar: " + err)
        }else{
            c(result)
            res.render('delete-user', { users: result})
        }
    })
}

// acciones
const updateUser = (req, res) => {
    const param = req.params.id
    // c(req.body)
    const sql = `UPDATE users SET name='${req.body.name}', age=${req.body.age} WHERE id =${param}`
    connection.query(sql, (err, result) =>{
        if (err){
            c("Ha ocurrido un error: " + err)
        }else{
            c("Usuario actualizado")
            res.redirect('/users/all')
        }
    })
    
    // res.redirect('users/all', {users: users})
}


const deleteUser = (req, res) => {
    const param = req.params.id
    const sql = `DELETE FROM users WHERE id = ${param} `
    connection.query(sql, (err, result)=>{
        if(err){
            c("Ha ocurrido un error al eliminar usuario" + err)
        }else{
            res.redirect('/users/all')
        }
    })
    
}

const createUser = (req, res) => {

    const sql = "INSERT INTO users SET ?"
    const data = req.body
    connection.query(sql,data, (err, result)=>{
        if (err){
            console.log('Ha ocurrido un error al insertar usuario.')
        }else{
            console.log('Registro exitoso')
            res.redirect('all')
        }
    })
    //res.render('users', {users: users})
}


module.exports = { 
        getUsers, 
        getCreateUser, 
        getUpdateUser, 
        getDeleteUser,
        
        updateUser,
        deleteUser,
        createUser
    
    }