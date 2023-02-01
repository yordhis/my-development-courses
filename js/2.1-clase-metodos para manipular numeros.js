// NUMEROS
/**
 * METODOS
 * 
 * toFixed(cantidadDeDecimales) sintaxis -> number.toFixed(2)
 * parseInt(strin, 10)
 * parseFloat()
 * 
 */

let numText = '10'
let num1 = parseInt(numText, 10) // retorna -> 10
let num2 = parseFloat(numText, 10) // retorna -> 10,00
let num3 = parseFixed(numText, 10) // retorna -> Uncaught ReferenceError: parseFixed is not defined at <anonymous>:1:1

// MATH
/**
 * math.floor() 
 * math.ceil() 
 * math.round() 
 * math.random() 
 */

 Math.floor(20.7) //retorna -> 20 redondea hacia abajo 
 Math.ceil(20.1) //retorna -> 21 redondea hacia arriba 
 Math.round(20.1) //retorna -> 20 redondea hacia abajo  
 Math.round(20.6) //retorna -> 20 redondea hacia arriba  
 Math.random() //retorna -> 0.5546545646
 Math.random() *10 //retorna -> 5.5546545646
 Math.ceil(Math.random() * 10) //retorna -> 1 o X numero entero

// STRING -> PROPIEDAD
/**
 * UNA PROPIEDAD ES UNA CARACTERISTICA
 *  .length
 */

// LITERAL
    'HOLA'.length // retorna -> 4
// VARIABLE
    let text = 'hola'
    text.length // retorna -> 4

// METODOS PARA STRING
/**
 * .trim() -> QUITA LOS ESPACIOS
 * .toUpperCase() -> CONVIERTE TODO EL TEXTO EN MAYUSCULAS
 * .toLoweCase() -> CONVIERTE TODO EL TEXTO EN MINUSCULAS
 */

let answer = prompt('¿Cual es la capital de peru?').toUpperCase().trim()

let respuesta = answer == 'LIMA' 
                        ? 'Correcto'
                        : 'fallaste'
alert(respuesta)





 