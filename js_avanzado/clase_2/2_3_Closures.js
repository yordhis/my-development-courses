/**
 * Barinas, 11-07-2022
 * video 2.3
 * 
 * profesor: Jonathan Mircha
 * 
 * @_FUNCIONES
 * @_DE
 * @_CLAUSURA
 * 
 * @_CLOSURES_FUNCTIONS
 *
 * - Son un patron de diseño muy utilizado en JS
 *   que nos permite mantener privacidad en atributos y
 *   metodos. Encapsulan variables y funciones que unicamente
 *   seran accesibles si son devueltas con el operador 
 *   @var return
 * 
 * @_Funciones_Auto_Invocadas
 * (Immediately-Invoked-Funtions)
 * 
 * - Es un patron de diseño que produce un scope lexico.
 *   usadas para evitar hoisting, protege el cogido 
 *   del ambiente global y simultaneamente permite acceder a 
 *   metodos publicos al tiempo que conserva la privacidad 
 *   en las variables definidas dentro
 *  
 *
 *  @Ejercicio
 */

let contador = (() =>{
    // Pro convencion, a las variables privadas se 
    // antepone un '_' delante
    let _contador = 0

    function incrementar () {
        return _contador++
    }

    function decrementar () {
        return _contador--
    }

    function valor () {
        return _contador
    }

    return {
        // Aqui habilitamos o deshabilitamos lo que se puede retornar o acceder
        // desde afuera
        incrementar: incrementar,
        decrementar: decrementar,
        valor: valor
    }

})();

// si intentamos acceder a la variable contador 
// nos retornar undefined
console.log(contador._contador)


console.log(contador.valor())
console.log(contador.incrementar())
console.log(contador.incrementar())
console.log(contador.valor())
console.log(contador.decrementar())
console.log(contador.valor())

/**
 * @_Tipado_Blando
 * 
 * - Se puede rescribir las variables y cambiar el tipo de dato
 *   no es muy buena practica pero se puede hacer
 * 
 * 
 * @_Variable
 * 
 * - Es un espacio en memoria que puede variar
 *  
 * @_Tipo_de_datos
 * 
 * 1- Primitivos (se accede directamente al valor)
 *      ° String
 *      ° number
 *      ° boolean
 *      ° null
 *      ° undefined
 * 
 * 2- Complejos (se accede a la referencia del valor)
 *      ° Object = {}
 *      ° array = []
 *      ° function () {}
 *      
 * 
 * 
 */