/*
	CLASE 3.1

	CONDICIONASLES

	# IF 
		-> UNA LINEA
			IF(TRUE) 'HOLA MUNDO'
		
		-> BLOQUE 
			IF(){ BLOQUE }
			
			SCOPE
			° FUNCIONA
			{
				let variable = 'valor'
				console.log(variable)
			}

			° FUNCIONA
			let variable = 'valor'
			{
				
				console.log(variable)
			}

			° NO FUNCIONA
			{
				console.log(variable)
			}
			let variable = 'valor'	

		-> CON MAS CONDICIONES

		if(condicion){
			acciones
		}
		else{
			acciones
		}

	# CONDICIONES MULTIPLES Y ANIDADAS
		-> && (Y)
		-> || (O)

		if(condicion && CONDICION){
			acciones
			if(condicion && CONDICION){ <- ANIDADO
			acciones
			}
		}else if(condicion || CONDICION){
	
		}else{
			acciones
		}
*/

// EJEMPLO 

let age = parseInt(prompt('Dime tu edad'), 10)

if (age) {
	if (age >= 18) {
		alert('Eres mayor de edad')
	}else{
		alert('Te faltan años')
	}
}else{
	age = parseInt(prompt('Tu edad debe ser un numero'), 10)
}