/**
 * @var ARRAYS
 * 
 * Son datos estructurados, que se conoce como una lista de valores
 * rodeado de [] corchetes y separados por comas ,
 * 
 */

const c = console.log

// un array es:
let array = [1,2,3,'hola soy un valor', [1,2,3,4,5,6,7,89], {}]

// accerder a un elemento:
c(array[3])

// Saber cuantos elementos tiene un array se usa "length"
// muestra la cantidad total de elementos
c(array.length)

// para obtener el ultimo indice de una array es length - 1
c(array[array.length-2])

// DESESTRUCTURAR ARRAY
let palabras = ['hola', ' amigo', ' como', ' estas?']

// en este caso  para obtener cada valor y formar la oracion completa 
// seria asignar cada indice del array a una variable distinta y despues 
// concatenar para mostrar todo lejible

// PERO gracias a la DESESTRUCTURACION DE ARRAY SE PUEDE 
// hacer mas rapido de la siguiente manera

let [p1,p2,p3,p4] = palabras
// seria un array de variable para tomar los valores del array 
// PALABRA

c(p1 + p2 + p3 + p4)
