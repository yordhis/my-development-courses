/**
 * @var OBJETOS
 * 
 *  Es un conjunto de propiedades y metodos donde las 
 *  propiedades son las caracteristicas del objeto y los 
 *  métodos son las acciones que puede hacer los objetos
 */
const c = console.log

 let perro = {
     nombre: 'Neron',
     edad: 3,
     color: "negro",
     sexo: 'macho',
     vacunas: true,
     correr(){
        return this.nombre + ' esta corriendo'
     }
 }
// para acceder a las propiedades y metodos solo 
// se coloca perro.propiedad o metodo()
 c(perro)
 c(perro.nombre)
 c(perro.edad)
 c(perro.color)
 c(perro.sexo)
 c(perro.vacunas)
 c(perro.correr)
 c(perro.correr())

 // tambien se puede acceder a las propiedades por medio
 // de la notacion de ['name_propiedad']
 c(perro['color'])

/**
 * @_Mostrar_keys_y_values_de_un_OBJETO
 * 
 * Para esto se utilisa el elemento @var Object
 */

let valoresDelObjeto = Object.values(perro)
// => Array(6) [ "Neron", 3, "negro", "macho", true, correr() ]


let keysDelObjeto = Object.keys(perro)
// => Array(6) [ "nombre", "edad", "color", "sexo", "vacunas", "correr" ]

 /** 
  * Los objetos pueden recibir expresiones o variables 
  * en sus KEYS
  */
    // creamos variable globales 
    let a = 'hola', b = 'mundo'
    // creamos el objeto saludo
    let saludo = {
        [a + b]: 'Mi primer hola mundo'
    }
    c(saludo)

/**
 * También se puede igualar expresiones a las propiedades del objeto
 * sintaxis 1 de igualar
 */
 let myObject = {
     a: a,
     b: b
 }
 c(myObject)

 /** sintaxis 2 de igualar optimizada */
 let myObject2 = {a,b}
 c(myObject2)

 /**
  * @var AGREGAR Y QUITAR PROPIEDADES DE UN OBJETO 
 */

 let user ={
     nombre: 'juan',
     apellido: 'perez',
     edad: 45,
     profesion: 'juan',
     empresa: "lol"

 }
 // eliminar propiedades
 c(user)
 c(delete user.empresa)
 c(user)

 // agregar propiedades
 user['company'] = 'Start'
 user.subcripto = true

 c(user)

 /**
  * @var Prototipos
  * 
  * es un molde de otro molde donde se pueden heredar otros moldes
  * 
  * todo lo que veamos en mayusculas es un prototipo
  * 
  * @param String
  * @param Object
  * @param Numbers
  * @param Boolean
  */

  // Esto muestra todo el prototipo del USER
  c(Object.getPrototypeOf(user))

  // aqui podemos ver que el hola mundo es un object
  // ya que al colocarle .metodos se ejecutan
  c('hola mundo'.length)
  c('hola mundo'.toUpperCase())
  c(Object.getPrototypeOf('hola mundo'))

  // Para insertar metodos a los prototipos se usa
  // .prototype.metodo1...
  String.prototype.length2 = '120'

  c('hola'.length2)