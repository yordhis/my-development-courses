/**
 * Barinas, 10-07-2022
 * video 1.6
 * 
 * profesor: Jonathan Mircha
 * 
 * @PROGRAMACION
 * @IMPERACTIVA
 * @VS
 * @DECLARATIVA
 */

const numbers = [1,2,3,4,5]

/** Codigo Imperactivo  */
console.time('Imperactivo')
function cuadradoImperactivo(numbers) {
    let arr = []
    for (let i = 0; i < numbers.length; i++) {
        arr.push(numbers[i] * numbers[i]);
    }
    return console.log(arr)
}
cuadradoImperactivo(numbers)
console.timeEnd('Imperactivo')

/** Codigo Declarativo */
console.time('Declarativo')
console.log(numbers.map(num => num * num))
console.timeEnd('Declarativo')