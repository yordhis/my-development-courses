/**
 * 19-01-2023
 * Profesor: Pablo España
 * @Video_6
 * 
 * @_TESTING
 * 
 */

/** @var Testing */

// Modulos a usar para el testing son: supertest y mocha
// supertes: Es el modulo donde nos permitira escribir nuestras pruebas
// mocha: nos permite ejecutar el supertest

// Crear test:  
const request = requeri('supertest')
const app = requeri('../index')

it('Debe devolver un codigo 200', (done)=>{
    request(app)
    .get('/users') // Aqui se coloca la url
    .expect('Content-Type', /json/) // tipo e contenido que se va a recibir
    .expect(200, done) // se espera un 200
    // El DONE sirve para terminar o cerrar el testing
})

it('Debe devolver un mensaje listando usuarios', (done)=>{
    request(app)
    .get('/users')
    .expect('Content-Type', /json/)
    .expect('"Listando usuarios"', done) 
})

// para agrupar testing usuamos describe
describe('Get users', ()=>{
    it('Debe devolver un codigo 200', (done)=>{
        request(app)
        .get('/users')
        .expect('Content-Type', /json/)
        .expect(200, done) 
    })

    it('Debe devolver un mensaje listando usuarios', (done)=>{
        request(app)
        .get('/users')
        .expect('Content-Type', /json/)
        .expect('"Listando usuarios"', done) 
    })
})

describe('Get user', ()=>{
    it('Debe devolver un mensaje: Se encontro el usuario. Y esperamos un 200', (done)=>{
        request(app)
        .get('/user/1')
        .expect('Content-Type', /json/)
        .expect('"Se encontro el usuario"') // para validar texto debemos colocarlo en doble comillas -> '" asi "'
        .expect(200)
        .end(dode)
        // en este caso que se espera dos tipo de respuestas 
        // Se debe usar el DONE en otra linea usando la expresion regular END

    })
    it('Debe devolver un mensaje: No se encontro el usuario', (done)=>{
        request(app)
        .get('/user/8')
        .expect('Content-Type', /json/)
        .expect(404, done)
    })
})

describe('Post user', ()=>{
    it('Debe devolver un mensaje: Usuario registrado', (done)=>{
        // Creamos el objeto nuevo usuario
        const user = {
             id: 5,
            name: "Juan"
        }

        request(app)
        .post('/create-user')
        .send(user) // Aqui enviamos los datos a la ruta
        .expect('Content-Type', /json/)
        .expect(200)
        .expect('"Usuario registrado"')
        .end(done)
    })

    it('Debe devolver estado 500', (done)=>{
        // Creamos el objeto nuevo usuario
        const user = {
             id: 1,
            name: "user 1"
        }

        request(app)
        .post('/create-user')
        .send(user) // Aqui enviamos los datos a la ruta
        .expect('Content-Type', /json/)
        .expect(500)
        .expect('"Error al registrar"')
        .end(done)
    })
})

// En el index de la app 
/** en @var index.js */
// Debemos Exportar la aplicacion
module.exports = app

// Despues debemos configurar el archivo 
/** @var package.json */
// Creamos un nuevo SCRIPT que ejecute los testing
{
    "scripts":{
        serve: "nodemon index.js",
        test: "mocha test/users.test.js --exit"
    }
}