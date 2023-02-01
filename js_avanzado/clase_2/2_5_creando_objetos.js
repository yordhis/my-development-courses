/**
 * 
 * Barinas, 11-07-2022
 * video 2.5
 * 
 * profesor: Jonathan Mircha
 * 
 * @_CREANDO
 * @_OBJETOS
 * 
 * 
 */ 
/** formas de crear un objeto */
((c, d) => {
    // 1. Objeto literal
    c('***********Objeto Literal*********')
    const perro = {
        nombre: "neron",
        edad: 4,
        raza: "Mestizo",
        genero: "Macho",
        esterilizado: false,

        ladrar () {
            c('Gua guauuuu!!')
        },

        comer (comida) {
            c(`${this.nombre} come ${comida}`)
        },

        aparecer (imagen) {
            d.write(`<img src="${imagen}">`)
        }
    }

    /** mostrar los atributos */
    c(perro, 
        perro.nombre,   
        perro.edad,   
        perro.raza,   
        perro.genero,   
        perro.esterilizado,   
    )

    /** ejecutar sus funciones o metodos */
    
    perro.ladrar()
    perro.comer('tacos')
    perro.aparecer('https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')

    // 2. Prototipo Object VIDEO 2.6
    c('*******Prototipo Object******')
    // esto es declaqrar un objeto de manera explicita
    // que va dentro del prototipo
    const perro2 = new Object()
        perro2.nombre = 'Firulys'   
        perro2.edad = 2   
        perro2.raza = 'dalmata'   
        perro2.genero = 'macho'   
        perro2.esterilizado = true 

        /** Sus acciones */
        perro2.ladrar = () => c('gua gua')
        // con el metodo comer al llamar this.nombre falla por el scope
        // es decir que se eleva el this
        // perro2.comer = (comida = 'pollo') => c(`${this.nombre} come ${comida}`)
        // Solucion 1
        // perro2.comer = (comida = 'pollo') => c(`${perro2.nombre} come ${comida}`)
        // Solucion 2 prof
        perro2.comer = function (comida = 'pollo') {
            c(`${this.nombre} come ${comida}`)
        } 
        perro2.aparecer = imagen => d.write(`<img src="${imagen}">`)

        /** ejecutando */

        perro2.ladrar()
        perro2.comer('sardina')
        perro2.aparecer('https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')


        // 3. Funcion Construcrtora VIDEO 2.7 12/07/2022
        c('*******Funcion Construcrtora******')
        function Perro (nombre, edad, raza, genero, esterilizado) {

            // Atributos
            this.nombre = nombre 
            this.edad = edad
            this.raza = raza
            this.genero = genero
            this.esterilizado = esterilizado

            this.ladrar = () => c('gua gua')
            this.comer = (comida = 'pollo') => c(`${this.nombre} come ${comida}`)
            this.aparecer = imagen => d.write(`<img src="${imagen}">`)
        }

        //instaciamos la funcion constructora o objeto
        const perro3 = new Perro('Susy', 8, 'Pudel', 'hermbra', false)
              perro3_2 = new Perro('Vetoven', 12, 'San Bernardo', 'Macho', true)
 
        c(
            perro3,
            perro3.ladrar(),
            perro3.comer('pizza'),
            perro3.aparecer('https://images.pexels.com/photos/4192830/pexels-photo-4192830.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'),
            perro3_2,
            perro3_2.ladrar(),
            perro3_2.comer('pizza'),
            perro3_2.aparecer('https://images.pexels.com/photos/4192830/pexels-photo-4192830.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'),
           
        )


        // 4. Class ES6 VIDEO 2.8
        c('*******Class ES6******')

        class Dog {
            constructor(nombre, edad, raza, genero, esterilizado){

                // Atributos
                this.nombre = nombre 
                this.edad = edad
                this.raza = raza
                this.genero = genero
                this.esterilizado = esterilizado
            }

            ladrar () {
                c('Gua guauuuu!!')
            }
    
            comer (comida) {
                c(`${this.nombre} come ${comida}`)
            }
    
            aparecer (imagen) {
                d.write(`<img src="${imagen}">`)
            }
        }

        const perro4 = new Dog('Lasi', 8, 'Pudel', 'hermbra', false)
        const perro4_2 = new Dog('Luis', 8, 'salchicha', 'hermbra', false)

        c(
            perro4,
            perro4.ladrar(),
            perro4.comer('pizza'),
            perro4.aparecer('https://images.pexels.com/photos/4192830/pexels-photo-4192830.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'),
            perro4_2,
            perro4_2.ladrar(),
            perro4_2.comer('pizza'),
            perro4_2.aparecer('https://images.pexels.com/photos/4192830/pexels-photo-4192830.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'),
           
        )
})(console.log, document);

/** Nota: se puede crear prototipo personalizados 
 * con la funcion prototipado */