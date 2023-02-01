/**
 * 
 * Barinas, 16-07-2022
 * video 4.8
 * 
 * profesor: Jonathan Mircha
 * 
 * @_EJERCICIO_2
 * @_AJAX_CON_JSON
 * 
 * PARA TRABAJAR CON AJAX DEBE ESTAR EN UN AMBIENTE
 * DE SERVIDOR WEB OSEA EN XAMPP/HTDOCS
 * 
 * 
 */

 ((c, d, ajax, json)=>{

    // leemos el elemento movies
    const movies = d.querySelector('#movies')

    // creamos las varables
    let moviesInfo, // en esta se va almacenar los json
    moviesTemplate = '' // aqui se concatenan todas las vistas que van en el elemento movies


    // el stringify() se encarga de convertir un objeto en cadena de texto
    /*c(
        'JSON.stringify()',
        {} + '\n',
        json.stringify({}),
    // el parse() convierte una cadenade texto que este con formato de json en un object
        '{"value": 12, "resul": 24}',
        json.parse('{"value": 12, "resul": 24}')

    )*/

    ajax.open('GET', './assets/movies.json', true)

    ajax.addEventListener('load', e => {
        let moviesInfo,
        moviesTemplate = ''

        if(ajax.status >= 200 && ajax.status < 400){
            moviesInfo = json.parse(ajax.responseText)

            moviesInfo['movies'].forEach(movie => {
                moviesTemplate +=  `
                <article>
                    <h2>${movie.title}</h2>
                    <p><b>${movie.year}</b></p>
                    <p><i>${movie.genres}</i></p>
                    <img src="${movie.poster}">
                </article>
                `
            });
          
        }else{
            moviesTemplate = `<b>El servidor NO responde. Error N° ${ajax.status}: <mark>${ajax.statusText}</mark></b>`
        }

        // mostraos los resultados
        movies.innerHTML = moviesTemplate

    })

    ajax.send()


 })(console.log, document, new XMLHttpRequest(), JSON)