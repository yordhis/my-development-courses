/**
 * 
 * Barinas, 16-07-2022
 * video 4.5, 4.6
 * 
 * profesor: Jonathan Mircha
 * 
 * @_EJERCICIO_1
 * @_AJAX
 * 
 * PARA TRABAJAR CON AJAX DEBE ESTAR EN UN AMBIENTE
 * DE SERVIDOR WEB OSEA EN XAMPP/HTDOCS
 * 
 * 
 */

((c, d, ajax)=>{
    // Declaramos las variable necesarias
    const READY_STATE_COMPLETE = 4,
    OK = 200,
    NOT_FOUND = 404,
    // LEEMOS LOS ID DEL HTML
    preload = d.querySelector('#preload'),
    country = d.querySelector('#country'),
    menu = d.querySelector('.menu')


    /**
     *  @return Carga la pagina solicitada
     */
    function countryInfo(){
        // c(ajax)
        preload.innerHTML = '<i class="fa  fa-refresh  fa-spin  fa-5x"></i>'

        if ( ajax.readyState === READY_STATE_COMPLETE && ajax.status === OK ) {
            c(ajax)
            preload.innerHTML = ''
            country.innerHTML = ajax.response
          } else if ( ajax.status === NOT_FOUND ) {
            preload.innerHTML = ''
            country.innerHTML = `<b>El servidor NO responde. Error N° ${ajax.status}: <mark>${ajax.statusText}</mark></b>`
          }

    }

    /**
     * Esta funcion como esta declarada en un escuchador puede
     * recibir el evento
     * @param {} e 
     * 
     * retorna algo
     */
    function ajaxRequest(e){
        // si queremos que no se ejecute el enlace
        // hacemos una prevencion o restriccion
        e.preventDefault()
        
        // alert('funciona con mi nuevo ajax')

        // Gracias a la propagacion de eventos podemos 
        // acceder a los enlaces desde el evento capturado
        c(e.target.href)
        // desde los target
        // tenemos dos atributos 
        // localName = "a"
        // nodeName = "A"

        //validamos que el elemento seleccionado sea un link (a)
        if (e.target.localName == 'a') {
           
            // Abrimos el ajax
            // 1- metodo 2- url 3- esto indica que sea asincrona la peticion (siempre debe estar en true)
            ajax.open('GET', e.target.href, true)
            
            // añadimos un evento al ajax
            // 1- Estado de las peticiones 2- Un Callback o function
            ajax.addEventListener('readystatechange', countryInfo)
            
            // Las cabeceras
            ajax.setRequestHeader('content-type', 'text/html')

            // enviamos todo
            ajax.send()

        }
    }

    // escuchamos un evento
    menu.addEventListener('click', ajaxRequest)


})(console.log, document, new XMLHttpRequest())