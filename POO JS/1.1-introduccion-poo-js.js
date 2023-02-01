/**
 * @var POO JS INTRODUCCION
 * 
 * Es un paradigma de programcion
 * Es el mas usado hoy en dia
 * Aplicable a muchos lenguajes
 * 
 * 
 * UN PARADIGMA ES UN MODELO DE TRABAJO
 * 
 * TODO ES UN OBJETO
 * 
 * QUE ES UN OBJETO?
 * 
 * ES UNA ABSTRACCION DEL MUNDO REAL
 * ES UNA REPRESENTACION DEL ESTADO Y LAS ACCIONES
 * QUE PUEDE REALIZAR ALGO/ALGUIEN
 * 
 * ATRIBUTOS
 * CARACTERITICAS DEL OBJETO
 * SE REFIERE AL ESTADO ACTUAL
 * SON MODIFICABLES Y ACCECIBLES
 * 
 * METODOS
 * ACCIONES DEL OBJETO
 * SE REFIEREN AL ESTADO ACTUAL
 * SON MODIFICABLES Y ACCECIBLES
 * 
 */
const c = console.log
// OBJETOS LITERALES - SINTAXIS

const user = {
    nombre: 'Yordhis',
    edad: 26,
    email: 'Yordhis@gmail.com',

    saludar(){c('hola')}
}

// PROTOTIPOS
// Es la base de toda la programacion en js.

// THIS (Scope)
// Se limita apartir de ES6 el alcance del this 
// se limita al objeto declarado
// De una forma global el this se iguala al windows