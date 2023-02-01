/**
 * 16-01-2023
 * Profesor: Pablo España
 * @Video_2
 * 
 * @_METODOS_DE_ENVIOS_EN_EXPRESS
 */

/** @_Methods */
// get -> Este nos permite acceder a recursos
// post -> Este nos permite crear recursos
// put -> Este nos permite Modificar recursos
// pacth -> Este nos permite Modificar de manera parcial un recurso
// delete -> Este nos permite eliminar un recurso
// all -> Este trabaja como un middleware 

/** @_Via_de_acceso_a_las_rutas */

// Codigo-> app.get('/ab?cd', (req, res)=>{ res.send('Accediendo a la ruta') })
// ? : El signo de interrogación dentro de la ruta hace referencia de que un caracter es opcional a(b)?cd
// + : El signo dentro de la ruta hace referencia de que el caracter se puede repetir infinidad de veces a(bbbbbbbbbbb)+cd
// * : El signo dentro de la ruta hace referencia de que se puede añadir un caracter especial dentro de la ruta ab*cd  
// (ab_cd); (ab.cd)
// () : esto se encarga de agrupar los caracteres y se le puede agregar un formato: a(bc)?de  
// /el_caracter/ : los dos eslasch definen que mostrara la ruta siempre y cuando la ruta contenga el caracter
//  Codigo-> app.get(/a/, (req, res)=>{ res.send('Accediendo a la ruta') })  
// http://localhost:3000/admin  -> Funciona
// http://localhost:3000/users  -> Falla

/** @_Enviar_parametros_en_la_ruta */
// Codigo-> app.get('/users/:id_user/cursos/:id_curso', (req, res)=>{ 
// res.send('Parametros recibidos: ' + req.param.id_user + ' ' + req.param.id_curso) 
// })

/** @_Manejos_de_rutas_y_funciones  video 2.3 */
// Dentro de una ruta podemos ejecutar varias funciones
// separando las por comas y añadiendo el parametro NEXT
// para que continue con la otra función:
// Ejemplo 1:
app.get('/users', 
    (req, res, next)=>{     
        console.log('Funcion 1') 
        next()
    },
    (req, res, next)=>{     
        console.log('Funcion 2') 
        next()
    },
    (req, res)=>{     
        res.send('Funcion final') 
    }
)

// Ejemplo 2: 
const f1 = (req, res, next)=>{     
    console.log('Funcion 1') 
    next()
}
const f2 = (req, res, next)=>{     
    console.log('Funcion 2') 
    next()
}
const f3 = (req, res, next)=>{     
    console.log('Funcion 3') 
    next()
}

app.get('/users', [f1,f2,f3], 
    (req, res)=>{     
        res.send('Funcion final') 
    }
)

/** @_Tipos_respuestas_en_el_parametro_RES video 2.4 */

    app.get('/users', (req, res)=>{     
            // res.send('Funcion final') 
            res.format({
                // 'text/plain': ()=>{   res.send('Bienvenidos')  }
                // 'text/html': ()=>{  res.send('<h1>Bienvenidos</h1>') }
                'text/json': ()=>{
                    res.send({ text: "Bienvenido"})
                }
            }) 
    })
    const users = {name: 'Yordhis', age: 26}
    app.get('/users', (req, res)=>{     
        // Esta es la otra forma de dar una respuesta json 
            res.json(users)
    })

    // Envio de archivos
        const path = require('path')
        app.get('/users', (req, res)=>{     
            // Esta es la otra forma de dar una respuesta json 
            // __dirname: Esto es toda laurl de nuestro entorno de trabajo (url)
            // Este tipo de respuesta envia un archivo al navegador
                res.sendFile(path.join(__dirname, 'file.txt'))
        })
    // Descargar de archivos
        app.get('/download', (req, res)=>{     
            res.download(path.join(__dirname, 'file.txt'))
        })
    // 
    // Redireccionar
    app.get('/users', (req, res)=>{     
        res.redirect('/login')
    })
    // Envio de estatus de respuestas http
    app.get('/users', (req, res)=>{     
        res.sendStatus(200)
        res.status(200).send('mensaje aqui') // envia estatus con mensaje
        res.status(200).end() // envia estatus sin mensaje
    })

/** @_ROUTES_EN_EXPRESS video 2.5 */
    app.route('/users')
    .get((req, res)=>{     
        res.send('Lista de usuarios')
    })
    .post((req, res)=>{     
        res.send('Crear usuario')
    })
    .put((req, res)=>{     
        res.send('Editar usuario')
    })
    .delete((req, res)=>{     
        res.send('Eliminar usuario')
    })

    // Secrea un archivo users.js para contener todas las rutas aparte
    /** directorio routes/@_users_js */
    const express = require('express')
    const router = express.Router()
    router.route('/users')
    .get((req, res)=>{     
        res.send('Lista de usuarios')
    })
    .post((req, res)=>{     
        res.send('Crear usuario')
    })
    .put((req, res)=>{     
        res.send('Editar usuario')
    })
    .delete((req, res)=>{     
        res.send('Eliminar usuario')
    })

    module.exports = router

    // Despues debemos requerir y usar las rutas en nuestra app
    /** escribimos en el archiva @_index_js */
    const userRoutes = require('./router/users')
    app.use('prefijo', userRoutes)