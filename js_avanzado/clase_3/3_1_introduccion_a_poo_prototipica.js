/**
 * 
 * Barinas, 13-07-2022
 * video 3.1
 * 
 * profesor: Jonathan Mircha
 * 
 * @_INTRODUCCION
 * @_A
 * @_POO
 * @_PROTOTIPICA
 * 
 * En pocas palabras se trata de un molde 
 * que permite heredar sus caracteristicas
 * 
 * @Programacion_basada_en_prototipos
 * 
 * Es un estilo POO en la que las clases no estan presentes
 * y la reutilizacion de comportamiento (herencia)
 * se lleva a cabo a traves de un proceso de decoracion
 * de objeto existentes que sirve de prototipo
 * 
 * - Anidacion de objetos
 * - POO con closures
 * - POO con funciones construtoras
 * - Factory Patter (fabrica)
 * - POO con Prototype
 * - Herencia Prototipica
 *  
 * 
 */ 

// - Anidacion de objetos video 3.2
/*
    Se puede acceder a los objetos con las notacion de:
    punto.name
    array['name]
    mixta.perro['name']
*/
((c) => {

    c('*********Anidacion de objetos**********')
    const curso = {
        titulo: 'Curso de JS avanzado',
            docente: {
                nombre: 'Jonathan Mircha',
                edad: 33,
                nacionalidad: 'Mexicano',
                contacto:{
                    email: 'prof@gmail.com',
                    url:'prof.com',
                    twitter: '@jonmircha',
                    ubicacion: 'CDMX'
                }
            },
            costo: 40,
            url: 'https://curso.com',
            online: true,
            plataforma: {
                nombre: 'EDteam',
                url: 'https://ed.team',
                oficinas: ['lima', 'Bogota', 'Corralito']
            }

    }

    c(curso.docente.nombre)
    c(curso['docente']['edad'])
    c(curso['docente'].contacto['email'])
    c(curso['plataforma']['nombre'])

})(console.log)