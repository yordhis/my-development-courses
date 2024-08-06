// Requerimos el paquete HTTP
// para iniciar el servbidor
const http = require('http'),
    // Tenemos el servidor creado en una constante
      server = http.createServer(onRequest),
      port = 3000
    // video 2.3
    const fs = require('fs') // Este paquete es para leer archivos
    const qs = require('querystring') // eSe encarga de convertir los datos en string 

      server.listen(port, () => {
        console.log(`Mi servidor esta corriendo en el puerto localhost:${port}`)
      }) // el metodo listen recibe el puerto donde se va aejecutar el servidor
    //   console.log(`Mi servidor esta corriendo en el puerto localhost:3000`)

      function onRequest(req, res) {
        // Video 2.2
        console.log("Se ha detectado una peticion")
        // console.log(req) esto muestra todo lo que hay en la solicitud
        // console.log(req.headers.host) esto optiene las cabeceras del host
        // console.log(req.url)
        // console.log(req.method)
        // res.setHeader('Content-type', "text/plain")
        // res.setHeader('Content-type', "text/html")
        // res.write('<h1>Bienvenidos al curso de node.js</h1>')
        // res.write('<h2>Cursos</h2>')
        // res.end()

        fs.readFile('index.html', (err, content) => {
            if (req.url.toString() === '/') {
                
                if (err){
                    if ( err.code === 'ENOENT' ){
                        res.setStatus = 404
                        console.log('No se encontro el archivo -ojo')
                    }else{
                        res.setStatus = 500
                        console.log('Se encontro un error en el servidor')
                    }
                    
                }else{
                    
                    res.setStatus = 202
                    res.setHeader('Content-type', "text/html")
                    res.write(content)
                    res.end()
                }
            }else if (req.url.toString() === '/users') {
                    if (req.method.toString() === 'GET') {

                        res.setStatus = 203
                        res.setHeader('Content-type', "text/html")
                        res.write('Estas accediendo al usuarios GET')
                        res.end()

                    } else if ( req.method.toString() === 'POST' ){
                        
                        var datas = ''
                        req.on('data', ( data ) =>{
                            datas += data
                        })
                        req.on('end', () =>{
                            // console.log(datas)
                            var post = qs.parse(datas)
                            // console.log(datas)
                            res.end('Datos recibidos post:' + post.name)
                        })
                        res.setStatus = 202

                        

                    } else if ( req.method.toString() === 'PUT' ){

                        var datas = ''
                        req.on('data', ( data ) =>{
                            datas += data
                        })
                        req.on('end', () =>{
                            // console.log(datas)
                            var post = qs.parse(datas)
                            // console.log(datas)
                            res.end('Datos recibidos en put:' + post.name)
                        })

                        res.setStatus = 200

                    } else if ( req.method.toString() === 'DELETE' ){

                        var datas = ''
                        req.on('data', ( data ) =>{
                            datas += data
                        })
                        req.on('end', () =>{
                            // console.log(datas)
                            var post = qs.parse(datas)
                            // console.log(datas)
                            res.end('Datos recibidos delete:' + post.name)
                        })

                        res.setStatus = 200
                    }

            }else{
                res.setStatus = 404
                console.log('No se encontro el archivo')
            }
        })

      }