/*
	TRATAMIENTOSDE STRING O CADENA DE TEXTOS

	PROPIEDADES
		- .length

	METODOS
		#SIN PARAMETROS
			-> .trim() -> Quita espacios
			-> .toUpperCase() -> convertir a MAYUSCULAS
			-> .toLoweCase() -> Convertir a minusculas



*/

// ejemplo

let answer = prompt('¿Cual es la capital de venezuela?').toUpperCase().trim()

let message = answer === 'CARACAS'
			  ? '¡Correcto!'
			  : '¡Te equivocastes! la respuesta es Caracas'

alert(message)

/*
	ENCONTRAR CARACTERES EN LAS CADENAS DE TEXTO

		# indexOf(string [, i])
			-> Retorna -1 si no encuentra el string
			-> Esta funcion busca una letra de izquierda a derecha
		
		# lastIndexOf()
			-> Retorna -1 si no encuentra el string
			-> Esta funcion busca una letra de derecha a izquierda

		# includes(string [, i])
			-> Retorna BOOLEAN true si o false no
			-> Busca una palabra en la cadena de texto solicitada
		
		# starsWith(string [, i])
			-> Retorna BOOLEAN true si o false no
			-> Pregunta si COMIENZA con la cadena de texto ingresada
			-> sirve para validar urls y demas cosas
		
		# endsWith(string [, i])
			-> Retorna BOOLEAN true si o false no
			-> Pregunta si TERMINA con la cadena de texto ingresada
			-> sirve para validar urls y demas cosas

*/

// EJEMPLO

let profesor = "Debora"

profesor.indexOf('a', 0) // retorna la posicion [5]

profesor.lastIndexOf('a', 0) // retorna la posicion [0]

'https://ed.team/cursos/js'.includes('cursos') // retorna true

'https://ed.team/cursos'.starsWith('https://ed.team') // retorna true

'https://ed.team/cursos'.endsWith('cursos') // retorna true

/*
	MANIPULAR STRING O CADENAS DE TEXTO

		# .replace(original, replace)

		# .split(separador[,catidad])

		# .substring(inicio[, fin])
			-> No incluye el fin 

		# .substr(inicio[,cantidad])
			-> Si STRAT|INICIO es negativo, empieza a extraer desde atras
			-> inicio es posicion y cantidad es la cantidad de caracteres que va a sustraer

		# .slice(inicio[, fin])
			-> Se diferencia de substr con valores negativos
			-> END|FIN negativo: no toma lo ultimo [fin|end] valores
			-> START|INICIO negativo: empieza a contar desde el final
*/

// EJEMPLO

	// REPLACE
		'Yordhis'.replace('Yordhis','Yordhis Osuna') // retorna string 'Yordhis Osuna'

	// SPLIT
		'Yordhis Osuna'.split(' ') // retorna array ['Yordhis', 'osuna']

		'Yordhis Osuna'.split(' ')[0] // retorna string 'Yordhis'

		'Yordhis'.split('') // retorna array ['Y','o','r','d','h','i','s']

		'Yordhis'.split('')[2] // retorna string 'r'

		'yordhis'[2] // retorna string 'r'

	// SUBSTRING

		'hola mundo'.substring(4) // retorna string ' mundo'

		'hola mundo'.substring(2) // retorna string 'la mundo'

		'hola mundo'.substring(2, 5) // retorna string 'la '

		'hola mundo'.substring(5, -3) // retorna string 'hola '

	// SUBSTR

		'hola mundo'.substr(-2) // retorna string 'do'

		'hola mundo'.substr(-4) // retorna string 'undo'

	// SLICE

		'hola mundo'.slice(-5, -2) // retorna string 'mun'

		'hola mundo'.slice(-5, -1) // retorna string 'mund'







