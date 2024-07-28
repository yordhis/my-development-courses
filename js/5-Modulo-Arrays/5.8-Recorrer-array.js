/**
 * @var Recorrer arrays
 */
const c = console.log
let profesores = ['juan', 'pedro', 'mateo', 'lucas', 'jeremia']

// for
for (let i = 0; i < profesores.length; i++) {
   c(profesores[i])
}
// Esta instruccion se usa pero no es tan practica se recomienda FOR OF

// for of
for (const profesor of profesores) {
    c(profesor + 'EdTeam')
}

/** 
 * @var forEach -> SIGNIFICA: PARA CADA 
 * 
 * Esto es un método que recibe un callback 
 * y no generar datos para guardar solo 
 * hace algo en la logica y ya.
 */
profesores.forEach( (elemento, indice, profesores) => {
    c(elemento) // el elemento de cada iteracion
    c(indice) // el indice de cada elemento
    c(profesores) // opcional se puede recibir ARRAYS 
})

// otra aplicacion con el metodo forEach
// seria calcular el cuadrado de varios numeros en un array
let numbersRandom = [1,2,3,4,5,6,7,9]
let numberAlCubo =[]
numbersRandom.forEach(number =>{
    numberAlCubo.push(number * number * number)
})
c(numberAlCubo)

c(profesores)
// .some(callback) 
// el some busca si solo un elemento cumple la condicio para retorna true
c(profesores.some(prof => prof === 'pedro'))
c(profesores.some(prof => prof === 'pedronilo'))

// .every(callback)
// el every busca que todos coinsidan para retornar true
c(profesores.every(prof => prof === 'pedro'))
c(profesores.every(prof => prof.length >= 3 ))