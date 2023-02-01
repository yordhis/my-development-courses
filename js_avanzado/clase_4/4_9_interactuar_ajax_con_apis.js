/**
 * 
 * Barinas, 16-07-2022
 * video 4.9
 * 
 * profesor: Jonathan Mircha
 * 
 * @_EJERCICIO_3
 * @_INTERACTUANDO_AJAX_CON_APIS
 * 
 * PARA TRABAJAR CON AJAX DEBE ESTAR EN UN AMBIENTE
 * DE SERVIDOR WEB OSEA EN XAMPP/HTDOCS
 * 
 * 
 */

 ((c, d, ajax, json)=>{

    // leemos el elemento movies
    const starwars = d.querySelector('#starwars'),
    pagination = d.querySelector('#pagination')

    // creamos las varables
    let starwarsInfo, 
    starwarsTemplate = '' 


    function loadCharacters (startList) {
        // c( ajax )
        let starwarsInfo,
        starwarsTemplate = ''

        if( ajax.status >= 200 && ajax.status < 400 ){
            starwarsInfo = json.parse( ajax.responseText )
           c( starwarsInfo )
            starwarsTemplate +=  `
            <h2> Personajes de starwars total: ${ajax.count}</h2>
            <ol start="${startList}">
            `

            starwarsInfo['results'].forEach( people => starwarsTemplate +=  `<li>${people.name}</li>` );

            starwarsTemplate +=  `</o>
                <nav id="pagination">
                    <a href="${starwarsInfo.previous}" id="previus">Atras</a>  
                    <a href="${starwarsInfo.next}" id="next">Siguiente</a>  
                <nav>
            `
          
        }else{
            moviesTemplate = `<b>El servidor NO responde. Error N° ${ajax.status}: <mark>${ajax.statusText}</mark></b>`
        }

        // mostraos los resultados
        starwars.innerHTML = starwarsTemplate
    }

    // si el documento se recarga
    d.addEventListener('DOMContentLoaded', e => {
        ajax.open('GET', 'https://swapi.dev/api/people/', true)
        ajax.addEventListener( 'load', loadCharacters )
        ajax.send()
    })

    // Si se hace clic en los link de paginacion siguiente y atras

    d.addEventListener('click', e => {
        e.preventDefault()
        c(e)
     
        if( e.target.localName == 'a' && e.target.href.indexOf('null') === -1 ){
            // si pasa vamos a paginar
            // tenemos el dato de paginacion en el evento dentro de search
            let startList =  (( e.target.search.slice(-1) ) * 10 ) + 1 
            // = 11 :) obtengo el ultimo caracter con el slice que es 2 
            // lo multiplico por 10 y le sumo uno para que el elemento <ol> inicie en distintos numero 11 - 20

            // iniciamos el ajax para obtener otra ves los datos
            ajax.open('GET',  e.target.href || 'https://swapi.dev/api/people/', true)

            // para dar uso al hoisting usamos Arrow Function y un mini closure
            ajax.addEventListener( 'load', () => loadCharacters( startList) )
            ajax.send()

        }

    })


 })(console.log, document, new XMLHttpRequest(), JSON)