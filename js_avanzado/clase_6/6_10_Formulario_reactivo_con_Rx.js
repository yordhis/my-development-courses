/**
 * 
 * Barinas, 02-08-2022
 * video 6.10
 * 
 * profesor: Jonathan Mircha
 * 
 * @_6_9_Formulario_reactivo_con_RXJS
 * 
 * 
 */
;

(( c, d ) => {    
    c('******Formulario reactivo con RXJS*****')
    c(rxjs)
 
    const form = d.forms[0],
    inputs = d.querySelectorAll('[required]')
    formSubmit = rxjs.fromEvent(form, 'submit')
    inputsKeyup = rxjs.fromEvent(d, 'keyup')
    c(inputsKeyup)

    // ejecutamos el envio del formulario con un subscribe
    // esto sustituye a los addEventListener
    formSubmit
        .subscribe( e => {
            e.preventDefault()
            alert(' Se ha enviado el formulario')
        })

    // form.addEventListener('submit', e => {
    //     e.preventDefault()
    //     alert(' Se ha enviado el formulario')
    // })

    // vamos a recorrer todos los inputs para
    // agregarles los SPAN para mostrar los mensaje

    inputs.forEach(input => {
        let span = d.createElement('span')
        span.id = input.name
        /** 
         * @param afterend
         * añade el elemento al final
         */ 
        input.insertAdjacentElement('afterend', span)

        // vamos a hacer que cuando suelte la tecla 
        // mande un mensaje

        input = inputsKeyup
            .filter( e => e.target.required )
            .map( e => e.target )
            .subscribe( el => {
                if (el.pattern) {
                    let regex = RegExp( el.pattern )
                    return ( !regex.exec(el.value) )
                    ? d.querySelector(`#${el.name}`).textContent = `Formulario invaidado, escribe ${el.title}`
                    : d.querySelector(`#${el.name}`).textContent = null
                }else{
                    return ( !el.value )
                    ? d.querySelector(`#${el.name}`).textContent = `${el.title} Es requerido`
                    : d.querySelector(`#${el.name}`).textContent = null
                }
            })
    })

})( console.log, document )