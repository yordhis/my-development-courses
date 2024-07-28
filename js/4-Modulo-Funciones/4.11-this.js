/**
 * @var THIS.X 
 * 
 * Es una forma de espesificar que se esta solicitando 
 * un atributo de un objeto, ya que si no se declara u this.atributo
 * JS lo buscaria en el SCOPE mas alto que se conose como variables globales
 *  
 */

// Ejemplo:

let edad = 13 // tomaria este valor

let user = {
    nombre: 'yordhis',
    edad: 26,
    getEdad(){
        console.log(this.edad) // sin el THIS buscara la edad que esta en un nivel mas alto
    }
}

user.getEdad()