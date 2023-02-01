const users = [
    {id: 1, name: "Yordhis", age: 26},
    {id: 2, name: "debora", age: 25},
    {id: 3, name: "rei", age: 24},
    {id: 4, name: "mily", age: 20},
]

// const path = require('path')
// const root = path.join( __dirname, '../public' )

const getUsers = (req, res) => {
    res.render('users', {users: users})
}

const getCreateUser = (req, res) => {
    res.render('create-user')
}

const getUpdateUser = (req, res) => {
    res.render('update-user')
}

const getDeleteUser = (req, res) => {
    res.render('delete-user')
}

const updateUser = (req, res) => {
    const param = req.params.id
    for (let i = 0; i < users.length; i++) {
        if (param == users[i].id){
            users[i].name = req.body.name
            users[i].age = req.body.age
            break
        }
    }
    
    res.render('users', {users: users})
}


const deleteUser = (req, res) => {
    const param = req.params.id
    for (let i = 0; i < users.length; i++) {
        if (param == users[i].id){
            users.splice(i, 1)
            break
        }
    }
    
    res.render('users', {users: users})
}

const createUser = (req, res) => {

    //console.log(req.body)
    users.push(req.body)
    res.render('users', {users: users})
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