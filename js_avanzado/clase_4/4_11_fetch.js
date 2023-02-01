/**
 * 
 * Barinas, 21-07-2022
 * video 4.11 Y 4.12
 * 
 * profesor: Jonathan Mircha
 * 
 * @_EJERCICIO_5
 * @_FETCH
 * 
 * PARA TRABAJAR CON AJAX DEBE ESTAR EN UN AMBIENTE
 * DE SERVIDOR WEB OSEA EN XAMPP/HTDOCS
 * 
 * 
 */

 
 ;
 ((c, d) => {
   const respuestaFetch = d.querySelector('#fetch')
   let tpl = ''
 
   fetch('http://jsonplaceholder.typicode.com/albums/1/photos')
     .then( response => response.json() )
     .then( albums => {
       c(albums)
       albums.forEach( el => tpl += `<a href="${el.url}"><img src="${el.thumbnailUrl}"></a>` )
       respuestaFetch.innerHTML = tpl
     })
     .catch( err => c(err.message) )
 })(console.log, document);

 /** @param CARGAR_ASYNC_UNA_IMAGEN VIDEO 4.12*/
 ((c, d) => {
    const img = d.querySelector('#fetch-img')
  
    fetch('./js-logo.png')
      .then( response => response.blob() )
      .then( blob => {
        c(blob)
        // ESTO CREA UN OBJETO DE LA URL 
        let objectURL = URL.createObjectURL(blob)
        // SE ASIGNA LA URL DE LA IMAGEN
        img.src = objectURL
        // SE LE DA MEDIDA
        img.style.maxWidth = '300px'
      })
      .catch( err => c(err.message) )
  })(console.log, document);
  
  /** PELICULAS */
  ((c, d) => {
    const movies = d.querySelector('#fetch-movies')
    let tpl = ''
  
    fetch('./assets/movies.json')
      .then( response => response.json() )
      .then( json => {
        c(json)
        json.movies.forEach( movie => {
          tpl += `
            <article>
              <h2>${movie.title}</h2>
              <p><b>${movie.year}</b></p>
              <p><i>${movie.genres}</i></p>
              <img src="${movie.poster}">
            </article>`
        })
  
        movies.innerHTML = tpl
      })
      .catch( err => c(err.message) )
  })(console.log, document);
 
