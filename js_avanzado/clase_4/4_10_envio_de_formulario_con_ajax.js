/**
 * 
 * Barinas, 21-07-2022
 * video 4.10
 * 
 * profesor: Jonathan Mircha
 * 
 * @_EJERCICIO_4
 * @_ENVIO_DE_FORMULARIO_CON_AJAX
 * 
 * PARA TRABAJAR CON AJAX DEBE ESTAR EN UN AMBIENTE
 * DE SERVIDOR WEB OSEA EN XAMPP/HTDOCS
 * 
 * 
 */
;
((c, d, ajax) =>{

    const READY_STATE_COMPLETE = 4,
    OK = 200,
    NOT_FOUND = 404,
    form = d.forms[0], 
    // este es un elemento padre que detecta todos los 
    // formulario en el documento y como hay uno colocalos la posicion form[0]

    preload = form.querySelector('.preload'),
    message = form.querySelector('.message')

    // 1- escuchar el evento form
    form.addEventListener('submit', e => {
        
        // querySelectorAll me retorna dos los input que tiene el atributo REQUIRED del formulario
        let formsElements = d.querySelectorAll('[required]'),
        formData = ''
        
        e.preventDefault()

        ajax.open('POST', './4_10_send_mail.php', true)
        // seteamos el header con el formarto x-www-form-urlencode
        ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        preload.classList.remove('hidden')
     
        ajax.addEventListener('load', e =>{
            if( ajax.readyState === READY_STATE_COMPLETE ){
                preload.classList.add('hidden')
                message.classList.remove('hidden')

                // validamos que se ejecuto correctamente
                if ( ajax.status === OK) {
                    // asignamos la respuesta al elemento message

                    
                    message.innerHTML = ajax.response
                    // reseteamos el form
                    form.reset()
                  } else if ( ajax.status === NOT_FOUND ) {
                    message.innerHTML = `<b>El servidor NO responde. Error N° ${ajax.status}: <mark>${ajax.statusText}</mark></b>`
                  }
            }
        })

        // Realizamos la serealizacion de los datos o los arreglamos "key": "value"
        formsElements.forEach( input => formData += `${input.name}=${input.value}&` )

        c(formData)

       ajax.send( encodeURI(formData) )
     
    })

})(console.log, document, new XMLHttpRequest());