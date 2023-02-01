/**
 * Barinas, 10-07-2022
 * video 1.8
 * 
 * profesor: Jonathan Mircha
 * 
 * @EJERCICIO
 * @PROGRAMACION
 * @SINCRONO
 * @VS
 * @ASINCRONO
 * 
 */

const fs = require('fs'),
file = '../assets/archivo.txt'

/** CODIGO SINCRONO */
// console.time('Sincrono')

// console.log('\n Abriendo el archivo...')

let content

try{

    content = fs.readFileSync(file, 'utf8')
  console.log(content)
}catch(err){
    console.log(err.message)
}

// console.log('\n hago algo...')

// console.log('\n hago algo mas...')

// console.timeEnd('Sincrono')


/** CODIGO ASINCRONO */
console.time('Asincrono')

console.log('\n Abriendo el archivo')

let contentAsincrono = fs.readFile(file, 'utf8', (err, contentAsincrono)=> (err)? console.log(err) : console.log(contentAsincrono)) 


console.log('\n hago algo...')

console.log('\n hago algo mas...')

console.timeEnd('Asincrono')