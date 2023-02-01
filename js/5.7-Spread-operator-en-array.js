/**
 * @var Spread Operator En Array
 */

const c = console.log

let numbers = [1,10,3,26,10,1000]
c(numbers)
// Eliminar elementos duplicados en un array
// en este caso queremos eliminar el elemento con el valor 10 que esta duplicado


// Para esto se usa el OBJECT new Set(arrays)
c(new Set(numbers))

// Este objeto SET elimina los datos duplicados
// pero retorna un objeto 
// => Set(5) {1, 10, 3, 26, 1000}
// y de esta manera no nos sirve ya que tendriamos que recorrer
// el objeto para crear otro array y no tiene ciencia hacer eso

// Pero gracias al SPREAD OPERATOR se puede hacer de la siguiente manera:
c([...new Set(numbers)])

// para no estar repitiendo esta instruccion podemos crear 
// una funcion que se encarge de esta instruccion Ejemplo:

const removeDuplicates = arrays => [...new Set(arrays)]

c(removeDuplicates(numbers))

// por otra parte el SPREAD OPERATOR se puede aplicar en el 
// objeto Math
    // Math.max
    c(Math.max(numbers)) // => NaN esto pasa porque el metodo max espera son argumento y no arrays 
    // aqui es donde se usa el SPREAD OPERATOR
    c(Math.max(...numbers))
    // Math.min
    c(Math.min(numbers)) // => NaN esto pasa porque el metodo min espera son argumento y no arrays
    // aqui es donde se usa el SPREAD OPERATOR
    c(Math.min(...numbers))



