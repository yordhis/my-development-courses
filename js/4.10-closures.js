/**
 * @var CLOUSURES
 * 
 * 
 */
// Son unciones que retornan otras funciones
// Ejemplo:

const c = console.log

function aumentar() {
    let numero = 0 
    return function () {
        numero++
        c(numero)
    }
}

aumentar()() // => 1
aumentar()() // => 1
aumentar()() // => 1
// Este comportamiento es debido a que se esta ejecutando toda funcion 
// Y la variable NUMERO en cada iteración se inicia en CERO

// Ahora  si asignamos una parte la funcion AUMENTAR a una constante
// dividimos la funcion y la variable NUMERO no se iniciaria en cada iteracion 
// sino que conserva el valor en cada iteracion y lo aumenta
// Ejemplo

const incrementar = aumentar()

incrementar()
incrementar()
incrementar()