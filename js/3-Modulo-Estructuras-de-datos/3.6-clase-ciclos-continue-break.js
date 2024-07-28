/** CICLOS
 * BUCLES O LOOPS
 * 
 * ESTO SON BLOQUES DE CODIGO QUE SE REPITEN HASTA CUMPLA O INCUMPLA LA CONDICIÓN
*/

/** CICLOS FOR */
for(let i = 0,  i < 10; i++){
	//vueltas

	if (i % 7 === 0) continue; // saltar la iteracion del ciclo que no cumpla la condición y seguir procesadon

	if (i === 9) break	// romper el ciclo
}

/** EJERCICIO 2 */
/** Cree un programa que retorne los caracteres de una cadena por separado */
let texto = "yordhisosuna"

for (let i = 0; i <= texto.length; i++){
	console.log(texto[i])
}

