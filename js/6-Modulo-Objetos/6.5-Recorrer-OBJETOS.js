/**
 * @var RecorrerObjects
 */
const c = console.log
let perro = {
    nombre: 'Neron',
    edad: 6,
    color: 'negro',
    sexo:'macho',
    vacunas: true,
    correr(){
        return `${this.nombre} corre rapido`
    }
}

// Operadores
    //* delete
    //* in
    // es un operador que devuelve true o false 
    // si el objeto tiene la propiedad buscada
    c('sexo' in perro)
    c('nombre' in perro)
    c('vacuna' in perro)
    c('vacunas' in perro)
    // tambien se puede recorrer con in un object
        //** .hasOwnProperty(propieda)
        // esto lo que hace es preguntar si 
        // la propiedad pertenece verdaderamente
        // al objeto


// Mutabilidad
// los datos primitivos se asignan por valor
// estos datos son independientes
// es decir que si:
let a = 'gato', b = 'perro'
c(a)
c(b)
a=b
b= 'persona'
c(a)
c(b)
// si uno cambia el otro conserva su dato


// Los Objetos se asignan por referencia
// es decir que  estan encadenados y si el
// objeto A cambia el B tambien
let otroPerro = perro
c(otroPerro)

otroPerro.altura = 10
c(perro)
c(otroPerro)

// SI QUEREMOS CREAR UN OBJETO APARTIR DE OTRO PERO QUE 
// NO ESTE ENCADENADO ES DECIR QUE SEA INDEPENDIENTE SE 
// USA -> object.assign({}, perro) <-

let perroIndependiente = Object.assign({}, perro)

c(perroIndependiente)

perroIndependiente.orejas = 2

c(perro)
c(perroIndependiente)

// Recorrer un objeto con:
    // for in
    for(property in perro){
        c(property)
    }
    // vamos a añadirle una propiedad
    Object.prototype.patas = 125

    for(property in perro){
        c(property)
    }
    // el detalle de esto es que pastas es una
    // propiedad heredada y es un conflicto 
    // ya que deseamos saber cuales son las 
    // propiedades nativas del objeto.
    for(property in perro){
        if(perro.hasOwnProperty(property)){
            c(property)
        }
    }

    // for of 
    // no recorre un objeto, porque un objeto 
    // no tiene indices
    
    // Object.entries()
        // devuelve como array la propiedad y el valor
        c(Object.entries(perro))
        
    // Object.keys()
        // deveulve las propiedades
        c(Object.keys(perro))

    // Object.values()
        // deveulve los valores de las propiedades
        c(Object.values(perro))