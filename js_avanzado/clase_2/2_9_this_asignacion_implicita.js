; // este punto y como es por si quedo una function anonimas
// abierta
/**
 * 
 * Barinas, 13-07-2022
 * video 2.9
 * 
 * profesor: Jonathan Mircha
 * 
 * @_EL
 * @_THIS
 * 
 * El this en JS es diferente de otros lenguajes por
 * su comportamiento.
 * 
 * Y la clave de entender el comportamiento de @this, es
 * tener claro donde se invoca, para saber que objeto le
 * asigna.
 * 
 * tiene 5 formas de declararse o contextos
 * 1- Asignacion implicita
 * 2- Asignacion exlicita
 * 3- Asignacion con new (instancias)
 * 4- Asignacion global
 * 5- Las Arrow Function
 * 
 */ 
// PRIMERO CREAMOS UNA FUNCION ANONIMA AUTOEJECUTADA
// ((c) =>{
// })(console.log)

// 1- Asignacion implicita
((c) =>{

    // 1. Asignacion implicita
        // Caso 1
        // This esta siendo invocado dentro de un metodo.
        // This, hace referencia al objeto, que contiene el metodo
        // donde se invoca.
            c('*******Asignacion Implicita*******')

            let yo = {
                nombre: 'Yordhis',
                edad: 26,
                saludar: function (){
                    c(`hola soy ${this.nombre}`)
                }
            }

            yo.saludar()
        
        // Caso 2
        // Existe una funcion que recibe un objeto como parametro
        // dentro de ella y se le asigna un metodo al objeto.
        // @this en este caso hace referencia al objeto que se le añade al metodo.
            let preparandoSaludo = function (obj) {
                obj.saludar = function (){
                    c(`hola soy ${this.nombre}`)
                }
            }
        // creamos unas contantes
        const debora = {
            nombre: 'Debora',
            eda: 24
        }, yordhis = {
            nombre: 'Yordhis Jose',
            eda: 26
        }

        preparandoSaludo(debora)
        preparandoSaludo(yordhis)

        debora.saludar()
        yordhis.saludar()

        // Caso 3
        // Una function que retorna un objeto, que contiene
        // un metodo que invoca this

        let Humano = function (nombre, edad, perro) {
            return {
                nombre: nombre,
                edad: edad,
                saludar: function (){
                    c(`hola soy ${this.nombre}`)
                }, 
                perro: {
                    nombre: perro,
                    saludar: function (){
                        c(`${this.nombre} gua guaaauuuu!!!`)
                    }
                }
            }
        }

        const juan = Humano('Juan', 29, 'neron')
        juan.saludar()
        juan.perro.saludar()

        // conclusion: this es invocado dentro de un metodo, implicitamente este hace
        // referencia al objeto que contiene el metodo, sin importar si el metodo es
        // añadido luego de haber sido creado el objeto, o si es una funcion que 
        // retorna un objeto
        






})(console.log);

// 2- Asignacion exlicita video 2.10
((c) => {
    // 2- Asignacion exlicita
    // Desde ES5 cuando deseamos explicitamente referenciar this contamos con 3
    // metodos call, apply y bind
    c('********Asignacion de this Explicito********')

    const nombrar = function (f1, f2, f3) {
        c(`${this.nombre} es el lenguaje Front end de la web y tiene librerias y 
        frameworks muy poderosos como: ${f1}, ${f2}, ${f3}`)
    };

    const lenguaje = {
        nombre: 'JavaScript',
        vercion: 6
    }

    let frameworks = ['Angular', 'React', 'Vue.js']

    // call: Permite definir a que va a hacer referencia this, en su primer
    // parametro, los parametros siguientes son los que recibe la funcion
    nombrar.call(lenguaje, frameworks[0], frameworks[1], frameworks[2])
    
    // apply: Permite referenciar this en el primer parametro, pero este nos
    // permite pasar un array, como los parametros de la funcion
    nombrar.apply(lenguaje, frameworks)
    
    // bind: devuelve una funcion, en donde this, hace referencia al objeto que
    // pasamos en su parametro
    let frameworksJS = nombrar.bind(lenguaje, frameworks[0], frameworks[1], frameworks[2])
    frameworksJS()


})(console.log);

// 3- Asignacion con new (instancias)
((c) =>{
    // 3- Asignacion con new (instancias)
    // Cuando invocamos this en un constructor, este hace referencia al onjeto
    // que ha instanciado
    c('**********Asignacion con new *********')
    
    let Framework = function (nombre, url, lenguaje) {
        this.nombre = nombre
        this.url = url
        this.lenguaje = lenguaje
    }

    const react = new Framework('React', 'https://facebook.github.io/reatc/', 'JavaScript'),
    vue = Object.create(Framework)
    vue.nombre = 'Vue.js'

    c(react)
    c(vue)
})(console.log);

// 4- Asignacion global video 2.11
((c) =>{
    // 4- Asignacion global
    // Uno de los grandes errores con this, es que cuando no se tiene una refrencia
    // al objeto, que representa this, este hace referencia al objeto global:
    // 1- Windows en los navegadores
    // 2- Global en Node.js

    c('**********Asignacion Global*********')

    const dimeUnFramework = function () {
        c(this.nombre)
    }

    dimeUnFramework()
    // variables globales
    // sino le espesificamo let, conts a una variable
    // ella automaticamente se cuelga en window o global
    nombre = 'angular'
    // window.nombre = 'angular'
    dimeUnFramework()

})(console.log);

//  5- Las Arrow Function video 2.12
((c) =>{
    //  5- Las Arrow Function

    c('*******Arrow Functions y el problema de this******')

    const lenguaje = {
        name: 'JavaScript',
        version: 6,
        frameworks:[
        {name: 'React'},
        {name: 'Angular'},
        {name: 'Vue.js'}
        ], 
        nombrar: function () {
            // El problema de this en javascript
            /*this.frameworks.forEach(function (fw){
              c(`${fw.name} es un framework de ${this.name}`)  
            }) error de SCOPE*/

            // Solucion 1 de ES3
            /*let that = this
            this.frameworks.forEach(function (fw){
                c(`${fw.name} es un framework de ${that.name}`)  
            })  */

            // Solucion 2 de ES5
            /*this.frameworks.forEach(function (fw){
                c(`${fw.name} es un framework de ${this.name}`)  
            }.bind(this)) */

            // Solucion 3 de ES6
            this.frameworks.forEach(fw => c(`${fw.name} es un framework de ${this.name}`))
        }
    }
    
    lenguaje.nombrar()
})(console.log)