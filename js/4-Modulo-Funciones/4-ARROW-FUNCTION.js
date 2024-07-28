/**
 * @FUNCIONES_FLECHAS - ARROW FUNCTIONS
 * 
 * SIMBOLO: "=>"
 * 
 * EJEMPLO:
 */

/** MODO EMS5 */
// const sumar = function (a,b) {
//     return a+b
// }
// const restar = function (c,d) {
//     return c-d
// }

/** MODO EMS6 2015 */
const sumar = (a,b) => a+b
const restar = (c,d) => c-d

const saludarPersonaV3 = nombre => {
    if(typeof nombre === "string"){
        return `Hola ${nombre}`
    }else{
        console.error("Tipo de dato no valido!!! XP")
    }
}

console.log(saludarPersonaV3('pedro pedro ppp'))