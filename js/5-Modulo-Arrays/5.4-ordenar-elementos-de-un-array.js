/**
 * @_ORDENAR_ARRAY
 */

const c = console.log
let text = "Venezuela es un pais bendecido"


// .reverse() INVIERTE EL ORDEN DE UN ARRAY

let arrayText = text.split('')
c(arrayText)

// invertir posiciones
arrayText.reverse()
c(arrayText)

// unimos el texto
c(arrayText.join(''))

// creamos una funcion que haga todo esto

const sifrarText = string => string.split('').reverse().join('')
c(sifrarText(text)) // invierte todo
c(sifrarText(sifrarText(text))) // lo devuelve a su orden original

// .sort(callback)

let alfabeto = ['a', 'x', 'z', 'b', 'c']
let numbers = [1000, 1, 200, 123, 0, 78, 4, 5]

c(alfabeto.sort())

// El metodo sort no puede ordenar numeros ya que siempre los ordena
// como string y los compara

// Ahora para ordenar los numero se debe crar una funcion
// que compare los numero por medio de una resta
c(numbers.sort((a, b) => a - b))

/**
 * @var ConcatenarYTransformarAString
 */

// .join -> CONVIERTE EL ARRAY A TEXTO
c(alfabeto.join(','))

// .concat() Es como el push pero se puede añadir vario elementos y no modifica el array original
c(numbers.concat(2, 3))
c(numbers.concat(2, 3).sort((a, b) => a - b))

/**
 * @var EncontrarElementoEnUnArray
 */
let cosasPerdidas = ['plato', 'jabon', 'sepillo', 'lapiz', 'anillo']
let numerosAleatorios = [, 0, 5, 986, 65, 222, 520, 1000, 2458, 3, 7]

/** 
 * @_indexOf (value)
 * Esto devuelve el indice donde se encontro el elemento filtrado
 * 
 * EJEMPLO:
 */  
c(cosasPerdidas.indexOf('lapiz')) // retorna 3

/** 
 * @_find (callback)
 * devuelve el primer valor que cumpla con la condición
 * 
 * EJEMPLO:
 */
c(numerosAleatorios.find(numero => numero > 100)) // retorna  986

/** 
 * @_findIndex (callback)
 * devuelve el primer INDEX que cumpla con la condición 
 * 
 * EJEMPLO:
 */
c(numerosAleatorios.findIndex(numero => numero > 100)) // retorna  2
