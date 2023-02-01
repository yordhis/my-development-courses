/**
 * 
 * Barinas, 13-07-2022
 * video 3.4
 * 
 * profesor: Jonathan Mircha
 * 
 * @_POO_CON_FUNCIONES_CONSTRUCTORAS
 * 
 * 
 */ 

 ((c)=>{
    c('********POO_CON_FUNCIONES_CONSTRUCTORAS*******')
    function Carrito ( articulo ) {
         // Declaramos las variable del Object
         // Variable privadas
         this._articulo = articulo
         this._carrito = {}
 
         /* Acciones */
 
         this.agregar = ( articulo, cantidad ) =>  this._carrito[articulo] = cantidad
         
 
         this.quitar = articulo => delete this._carrito[articulo]
         
 
         this._iterable = () => {
             let message = 'Carrito: \n'
 
             for (let key in this._carrito)
                 message += `\t ${this._carrito[key]} ${key} \n`
 
             return message
         }
 
         this.ver = ( articulo = 'todos') => {
             return ( articulo === 'todos' ) 
             ? this._iterable()
             :   ( this._carrito.hasOwnProperty(articulo) )
                 ? `${this._carrito[articulo]} ${articulo}`
                 : `El articulo ${articulo} no esta en el carrito`
         }
 
         // habilitamos lo que puede retornar
         return {
             agregar: this.agregar,
             quitar: this.quitar,
             ver: this.ver,
         }
    }
 
    const zapatos = new Carrito ( 'Zapatos' )
    c(zapatos) // retorna todo el Prototipo
    zapatos.agregar( 'Nike', 2 )
    zapatos.agregar( 'Ribus', 3 )
    zapatos.agregar( 'Conver', 1 )
    c( zapatos.ver('Nike') ) 
    c( zapatos.ver() ) 
    zapatos.quitar('Conver') 
    c( zapatos.ver('Conver') ) 
    c( zapatos.ver('Conver') ) 
    c( zapatos.ver() ) 
    c('********PATRON DE DISEÑO: FACTORIA O FABRICA*******')

    /*
        Esta forma de codificar las funciones como clases se conoce como factory
        Pettern o Template function

        Un problema importante que tiene este tipo de estructura , es que cuando 
        creamos un nuevo objeto a partir de estas funciones, se reserva espacio 
        en memoria para todas las funciones

        con un objeto creado no supone mucha desventaja, pero con varios objetos si.

    */

        const comida = new Carrito ( 'comida' ),
        musica = new Carrito ( 'musica' ),
        juegos = new Carrito ( 'juegos' ),
        peliculas = new Carrito ( 'peliculas' )

    // Esto supone que los metodos agregar, quitar, ver, e _iterable
    // estan siendo replicados en memoria, lo que es ineficiente
 
    c(
        comida, '\n',
        musica, '\n',
        juegos, '\n',
        peliculas
    )
 
 })(console.log);