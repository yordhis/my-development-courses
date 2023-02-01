/**
 * 
 * Barinas, 30-07-2022
 * video 6.7
 * 
 * profesor: Jonathan Mircha
 * 
 * @_PROGRAMACION_REACTIVA
 * 
 * EJERCICIO
 */
;
((c) => {
    c('********PROGRAMACION_REACTIVA*******')

    const createUser = () => {
        let id = Math.floor( Math.random() * 10000 )
        users.push( id )
        c(`Usuario ${id} creado`)
    }
    
    const getUsers = () => {
        c( 'Obteniendo Usuarios' )
        c( `Usuario: ${users} \n Total de Usuarios: ${users.length}` )
    }
    
    let users = []

    setInterval( () =>{
        c('Enviando informacion...')
        createUser()
        getUsers()
    }, 5000)
    
    setInterval( () =>{
        c('Enviando informacion...')
        createUser()
        getUsers()
    }, 2500)

})(console.log)