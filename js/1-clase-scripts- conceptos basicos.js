
/**
 * @var CLASE_1
 */

let nombre = "Yordhis"

// para mostrar datos usamos
console.log(nombre) 

// VARIABLES SON ELEMENTOS QUE VARIAN 
// SEGUN EL TRATO DE LA VARIABLE

let numero = 18
console.log(numero) 
console.log(numero * 2) 
console.log(numero - 2) 
console.log(numero / 2) 
console.log(numero + 120) 

// FORMAS INVALIDAS DE DEFINIR UNA VARIABLE
// let 1variable
// let váriableñ
// let varia}ble

// ERRORES DE VARIABLES

let pais // UNDEFINE
// SI LA VARIABLE NO EXITE DA ERROR 
console.log(pais) 


// paramANTE

const pi = 3.14 // NO SE PUEDE REACIGNAR UN VALOR A UNA CONSTATE

// SINTAXIS
/**
 * COMENTARIO -> EL INTERPRETE LO IGNORA 
 * 
 * PUNTO Y COMA -> ES OPCIONAL -> EL PUNTO Y COMA SEPARA ESPRECIONES
 * 
 * ESPACIOS EN BLANCOS SON IGNORADOS -> const url    =    "web"
 * 
 * CASE SENCITY -> ES SENCIBLE A MAYUCULAS Y MINUSCULAS 
 * CONVENSION LOWER CAMES CASE -> listUsers 
 * CONVENSION LOS NOMBRES DE LAS VARIABLES SIEMPRE EN INGLES
 * 
 * @var var
 * @const const
 * @param param
 * @method method
 * 
 */
/* COMENTARIO DE HUMANO */
// COMENTAR CODIGO


// TIPO DE DATOS

/* BATIS: ACENTOS INVERTIDOS -> `HOLA ${variable}` */
// LOS ACENTOS INVERTIDOS PERMITEN INSERTAR VARIABLES

let number = 4
let userAge = 7
let galleryMainContainer = 10
let name = `EDteam tiene ${number} años`

let div = `
    <div class="container">
        ${name}
    </div>
`
document.body.innerHTML = div

// BOOLEAN 
/**
 * ESTO SOLO PUEDE RETORNAR
 * 
 * TREU -> 1
 * FALSE -> 0
 * 
 */

// UNDEFINED
/**
 * LA VARIABLE ESTA DECLARADA PERO NO ESTA DEFINIDA
 */

//NULL
/**
 * EL ELEMENTO SOLICITADO NO EXISTE
 */

// typeof 
/*
ESTO SIRVE PARA RETORNAR EN UN STRING 
EL NOMBRE DEL TIPO DE DATO DE UNA VARIABLE
*/

console.log(typeof number) // retorna -> 'number'
console.log(typeof name) // retorna -> 'string'
