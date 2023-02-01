/**
 * 
 * Barinas, 1-08-2022
 * video 6.8
 * 
 * profesor: Jonathan Mircha
 * 
 * @_PROGRAMACION_REACTIVA
 * 
 */

/**
 * @_ReactiveX_RxJS
 * 
 * usando la libreria RX
 * 
 * @param LINK www.cdnjs.com
 */

 ;
 ((c) => {
     c('********PROGRAMACION_REACTIVA_CON_RXJS*******')
 
     const createUser = () => {
         let id = Math.floor( Math.random() * 10000 )
         users.push( id )
         c(`Usuario ${id} creado`)
     }
     
     const getUsers = () => {
         c( 'Obteniendo Usuarios' )
         c( `Usuario: ${users} \n Total de Usuarios: ${users.length}` )
     }
     
     let users = [],
     // Creamos el publicador
     pub = rxjs.Observable.create( user => {
         
         setInterval( () =>{
             c('Enviando informacion...')
             // en esta seccion se agrega el metodo NEXT 
             // que es como un generador 
             user.next( getUsers() )
             user.next( getUsers() )
             user.next( getUsers() )
             //  user.next( getUsers() )
            }, 2500)
        })
    
    // ejecutamos el publicador
    pub.subscribe( () => createUser() )
   
 
 })(console.log)
