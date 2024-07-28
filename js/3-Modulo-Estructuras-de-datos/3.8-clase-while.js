/** CICLO WHILE
 * 
 * mientras!
 */

/** TEMPLATE DE WHILE */
/** MIENTRAS */
while (i < 10) {
	// statement
}

/** HASTA */
do{
	// statement
} while (condition);

/** EJERCICIO */
/** Crea un programa que muestre la cantidad de juguetes que quedan para regalar */

let juguetes = 10

/** Mientras que juguetes sea mayor a cero sigue repartiendo juguetes */
while (juguetes > 0) {
	juguetes--
	console.log(`Regalamos un juguete. Nos quedan ${juguetes}`)
}