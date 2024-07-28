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

/** OPERADORES */


/** OPERADORES DE ASIGNACION *****************************
  =
  += -> (TAMBIEN SE PUEDE USAR PARA CONCATENAR TEXTO)
  -=
  /=
  *=
  **=  -> ESTO ES POTENCIACIÓN EJEMPLO a**b => 2**=3 => dos al cubo y asigna
 */


/**  OPERADORES DE COMPARACION *****************************
  ==  -> ES IGUAL
  === -> ES ESTRICTAMENTE IGUAL (RECOMENDADA)(COMPARA VALOR Y TIPO DE DATO)
  !=  -> ES DIFERENTE
  !== -> ES ESTRICTAMENTE DIFERENTE (RECOMENDADA)(VALOR Y TIPOS DE DATOS)
  <   -> MENOR QUE
  >   -> MAYOR QUE
  >=  -> MAYOR IGUAL QUE
  <=  -> MENOR IGUAL QUE
 */


/** OPERADORES UNARIOS *****************************
   typeof
   ! negacion
   POS++ -> SE ASIGNA Y DESPUES SE INCREMENTA
   ++PRE -> SE INCREMENTA Y DESPUES SE ASIGNA
   POS--
   --PRE
*/
/** COMPORTAMIENTO */
let a = 0
console.log(a++) // retorna 0
console.log(++a) // retorna 1


/** OPERADORES ARITMETICOS *****************************
  +
  -
  *
  /
  %  -> RETORNA EL RECIDUO DE LA DIVISIÓN
  ** -> OPERACION DE POTENCIA
 */


/** OPERADORES TERNARIOS *****************************
 *  ES EL QUE REQUIERE TRES VALORES
   
   VARIABLE = EXPRESION ? VERDADERO : FALSO
  
 */

/** EJERCICIO 
 * Validar si las personas sean mayores de edad.
*/
let age = prompt('Dime que edad tienes')

let isAdult = age >= 18 
                  ? 'Eres mayor de edad' // true
                  : 'Eres un niño' // false
alert(isAdult)


/** OPERADOR DE CORTO CIRCUITO O LOGICOS *****************************
  || -> ESTO OR 
  && -> ESTO AND  
 */

/** EJERCICIO 
 *  Se desea saber si b es menor que a Ó si b es menor que c
*/

/** CORTO CIRCUITO 
 *  OR  -> COMPARA SI POR LO MENOS UNO ES TRUE Y ASIGNA
 *  AND -> COMPARA SI LOS DOS SON VERDADERO Y ASIGNA
 */

/** SI UNO DE LOS DOS ES VERDADERO RETORNA EL VALOR VERDADERO */
let or = null || 10
console.log(or) // retorna 10

/** SI LOS DOS SON VERDADERO RETORNA EL PRIMER VALOR VERDADERO */
let or = 5 || 10
console.log(or) // retorna 5

/** SI LOS DOS VALORES SON VERDAD ASIGNA EL SEGUNDO VALOR [B=10] A LA VARIABLE "AND" */
let and = 11 && 10
console.log(and) // retorna 10

/** SI UNO ES FALSO TODO ES FALSO Y RETORNA EL VALOR DEL FALSO */
and = null && 10
console.log(and) // retorna null

/** USO */
let session = true
and = session && (5>5 ? 'HOLA' : 'CHAO') // retorna "CHAO"
and = session && (6>5 ? 'HOLA' : 'CHAO') // retorna "HOLA" 

