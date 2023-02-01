/**
 * 
 * Barinas, 16-07-2022
 * video 4.1, 4.2
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
 * @param Generadores
 * @param Funciones_Asincronas_ (async & await)
 * 
 */

/** @param Callbacks */
((c) => {
    c('************Programacion Asincrona************\n')
    c('\t************CALLBACKS************\n')

    const cuadrado = (value, callback) => {
        setTimeout(() => {
            callback(value, value * value)
        }, 0 | Math.random() * 100);
    }

    cuadrado(0, (value, result)=>{
        c('***Inicio de Callback***')
        c(`Callback: ${value}, ${result}`)
        cuadrado(1, (value, result)=>{
            c(`Callback: ${value}, ${result}`)
            cuadrado(2, (value, result)=>{
                c(`Callback: ${value}, ${result}`)
                cuadrado(3, (value, result)=>{
                    c(`Callback: ${value}, ${result}`)
                    cuadrado(4, (value, result)=>{
                        c(`Callback: ${value}, ${result}`)
                        cuadrado(5, (value, result)=>{
                            c(`Callback: ${value}, ${result}`)
                            cuadrado(6, (value, result)=>{
                                c(`Callback: ${value}, ${result}`)
                                cuadrado(7, (value, result)=>{
                                    c(`Callback: ${value}, ${result}`)
                                    cuadrado(8, (value, result)=>{
                                        c(`Callback: ${value}, ${result}`)
                                        cuadrado(9, (value, result)=>{
                                            c(`Callback: ${value}, ${result}`)
                                            cuadrado(10, (value, result)=>{
                                                c(`Callback: ${value}, ${result}`)
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })

    c('************Callback Hell yeiiii!!!!!************\n')

})(console.log);

/** @param Promesas */
((c) => {
    c('\n******Promises******\n')

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

        cuadrado(0)
        .then(obj => {
            c('***Inicio Promise****')
            c(`Promise: ${obj.value}, Resultado: ${obj.result}\n`)
            // Para anidar la func debemos retornarla
            return cuadrado(1)
        })
        .then(obj => {
            c(`Promise: ${obj.value}, Resultado: ${obj.result}\n`)
            return cuadrado(2)
        })
        .then(obj => {
            c(`Promise: ${obj.value}, Resultado: ${obj.result}\n`)
            return cuadrado(3)
        })
        .then(obj => {
            c(`Promise: ${obj.value}, Resultado: ${obj.result}\n`)
            return cuadrado(4)
        })
        .then(obj => {
            c(`Promise: ${obj.value}, Resultado: ${obj.result}\n`)
            return cuadrado(5)
        })
        .then(obj => {
            c(`Promise: ${obj.value}, Resultado: ${obj.result}\n`)
            return cuadrado(6)
        })
        .then(obj => {
            c(`Promise: ${obj.value}, Resultado: ${obj.result}\n`)
            return cuadrado(7)
        })
        .then(obj => {
            c(`Promise: ${obj.value}, Resultado: ${obj.result}\n`)
            return cuadrado(8)
        })
        .then(obj => {
            c(`Promise: ${obj.value}, Resultado: ${obj.result}\n`)
            return cuadrado(9)
        })
        .then(obj => {
            c(`Promise: ${obj.value}, Resultado: ${obj.result}\n`)
            return cuadrado(10)
        })
        .then(obj => {
            c(`Promise: ${obj.value}, Resultado: ${obj.result}\n`)
            c('Finalizo la Promise')
        })
        .catch(err => c(err))

        c('*******Promise Hell yeiiii!!******')

})(console.log);

