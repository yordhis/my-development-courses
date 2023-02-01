((c) => {
    c('**********Programación Funcional**********')
    //Función recursiva para obtener el factorial de un número
    //(n! = producto de todos los números naturales desde 1 hasta n)
    const factorialImperativo = n => {
      let f = 1
  
      for (let i = 1; i <= n; i++)
        f = f * i
  
      return f
    }
  
    const factorialDeclarativo = n => {
      return n === 0
        ? 1
        : n * factorialDeclarativo( n - 1 )
    }
  
    c(
      'Factorial',
      factorialImperativo(5),
      factorialDeclarativo(5)
    )
  
    //Función recursiva para obtener la suma factorial de un número
    //(n+! = sumatoria de todos los números naturales desde 1 hasta n)
    const sumaFactorial = n => {
      return n === 1
        ? 1
        : n + sumaFactorial( n - 1 )
    }
  
    c(
      'Factorial',
      sumaFactorial(5),
      sumaFactorial(10)
    )
  
    //Función recursiva para calcular la potencia de un numero b elevado al exponente e
    //(b elevado a e = se obtiene como el producto de b con sigo mismo e veces)
    const pow = (b, e) => {
      return e < 2
        ? b
        : b * pow( b, e - 1 )
    }
  
    c(
      'Potencia',
      pow(2, 6),
      Math.pow(2, 6),
      pow(3, 6),
      Math.pow(3, 6)
    )
  
    //Función para determinar si un número es par o impar sin el uso del operador módulo
      const even = n =>{
        return n === 0
        ? true
        : n === 1
          ? false
          : odd( n - 1 )
      }

      const odd = n => {
        return n === 0
        ? false
        : n === 1
          ? true
          : even( n - 1 )
      }

      c(
        '*****NUMERO PAR E IMPAR*****',
        6, even(6), odd(6)
      )

    //Función recursiva que sume los dígitos de un número
    //pe 125 = 1 + 2 + 5 = 8
     
    sumaDigitos = n => {
      return n < 10
      ? n
      : n % 10 + sumaDigitos(Math.floor(n / 10))
    }

      c(
        '*********suma de los dígitos de un número*********\n',
        sumaDigitos(125),
        sumaDigitos(1252),
        sumaDigitos(1),
        sumaDigitos(100)
      )
    
    //Función recursiva para determinar si un elemento está contendido dentro de un vector
    const existeEnVectorAux = ( vector, elemento, posicion ) => {
      return posicion > vector.length - 1
        ? false
        /*: ( vector[posicion] === elemento )
          ? true
          : existeEnVectorAux( vector, elemento, posicion + 1 )*/
        : vector[posicion] === elemento || existeEnVectorAux( vector, elemento, posicion + 1 )
    }
  
    const existeEnVector = ( vector, elemento ) => {
      return existeEnVectorAux( vector, elemento, 0 )
    }
  
    c(
      'Elemento dentro de Vector',
      existeEnVector( [1, 2, 3, 4, 5], 4 ),
      existeEnVector( [1, 2, 3, 4, 5], 6 )
    )
  
    // Función recursiva para determinar si un elemento está repetido dentro de un vector
  
    // const mensaje = (text, vector, elemento, posicion) => {
    //     return text += text 
    //     ? quienSeRepitioAux(vector, elemento, posicion)
    //     : 'fallo al concatenar'
        
    // }

    const quienSeRepitioAux = (vector, posicion) => {
        return posicion > vector.length - 1
        ? false
        :existeEnVectorAux(vector, vector[posicion], posicion + 1) || quienSeRepitioAux(vector, posicion + 1)
            
    } 

    const quienSeRepitio = (vector) => {
        return quienSeRepitioAux(vector, 0)
    } 

    c(
        'Quien se repite??',
        quienSeRepitio( [1, 2, 3, 4, 5] ),
        quienSeRepitio( [5, 2, 3, 4, 5] )
      )

    

  })(console.log);