/**
 * @var Metodos MAP-FILTER-REDUCE
 */
const c = console.log
let numbers = [5,4,6,3,7,9]
// .map(callback)
// este le aplica una operacion o varias a los elementos de un array
let numbersCuadrado = numbers.map(num => num * num) 
c(numbersCuadrado)
// .filter(callback)
// busca los elementos de un array que cumplan con la condicion
let numbersFilter = numbers.filter(num => num > 6)
c(numbersFilter)

// .reduce(callback)
// Este recibe dos parametros ya que va comparando
// de dos en dos 
// se puede usar para realizar una suma de varios 
// numeros en un array
let suma = numbers.reduce( (a,b) => a + b )
c(suma)

// TODOS LOS METODOS CREAN UN ARRAY NUEVO
// Y NO MODIFICAN EL ARRAY ORIGINAL
// AHORA EL DOM SI PUEDE MODIFICAR EL ARRAY ORIGINAL 