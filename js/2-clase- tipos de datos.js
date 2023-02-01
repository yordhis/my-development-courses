// TIPOS DE DATOS

// PRIMITIVOS
/**
 * NULL -> RETORNA 'OBJECT'
 * UNDEFINED
 * NUMBER
 * STRING
 * BOOLEAN
 * SYMBOL()
 * 
 */

// OBJECT
/**
 * OBJECT {} -> RETORNA 'OBJECT' BIEN
 * NULL (JS BUG) X
 * FUNCTION function(){} -> 'function' X
 * ARRAY [] -> RETORNA 'OBJECT' X
 */

// EN JS PODEMOS CAMBIAR LOS TIPOS DE DATOS
let myVar = 1
console.log(typeof myVar) // return "number"
myVar = "hola mundo"
console.log(typeof myVar) // return "string"

// TYPE COERTION
/**
 * ESTO INTENTA CONVERTIR UN NUMERO A TEXTO CUANDO SE INTETE
 * SUMAR O UN TEXTO A NUMERO SI EL STRING SOLO CONTIENE NUMERO 
 */
    console.log(5 + 'hola') // retorna -> '5hola'
    console.log(5 + '5') // retorna -> 10
    console.log(5 * 'hola') // retorna -> NaN
    console.log(5 * '3') // retorna -> 15

// DATOS POR VALOR O REFERENCIA

let number1 = 1, number2 = number1
/* 
EN ESTE CASO ESTA APUNTADO AL VALOR
ES DECIR QUE SI CAMBIO EL VALOR DE 
number2 NO AFECTA A number1
*/
number2 = 'hola'
console.log(number2) // retorna -> 'hola'
console.log(number1) // retorna ->  1
/*
ESTO PASA CON LOS TIPOS DE DATOS PRIMITIVOS
*/

/* ESTO SON LAS VARIABLES REFERENCIADAS*/
let compuesto1 = [1,2,3,4]
let compuesto2 = compuesto1
compuesto2[4] = 5 //compuesto.push(5) 
console.log(compuesto1) // retorna -> [1,2,3,4,5]
console.log(compuesto2) // retorna -> [1,2,3,4,5]

// OPERADORES

// OPERADORES DE ASIGNACION
/**
 * =
 * += (SE PUEDE USAR PARA CONCATENAR TEXTO)
 * -=
 * /=
 * *=
 */

// OPERADORES DE COMPARACION
/**
 * ==  NO USAR MUCHO 
 * === RECOMENDADA
 * != DIFERENTE
 * !== DIFERENTE VALOR Y TIPOS DE DATOS
 * <
 * >
 * >=
 * <=
 */

// OPERADORES UNARIOS
/**
 * typeof
 * ! negacion
 * 
 */

// OPERADORES ARITMETICOS
/**
 * +
 * -
 * *
 * /
 * % ES EL RESTO
 * POS++PRE 
 * POS--PRE
 */

// OPERADORES TERNARIOS
/**
 *  ES EL QUE REQUIERE TRES VALORES
 *  
 *  EXPRESION ? VERDADERO : FALSO
 * 
 */

let age = prompt('Dime que edad tienes')

let isAdult = age >= 18 
                  ? 'Eres mayor de edad' // true
                  : 'Eres un niño' // false
alert(isAdult)

// OPERADOR DE CORTO CIRCUITO
/**
 * || -> ESTO OR LO OTRO
 * && -> ESTO AND ESTO 
 */


let or = null || 10
let and = null && 10
console.log(or) // retorna 10
console.log(and) // retorna null

