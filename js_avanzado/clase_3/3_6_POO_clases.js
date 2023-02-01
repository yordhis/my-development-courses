/**
 * 
 * Barinas, 15-07-2022
 * video 3.6
 * 
 * profesor: Jonathan Mircha
 * 
 * @_POO_CLASES
 * 
 * Esto es un azucar sintactico, porque de igual manera el compilador lo trabaja 
 * como prototype aun que leamos clases. todo esto es posible en ES6
 * 
 * @_CLASES_Y_CONSTRUCTORES
 * 
 */ 

/*
    - evita los hoisting no hay elevacion de variables.
    - no se usa var, let const ni function
*/

((c) => {
    c('*********@_POO_CLASES*********')

    class Carrito {
        constructor(articulo){
            this.articulo = articulo
            this._carrito = {}
        }

        agregar ( articulo, cantidad ) {
            this._carrito[articulo] = cantidad
        }
        
        quitar ( articulo ){
            delete this._carrito[articulo]
        }
        
        iterable ()  {
            message = 'Carrito: \n'
            for (key in this._carrito)
                message += `\t ${this._carrito[key]} ${key} \n`
            return message
        }

        ver ( articulo = 'todos' ) {
            return ( articulo === 'todos' ) 
            ? this.iterable()
            :   ( this._carrito.hasOwnProperty(articulo) )
                ? `${this._carrito[articulo]} ${articulo}`
                : `El articulo ${articulo} no esta en el carrito`
        }
    }

    c(card = new Carrito('uñas'))


    const zapatos = new Carrito ( 'Zapatos' )
    c(zapatos) // retorna todo el Prototipo
    zapatos.agregar( 'Nike',2 )
    zapatos.agregar( 'Ribus',3 )
    zapatos.agregar( 'Conver',1 )
    // c( zapatos.ver() ) 
    c( zapatos.ver('Nike') ) 
    // c( zapatos.ver() ) 
    zapatos.quitar('Conver') 
    c( zapatos.ver('Conver') ) 
    c( zapatos.ver('Conver') ) 

})(console.log)