/**
 * 
 * Barinas, 27-07-2022
 * video 5.5
 * 
 * profesor: Jonathan Mircha
 * 
 * @_METODOS_FUNCIONALES
 * 
 * - Cumple con todas las caracteristicas funcionales
 * - Son de orden superior
 * - Se pueden encadenar
 * - necesitan una expresion LAMBDA para funcionar
 * - Permiten: 
 *      ° Abstrae el control de flujo de la logica de negocio
 *      ° Evitar el uso de bucles e iteraciones
 *      ° Tienen ambito de bloque
 * 
 * 
 * @_COMPARACION_DE_PF_DE_POO
 * 
 * @_PF
 * 
 * - Arquitecturas centradas en la transformacion
 * - Variantes funcionales
 * - inmutabilidad
 * - Transparencia referencial
 * - Compositividad (se descompone un problema y componemos una solucion)
 * - Arquitectura dirigidas por flujos de datos
 * 
 * @_POO
 * 
 * - Puntos de Extención polimorfíca
 * - Arquitectura centrada en las abstracciones
 * - Sustitutividad Liskoviana
 * - Encapsulacion de estados
 * - Arquitectura dirigida por flujo de control
 */

/** Lets CODE */

/**
 * VIDEO 5_6
 * @_METODOS_FUNCIONALES_SON
 * 
 * - map() obtiene los elementos y retorna un obj por elemento
 * - reduce() toma uno por uno y da un total 
 * - filter() filtra el elemento por medio de la condicion en la LAMBDA
 * 
 */

((c) => {

    c('***********Metodos Funcionales de ES5***********')
    c('reduce')
    c( [1, 2, 3, 4, 5].reduce(( acumulado, elemento ) => acumulado + elemento) )
    c( [1, 2, 3, 4, 5].reduce(( acumulado, elemento ) => acumulado * elemento) )
    
    c('map')
    c( [1, 2, 3, 4, 5].map( elemento  => elemento * elemento) )
    c( [1, 2, 3, 4, 5].map( elemento  => -elemento) )
    
    c('map')
    c( [1, 2, 3, 4, 5].filter(elemento => elemento % 2 === 0) )
    c( [1, 2, 3, 4, 5].filter(elemento => elemento % 2 === 1) )
    

})(console.log);