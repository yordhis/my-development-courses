/**
 * 
 * Barinas, 25-07-2022
 * video 5.3
 * 
 * profesor: Jonathan Mircha
 * 
 * @_FUNCIONES_PURAS
 *
 * - La PF se basa en las premisas de poder construir
 *   programas inmutables por medio de pequeños 
 *   bloques logicos, las funciones
 * 
 * - Y se debe intentar desarrollar funciones lo mas puras posible
 * 
 * @_SE_CARACTERIZA
 * 
 * - Depende solo de los parametros de entrada proporcionados
 *   y no de ningun estado externo a la funcion que podria 
 *   cambiar durante la elevacion o entre llamadas
 * 
 * - No inflige cambios mas alla de su ámbito. Por lo tanto, no 
 *   tiene que midificar estados globales, ni estados que han 
 *   pasado por referencia
 * 
 */

/** UNA FUNCION IMPURA */
let likes = 0 
function addLike() {
    return ++likes
}
/**
 * - Esto es una funcion impura porque esta
 *   modificando estados que no se encuentran en su ámbito y
 *   hace uso de una variable externa
 */


/** UNA FUNCION PURA */
function addLike(likes) {
    return ++likes
}

addLike( addLike(0) ) // se ejecuta dos veces y el resultado es 2

/**
 * - Nos ayuda a cometer menos errores y a verificar en todo momento
 *   como es el estado antes y despues de ejecutar una funcion
 * 
 * - Evitar este tipo de uso, hará que nuestro codigo sea mas 
 *   robusto y facil de testear
 * 
 * @_Casos_que_podrían_causar_efectos_secundarios
 * 
 * - Cambiar una bariable u objeto global
 * - Cambiar un valor original del argumento de una funcion
 * - Procesar datos de entreada del usuario
 * - Lanzar excepciones
 * - Mostrar datos por pantalla
 * - Consultar el DOM, las cookies o una base de datos
 * 
 *   Muchos de estos efectos secundarios no se pueden evitar
 *   al acceder app reales. Sin embargo, la PF nos ayuda a delimitar 
 *   y detectar estos casos para que produzcan el menor daño posible
 * 
 */