/**
 * @desarrolloEnJs
 * solucion del problema de si un numero es 
 * par o impar
 */

//SOLUCION FRONTEND
function parImparFrontend() {
    let numero = prompt("Ingresa un numero"),
    modulo = numero % 2,
    par =  `El numero ${numero} es par`,
    impar =  `El numero ${numero} es impar`

    console.log((modulo === 0)? par : impar)
}
// EJECUTAR LA FUNCION
// parImparFrontend()


//SOLUCION BACKEND
/**
 * aqui no se puede usar promt y aler por 
 * que es de frontend
 */
function parImparBackend() {
    process.stdout.write('ingresa un numero: ')

    process.stdin.once('data', numero => {
        modulo = numero % 2,
        par =  `El numero ${numero} es par`,
        impar =  `El numero ${numero} es impar`,

        residuo = (modulo === 1) ? impar : par
        
        process.stdout.write(residuo)
        process.exit()
    })

}

parImparBackend()