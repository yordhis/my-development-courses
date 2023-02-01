
const c = console.log
/**
 * @param CREACION
 * @param OBJETOS
 * @param LITERALES
 * VIDEO 2.1
 * 
 */

let usuario1 = {
    nombre : "Yordhis osuna",
    email : "osuna@gmail.com",
    edad : 26
}

let usuario2 = {
    nombre : "Yordhis",
    apellido: "osuna",
    correo : "yordhis@gmail.com",
    edad : 28
}


/**
 * @param CREACION
 * @param DE
 * @param CLASES
 * VIDEO 2.2
 * 
 * Las clases de POO es simplemente un concepto general donde
 * se agrupan todas las instacias que pertenecen a un mismo tipo que 
 * que comparten atributos y metodos.
 */

class Usuario{

    // Template  o plantilla para crear usuarios
        constructor(nombre, apellido, correo, edad){
            this.nombre = nombre
            this.apellido = apellido
            this.correo = correo
            this.edad = edad
        }
}

let yordhis = new Usuario('Yordhis', 'Osuna', 'yorrdhis@gmail.com', 26)
c(yordhis)

let debora = new Usuario('debora', 'de Osuna', 'deby22@gmail.com', 23)
c(debora)


/**
 * @param METODOS
 * @param DE
 * @param CLASES
 * VIDEO 2.3
 * 
 * SON LAS ACCIONES DE LA CLASES
 * Y SIEMPRE DEBEN RETORNAR UNA ACCION O DATO
 */



class Familia{
    constructor(apellido, casa, carro, rol){
        this.apellido = apellido
        this.casa  = casa
        this.carro = carro
        this.rol = rol
    }

    // SINTAXIS DE UN METODO EN UNA CLASE ES LA SIGUIENTE:
    // para escribir un metodo se coloca como
    // un atributo pero con parentecis y llaves
    saludar(){
        return document.write(`
            <div>
                <p> Hola somos de la Familia ${this.apellido}</p>
            </div>
        `)
    }

}

let familia = new Familia('Osuna', 'apartamento', 'mustan', 'funcional')


/**
 * @param HERENCIA
 * @param DE
 * @param CLASES
 * VIDEO 2.4
 * 
 * ES LA CAPACIDAD DE HEREDAR METODOS Y ATRIBUTOS
 */

class Padres extends Familia{
    constructor(nombre, cedula, estadoCivil, apellido, casa, carro, rol){
        super(apellido, casa, carro, rol) // SUPER LO QUE HACE ES INVOCAR EL CONSTRUCTOR DE LA CLASE FAMILIA
        this.nombre = nombre 
        this.cedula = cedula
        this.estadocivil = estadoCivil
    }
}

let yorwis = new Padres('Yorwis', 20209256, 'casado', 'Aguirre', 
'Casa', 'ferrari', 'Papa' )

let fabiola = new Padres('Fabiola', 24826599, 'casada', 'Aguirre', 
'Casa', 'ferrari', 'Mama' )


// EJEMPLO 2 CON FORMAS

class Forma{
    constructor(alto, ancho, color){
        this.alto = alto
        this.ancho = ancho
        this.color = color
    }

    dibujar(){
        return document.body.innerHTML = `
        <div 
            style="
                width: ${this.ancho}px; 
                height: ${this.alto}px; 
                background: ${this.color}
            "
        >
        </div>`
    }
}

let pintor = new Forma(220, 400, "red")

pintor.dibujar()

// TAREA CREAR DOS CLASES QUE EXTIENDA LA FORMA
// Y DIBUJEN UN CIRCULO, UN CUADRADO Y UN RECTANGULO QUE 
// SE DOS BESES MAS ANCHO DE LO ALTO

