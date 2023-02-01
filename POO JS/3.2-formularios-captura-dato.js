const c = console.log

/**
 * 
 * Video 3.2
 * otro ejemplo de uso para los objetos 
 * 
 * @param FORMULARIO 
 * @var CAPTURA.DE.INFORMACION
 */

let form1 = document.getElementById('formulario')

// este metodo addEventListener 
// es un escuchador de eventos 
// en este caso espera escuchar un SUBMIT
// despues se debe añadir un callback (una funcion)
// para manipular los datos del evento o la accion
/** en este caso como no se espera parametro colocaos el mismo - @var e - para retornarlo*/
form1.addEventListener('submit', e => {
    // este metodo previene la ejecucion del envio del formulario
    e.preventDefault() 
    
    // mostramos lo que hay en el evento
    /**
     * para mostrar la informacion capturada
     * nos dirigimos al prototipo @target
     * en ese prototipo veremos todos los inputs enviado
     * y retorna el elemento o recurso
     */
    c(e.target.nombres.value)
})