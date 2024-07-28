/**
 * FUNCIONES
 * Es un trozo de código reutilizable en el que hay un conjunto de instrucciones.
 * cuando una función no devuelve un volor RETORNA UNDEFINED
*/

function saludar(persona, sexo) {
	return sexo === 'm'
		? `Bienvenido a EDteam, ${persona}`
		: `Bienvenido a EDteam, ${persona}`
}

/** 
 * FORMA CORRECTA DE DECLARAR FUNCIONES DESPUESDE SME6
 * DECLARACION DE FUNCIONES DE FLECHA
*/

const saludar2 = (persona, sexo = "M") => {
	saludo = sexo === 'm'
		? 'Biembenido'
		: 'Bienvenida'
	return `${saludo} a EDteam ${persona}`
}

const sumar1 = (a, b) => a + b // de esta forma se reduce y retorna el valor de la suma

/** 
 * PARAMETROS Y ARGUMENTOS
 * PARAMETROS: SON LOS DATOS QUE SOLICITA LA FUNCION O METODO
 * ARGUMENTOS: SON LOS VALORES QUE SE ASIGNAN A LOS PARAMETROS
 * ## CUANDO HAY MAS ARGUMENTOS QUE PARAMETROS LOS ARGUMENTOS SOBRANTES SON IGNORADOS
 * ## CAUNDO HAY MENOS ARGUMENTOS QUE PARAMETROS EL PARAMETRO RETORNA UNDEFINED
*/
console.log(saludar2()) //=> BIENVENIDO A EDTEAM undifined <= OJO


/** 
 * ###### PARAMETROS REST (SPREAD OPERATOR) ####
 * SIGNIFICA EXPANDIR 
 * ESTE PARAMETRO PERMITE A UNA FUNCION RECIBIR MUCHOS ARGUMENTOS
*/
/** EJEMPLO */


const sumarTodos = (...numeros) => {
	let resultado = 0
	for (let i = 0; i < numeros.length; i++) {
		resultado += numeros[i]

	}
	return resultado
}

/** 
 * LAS FUNCIONES COMO CIUDADANOS DE PRIMERA CLASE
 * 
 * PARA ASIGNAR UNA FUNCION SE DEBE HACER SIN COLOCAR LOS PARENTESIS 
 * PORQUE LOS PARENTESIS SE ENCARGA DE EJECUTAR LA FUNCION
 * ASIGNACION CORRETA:
*/
const c = console.log

/** 
 * ASIGNACION NO CORRETA: 
 * ESTO ES INCORRECTO YA QUE NO ES UNA FUNCION PORQUE ESTA EJECUTADA Y ES UN VALOR STRING, BOOLEAN ...
*/
// const c = console.log()

/** 
 * EJEMPLO 2 
 * 
*/
const multiplicar = (a, b) => a * b
let result1 = multiplicar(8, 10)
let result2 = multiplicar(result1, multiplicar(2, 5))
c(result1) // => 80
c(result2) // => 800


/** 
 * FUNCIONES QUE RETORNAN OTRAS FUNCIONES 
 * SE CONOCE COMO CLOSURES
 */

/** EJEMPLO POR DECLARACION */
function sumar2(x = 1) {
	return function (y = 2) {
		return x + y
	}
}

/** EJEMPLO POR FLECHA CLOSURES */
const sumar3 = x => y => x + y

c(sumar3(10)(20))

const doSomething = x => y => x * y

const a = doSomething(2)(2) // => 4 
const b = doSomething(3) // => y => 3 * y
c(doSomething(a)(b(3))) // => 36


/** TIPO DE FUNCIONES V4.8 */

/**
 * @FUNCIONES_PURAS 
 * SON FUNCIONES QUE NO MODIFICAN NADA QUE ESTE AFUERA 
 * Y QUE NO TIENEN EFECTOS SECUNDARIOS
*/

/** EJEMPLO: */

/**  NO ES UNA FUNCION PURA */
let p = 'hola'
const darSaludo = namePersona => {
	p = p + namePersona
	return p
}

c(darSaludo('Juan')) // => 'HOLA JUAN'
c(p) // => 'HOLA JUAN'
/** EN ESTE CASO ME MODIFICA LA VARIABLE EXTERNA DANDOLE EL DATO DE SALUDO */

/** ESTO SI ES UNA FUNCION PURA */
let per = 'hola'
const puroSaludar = (saludo, namePersona) => `${saludo} ${namePersona}`

c(puroSaludar(per, 'Juan')) // => 'HOLA JUAN'
c(per) // => 'HOLA'
/** DE ESTA FORMA NO ME EDITA LA VARIABLE EXTERNA SINO QUE ME MANTIENE EL DATO ORIGINAL */

/** @FUNCIONES_AUTOEJECUTADA */
let salu = 'hola'
const autoSaludar = ( (saludo, namePersona) => `${saludo} ${namePersona}`)(salu, 'pedro')
c(autoSaludar)
// CONVERTIMOS LA FUNCION EN EXPRESION COLOCANDO PARENTECIS AL PRINCIPIO Y FIN DE LA FUNCION
// Y LA EJECUTAMOS COLOCANDO DOS PARENTYESIS MAS PARA INSERTAR LOS DATOS DE ENTREDA

/**
 * FUNCIONES NOMBRADAS Y ANONIMAS 
 * 
 * LAS FUNCIONES NOMBRADAS SON LAS NORMALES QUE SIEMPRE USAMOS
 */


/** 
 * @FUNCIONES_ANONIMAS 
 * LAS FUNCIONES ANONIMAS SE LES CONOCE COMO COLLBACK 
 */

/** EJEMPLO 1 */
setTimeout(() => {
	alert('hola cyber staff')
}, 3000)

/** 
 * EJEMPLO 2 
 * Función anónima auto ejecutada
 * 
 * Los primeros parentecis convierten a la funcion en una expresión,
 * despues se contruye la función y por ultimo se añade los otros parentesis 
 * con los argumentos para ejecutar la función. 
 */

(
	function(a,b,c){
		console.log(a+b+c)
	}(11,2,3)
)






