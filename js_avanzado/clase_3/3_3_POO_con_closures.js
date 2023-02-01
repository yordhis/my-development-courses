/**
 * 
 * Barinas, 13-07-2022
 * video 3.3
 * 
 * profesor: Jonathan Mircha
 * 
 * @_POO_CON_CLOSURES
 * 
 * 
 */ 

((c)=>{
   c('********POO_CON_CLOSURE*******')
   function Carrito ( articulo ) {
        // Declaramos las variable del Object
        // Variable privadas
        let _articulo = articulo,
        _carrito = {}

        /* Acciones */

        function agregar ( articulo, cantidad ) {
            _carrito[articulo] = cantidad
        }

        function quitar ( articulo ) {
            delete _carrito[articulo]
        }

        function _iterable () {
            let message = 'Carrito: \n'

            for (let key in _carrito)
                message += `\t ${_carrito[key]} ${key} \n`

            return message
        }

        function ver ( articulo = 'todos') {
            return ( articulo === 'todos' ) 
            ? _iterable()
            :   ( _carrito.hasOwnProperty(articulo) )
                ? `${_carrito[articulo]} ${articulo}`
                : `El articulo ${articulo} no esta en el carrito`
        }

        // habilitamos lo que puede retornar
        return {
            agregar: agregar,
            quitar: quitar,
            ver: ver,
        }
   }

   const zapatos = Carrito ( 'Zapatos' )
   c(zapatos) // retorna todo el Prototipo
   zapatos.agregar( 'Nike', 2 )
   zapatos.agregar( 'Ribus', 3 )
   zapatos.agregar( 'Conver', 1 )
   c( zapatos.ver('Nike') ) 
   c( zapatos.ver() ) 
   c( zapatos.ver('Conver') ) 
   zapatos.quitar('Conver') 
   c( zapatos.ver('Conver') ) 
   




})(console.log)