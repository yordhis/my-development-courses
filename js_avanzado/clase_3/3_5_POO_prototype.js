/**
 * 
 * Barinas, 13-07-2022
 * video 3.5
 * 
 * profesor: Jonathan Mircha
 * 
 * @_POO_PROTOTYPE
 * 
 * 
 */ 

 ((c)=>{
    c('********POO_PROTOTYPE*******')
    // 1- DECLARAMOS LOS ATRIBUTOS EN UNA FUNCION
    function Carrito ( articulo ) {
         this._articulo = articulo
         this._carrito = {}
    }

    // 2- creamos todas las acciones dentro del prototype
        // 2.1- de forma directa
      /*
        Carrito.prototype.agregar = function () {}
        Carrito.prototype.quitar = function () {}
        Carrito.prototype.ver = function () {}
        Carrito.prototype._iterable = function () {}
      */  
         
        Carrito.prototype = {
            // Ya no necesitamos el THIS
            // se debe usar funciones normales para evitar el SCOPE
            agregar: function ( articulo, cantidad ) {
                this._carrito[articulo] = cantidad
            },
            
            quitar: function( articulo ){
                delete this._carrito[articulo]
            },
            
            _iterable: function()  {
                let message = 'Carrito: \n'
                for (let key in this._carrito)
                    message += `\t ${this._carrito[key]} ${key} \n`
                return message
            },
    
            ver: function ( articulo = 'todos' ) {
                return ( articulo === 'todos' ) 
                ? this._iterable()
                :   ( this._carrito.hasOwnProperty(articulo) )
                    ? `${this._carrito[articulo]} ${articulo}`
                    : `El articulo ${articulo} no esta en el carrito`
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
    

    /**
     * De esta manera creando nuevos objetos, su espacio en memoria es menor y ya
     * no hay replicacion de metodos, internamente sera mas eficiente el uso de la 
     * memoria por parte de JavaScript y obtendremos un mejor rendimiento en la app
     */
 
 })(console.log);