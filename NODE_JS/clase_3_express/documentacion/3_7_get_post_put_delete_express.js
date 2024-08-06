/**
 * Barinas 10-09-2022 
 * 
 * CURSO DE NODE.JS
 * PROFESOR: PABLO ESPAÑA BRAVO
 * 
 * @video 3.7
 * 
 * @_PETICIONES_HTTP
 * 
 * @_GET_POST_PUT_DELETE
 * 
 * @_PASO_1 PROCEDEMOS A CONFIGURAR LOS NOMBRE DE LOS CONTROLADORES Y LAS RUTAS DE MANERA SEMANTICA
 * EJEMPLO:
 * 
 */
/**
 * 
 * @param {id: 1 int, name: "luis" string, age: 26 int} req.body Obtenemos el cuerpo de datos del formulario que es un objeto 
 * @param {*} res.render retornamos la vista 
 */ 
const createUser = (req, res) => {

    //console.log(req.body)
    users.push(req.body)
    res.render('users', {users: users})
}


/**
 * 
 * @param {id:id} req.params.id aqui recibimos el id del usuario que queremos editar
 * @param {views} res retornamos la vista de usuarios
 * 
 * @const param contiene el id del usuario
 * @break sirve para terminar el @for
 */
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

/**
 * 
 * @param {*} req.params.id obtenemosel id para eliminar el usuario
 * @param {*} res 
 */
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


/**
 * 
 * @_PASO_2 SE CONFIGURAN LAS RUTAS NUEVAS PARA LAS ACCIONES DE POST PUT DELETE
 * 
 * 
 */

 router.post( "/create", userController.createUser ) 

 router.put( "/update/:id", userController.updateUser ) 
 
 router.delete( "/delete/:id", userController.deleteUser ) 
