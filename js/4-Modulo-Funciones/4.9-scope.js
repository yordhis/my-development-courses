/**
 *  @_SCOPE 
 * ES EL CONTEXTO DE DONDE EXISTE LAS VARIABLES
 * EN JS EXISTE EL SCOPE A NIVEL DE BLOQUES
 * 
 * TAMBIEN SE REFIERE AL ALCANCE DE LAS VARIABLES
 * 
 * N = NIVEL
 */

{ /** BLOQUE N-0 */
    let nivel1 = 10
    { /** BLOQUE N-1*/
        c(nivel1)
    }
}

c(nivel1) // aqui no da una salida del dato ya que no tiene acceso

/** EJEMPLO 2 DE SCOPE */
let nombre = "Debora"

/** 
 * En esta seccion la variable @var nombre funciona solo dentro de la función
 * y no afecta la variable global @var nombre aunque tengan el mismo nombre
 */
const saludarPersona = function(nombre) {
    console.log(`${nombre}`)
}

saludarPersona('Yordhis') // retorna Yordhis
console.log(nombre) // retorna Debora

/** 
 * Si desea usar variables globales dentro de una función no es recomendable
 * pero si se podria usar CONSTANTES porque no van a variar sino que siempre tendrán el mismo
 * valor.
 * 
 * EJEMPLO:
 */

const NOMBRE = "Debora"

/** 
 * En esta seccion la variable @var nombre funciona solo dentro de la función
 * y no afecta la variable global @var nombre aunque tengan el mismo nombre
 */
const saludarPersonaV2 = function() {
    /** SI SE INTENTA MODIFICAR ARROJA ERROR */
    // NOMBRE = "YORDHIS"

    /** 
     * TAMBIEN SE PUEDE DECLARAR VARIABLES Y CONTANTES LOCALES QUE SOLO 
     * SE USARAN DENTRO DE LA FUNCIÓN; ADEMAS ESTAS VARIABLE NO SON ACCESIBLE 
     * FUERA DE LA FUNCIÓN.
     */
    const NOMBRE = "PEDRO"
    let estadoCivil = "casado"
    console.log(`${NOMBRE} ${estadoCivil}`)
}

console.log(NOMBRE) // retorna Debora

