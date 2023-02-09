
((c)=>{
    c('Hola estamos probando codigo')
    const arr = [8,1,8]
    const espacios = arr[0]
    const posicionesOcupadas =  arr.slice(1)
    const columnaIzquierda = []
    const columnaDerecha = []
    const caja = [] 
  
    // Creando las dos columnas
    for (let e = 1; e <= espacios ; e++) {
        caja.push(e)
        if (e%2 === 0 ) {
            columnaDerecha.push(e)
        } else {
            columnaIzquierda.push(e)
        }
    }

    const determinarCombinaciones = (espaciosDeLaCaja) => {
        let combinaciones = [],
        combinacionesDisponibles = []

        espaciosDeLaCaja.forEach(celda => {
            combinaciones.push(celda)   
            if (combinaciones.length === 2 ){
                combinacionesDisponibles.push(combinaciones)
                combinaciones = []
            }
        })
        return combinacionesDisponibles 
    }

    const eliminarPosicionesNoValidas = (array, posicionesOcupadas) =>{
        let totalDeCombinaciones = []
        let contador = 0
        for (let a = 0; a < array.length; a++) {
            const element = array[a];
                posicionesOcupadas.forEach(posO =>{
                    if(!element.some(p => p === posO)) contador++
                })
                if(contador === posicionesOcupadas.length) totalDeCombinaciones.push(element)
            contador = 0
        }
        
        return totalDeCombinaciones.length
    }

    c('caja')
    const cajitaA = determinarCombinaciones(caja)
    const cajitaD = determinarCombinaciones(columnaDerecha)
    const cajitaDr = determinarCombinaciones(columnaDerecha.reverse())
    const cajitaI = determinarCombinaciones(columnaIzquierda)
    const cajitaIr = determinarCombinaciones(columnaIzquierda.reverse())


    let total = 0
    total = eliminarPosicionesNoValidas(cajitaA, posicionesOcupadas)
    total = eliminarPosicionesNoValidas(cajitaD, posicionesOcupadas) + total
    total = eliminarPosicionesNoValidas(cajitaDr, posicionesOcupadas) + total
    total = eliminarPosicionesNoValidas(cajitaI, posicionesOcupadas) + total
    total = eliminarPosicionesNoValidas(cajitaIr, posicionesOcupadas) + total
    c(total)

    // total.splice(total.some(tot => tot === []))
    
    

  
    


})(console.log)