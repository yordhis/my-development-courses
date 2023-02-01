/*
	SWITCH

	ESTOS SE ENCARGA DE EVALUAR UN DATO 
	Y DEPENDIENDO DEL CASO RETORNA UNA RESPUESTA

*/

// EJEMPLO

let answer = prompt(`¿Cual es la capital de Italia?
	a. Caracas
	b. Madrid
	c. Roma
	`)

answer.toUpperCase().trim()

switch(){
	case 'a':
		alert('Fallaste')	
	break

	case 'b':
		alert('Fallaste')
	break

	case 'c':
		alert('¡CORRECTO!')
	break

	default:
		alert('Ingresa una opción de la A a C')
	break
}