/**
 * 
 * Barinas, 16-07-2022
 * video 4.4
 * 
 * profesor: Jonathan Mircha
 * 
 * @_PROGRAMACION
 * @_ASINCRONA
 * 
 * @_Que_es_
 * - Establese la capacidad que tienen las operaciones del
 *   flujo de un programa para devolver el control de la
 *   ejecucion al mismo (programa) antes de que hayan
 *   terminado sus procesos, mientras siguen operando en segundo plano
 *   (procesos u operaciones no bloqueadas)
 * 
 * - Es escalable; pero complica algunas cosas en la programacion
 *   se debe llevar una idea clara del flujo de procesos
 *  
 * @_Como_controlar_el_flujo_ASINCRONO_
 * - Mediente:
 * @param Callbacks *_video 4.1, 4.2
 * @param Promesas *_video 4.3
 * @param Generadores *_video 4.4
 * @param Funciones_Asincronas_ (async & await)
 * 
 */

/** @param Generadores */
((c) => {
    c('********Generadores**********')
    // function 
    const cuadrado = value => {
        setTimeout(() => {
             c({ value: value, result: value * value })   
        }, 0 | value * 100);
    }
    // generador
    function* generador() {
        c('inicio Generador')
        /**
         * La palabrareservada (yield) 
         * es un retorno parsial de un valor
         */
        yield cuadrado(0)
        yield cuadrado(1)
        yield cuadrado(2)
        yield cuadrado(3)
        yield cuadrado(4)
        yield cuadrado(5)
        yield cuadrado(6)
        yield cuadrado(7)
        yield cuadrado(8)
        yield cuadrado(9)
        yield cuadrado(10)
    }

    // ejecutando el generador

    let gen = generador()
    c( gen.next() )
    c( gen.next().value )
    c( gen.next().value )
    c( gen.next().value )
    c( gen.next().value )
    c( gen.next().value )
    c( gen.next().value )
    c( gen.next().value )
    c( gen.next().value )
    c( gen.next().value )
    c( gen.next().value )
    c( gen.next() )
    

})(console.log);

// ES7 estandar
/*** @param Funciones_Asincronas_ (async & await) */

((c) => {
    c('****Async - Await FUNCTIONS****')
    // creamos la promesa
    const cuadrado = value => {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve({
                    value: value,
                    result: value * value
                })
            }, 0 | Math.random() * 100);
        })
    }

    async function asyncAwait () {
        c('Inicio de Async Functions')
        let obj = await cuadrado(0)
        c(`Async Function: ${obj.value}, ${obj.result}`)
        ,obj = await cuadrado(1)
        c(`Async Function: ${obj.value}, ${obj.result}`)
        ,obj = await cuadrado(2)
        c(`Async Function: ${obj.value}, ${obj.result}`)
        ,obj = await cuadrado(3)
        c(`Async Function: ${obj.value}, ${obj.result}`)
        ,obj = await cuadrado(4)
        c(`Async Function: ${obj.value}, ${obj.result}`)
        ,obj = await cuadrado(5)
        c(`Async Function: ${obj.value}, ${obj.result}`)
        ,obj = await cuadrado(6)
        c(`Async Function: ${obj.value}, ${obj.result}`)
        ,obj = await cuadrado(7)
        c(`Async Function: ${obj.value}, ${obj.result}`)
        c('Fin de Async Functions')
    }

    /**
     * Este tipo de funciones se usa mucho para 
     * el lado del backend para las conecciones y consultas 
     * a la DB
     */
    asyncAwait()


})(console.log)