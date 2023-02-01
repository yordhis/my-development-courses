const c = console.log

/**
 * 
 * Video 3.3
 * otro ejemplo de uso para los objetos 
 * 
 * @param FORMULARIO 
 * @var CLASES
 */

class Usuario{
    constructor(nombres,apellidos,email,clave){
        this.nombres = nombres,
        this.apellidos = apellidos,
        this.email = email,
        this.clave = clave
    }
}


let form1 = document.getElementById('formulario')

form1.addEventListener('submit', e => {
    // este metodo previene la ejecucion del envio del formulario
    e.preventDefault() 
    
    // mostramos lo que hay en el evento
    /**
     * podemos crear variable para 
     * manipular los datos del formulario
     */
    let nombres = e.target.nombres.value
    let apellidos = e.target.apellidos.value
    let email = e.target.email.value
    let clave = e.target.clave.value

    /**
     * creamos un objeto literal apartir de los datos recibidos
     * y si los datos recibidos tienen los mismos nombre que los 
     * atributos del objeto literarl se omiten
     */

    let usuario = new Usuario(
        nombres,
        apellidos,
        email,
        clave
    )
    c(usuario)
})