/**
 * @param DECLARACION 
 * @param DE
 * @param OBJETOS 
 * 
 * 
 */

const c = console.log

// CLIENTES DE EDTEAM

    const clienteEdteam = {
        nombre: 'Yordhis',
        apellido: 'Osuna',
        email: 'Yordhis',
        password: '123',
    }

// MANERAS DE ACCEDER A LOS ATRIBUTOS DEL OBJETO SON:

//MOSTRAR TODO
    c(clienteEdteam)

// SINTAXIS DE PUNTOS
    c(clienteEdteam.nombre)

// SINTAXIS DE CORCHETES
    c(clienteEdteam['apellido'])

/** 
 * @param ATRIBUTOS
 * @param DINAMICOS
 * 
 * LOS ATRIBUTOS DINAMICOS SE PUEDEN DECLARAR CON 
 * CORCHETES Y ADEMAS TAMBIEN SE PUEDEN ANIDAR CON 
 * TEMPLATE STRING
 *    
 */
    let name = 'Juan'
    //SINTAXIS DE CORCHETES NORMAL
    const tableCorchete = {
        [name]:'beto'
    }
    c(tableCorchete)
    
    let na = 'Ju'
    let me = 'an'
    //SINTAXIS DE CORCHETES NORMAL
    const tableCorcheteAnidado = {
        [`${na}${me}`]:'beto'
    }

    c(tableCorcheteAnidado)


    /**
     * @param CLIENTES
     * @param GYM
     * VIDEO 1.6
     * OBJETOS LITERALES
     */

    const clienteGym = {
        nombre: 'Jhon',
        edad: 28,
        peso: 100,
        fechaRegistro: '07/05/2022',
    }
    const clienteGym2 = {
        nombre: 'Jhon 2',
        edad: 29,
        peso: 70,
        fechaRegistro: '08/05/2022',
    }
    const clienteGym3 = {
        nombre: 'Jhon 3',
        edad: 30,
        peso: 85,
        fechaRegistro: '09/05/2022',
    }


    const clientes = [clienteGym, clienteGym2]
    // MOSTRAMOS TODO EL ARRAY DE OBJETOS
    c(clientes)
    // ACCEDEMOS AL NOMBRE DEL PRIMER OBJETO
    c(clientes[0].nombre)

    // RECORRER EL ARRAY DE OBJETOS
    for (const dato of clientes) {
        c(dato.nombre)   
    }