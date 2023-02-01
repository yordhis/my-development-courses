/**
 * 
 * Barinas, 01-08-2022
 * video 6.9
 * 
 * profesor: Jonathan Mircha
 * 
 * @_6_9_Formulario_reactivo_con_vanillaJS
 * 
 * 
 */
;
((c, d) => {    
    c('******Formulario reactivo con vanillaJS*****')

    const form = d.forms[0],
    inputs = d.querySelectorAll('[required]')

    //mostramos lo que tenemos en los inputs
    c(inputs)

    // escuchamos el evento submit

    form.addEventListener('submit', e => {
        e.preventDefault()
        alert(' Se ha enviado el formulario')
    })

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

        input.addEventListener('keyup', e => {
            if (input.pattern) {
                let regex = RegExp( input.pattern )
                return ( !regex.exec(input.value) )
                ? d.querySelector(`#${input.name}`).textContent = `Formulario invalidado, escribe ${input.title}`
                : d.querySelector(`#${input.name}`).textContent = null
            }else{
                return ( !input.value )
                ? d.querySelector(`#${input.name}`).textContent = `${input.title} Es requerido`
                : d.querySelector(`#${input.name}`).textContent = null
            }
        })
    })

})(console.log, document)