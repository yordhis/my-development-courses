/** AGREGAR O QUITAR ELEMENTOS DE UN ARRAY */

const c = console.log
let array = [1, 2, 3, 4, 5, 6]

/** Agregar al final */
// .push(value) AGREGA A LO ULTIMO
    array.push(2)
    c(array)

    // .pop() QUITA EL ULTIMO
    array.pop()
    c(array)

/** Agregar al inicio */
    // .unshift(value) AGREGA AL INICIO
    array.unshift(10)
    c(array)

    // .shift() ELIMINA EL PRIMERO
    array.shift()
    c(array)

/**  Posicion personalizada */
let paises = ['venezuela', 'colombia', 'peru', 'chile', 'ecuador']
/**
 * METODO
 * @_splice (startindex, quanity, value1, value2, value3)
 *  => retorna el array modificado con los elementos
 * 
 * @startindex -> indice donde se va a empezar a insertar los elementos
 * @quantity -> Cantidad de elementos que seran eliminados y si le pasamos cero no elimina nada
 * @value -> son los valores que se van a añadir al ARRAY
 * 
 * Esta instrucción agrega el valor costa rica al 
 * Array PAISES en la posicion 2 del array
 * 
 * El SPLICE me permite agregar, modificar y eliminar elementos dentro de un array
 * y modifica el array original
*/
paises.splice(2, 0, 'Costa rica')
c(paises)

/** 
 * Para eliminar un elemento de un array 
 * se usa la siguiente instruccion
 */
paises.splice(4, 1)
c(paises)

/**
 * @_slice (start[,end])
 * Extrae en un nuevo array los valores desde start
 * hasta [end - 1] no modifica el array original
 */

let str = paises.slice(1, 2)
c(str) // retorna COLOMBIA