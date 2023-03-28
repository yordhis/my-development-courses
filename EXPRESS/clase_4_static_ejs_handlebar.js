/**
 * 18-01-2023
 * Profesor: Pablo España
 * @Video_4
 * 
 * @_MIDDLEWARE_DE_ARCHIVOS_STATIC
 * @_HANDLERBAR
 * @_ESJ
 *      CREACION Y USO DE LOS MIDDLEWARE
 *      
 * - PERMITE MANEJAR ERRORES
 * - VALIDAR SESIONES (LOGIN)
 * 
 */

/** @var Middleware_DE_ARCHIVOS_ESTATICOS @_video_4_1 */ 

    app.use('/static', express.static(path.join(__dirname, 'public')))
    app.use('/files', express.static(path.join(__dirname, 'files')))

/** @var MOTORES_DE_PLATILLAS @_video_4_2 */
// configuracion del servidor 
    app.set('view engine', 'ejs')
    app.set('views', path.join(__dirname, 'views'))
// Para mostrar una vista debemos usar el metodo render en el parametro res de las funciones
    app.get('/', (req, res)=>{
        res.render('index')
    })
// Debemos instalar el paque de ESJ
    /** @comando -> npm i ejs */

// configuramos tambien para que lea los estilos 
    app.use('/static', express.static(path.join(__dirname, 'public')))

/** @var USO_DE_EJS @_video_4_3 */
// Si deseamos mostrar datos en la vista añadimos un nuevo parametro
// este parametro es un objeto {}
    const users = [
        {name: 'user 1', age:25},
        {name: 'user 2', age:29},
        {name: 'user 3', age:28},
        {name: 'user 4', age:289}
    ]
    const title = 'Bienvenido a la app de users'
    app.get('/', (req, res)=>{
        // res.render('index', {users: users, title: title  }) 
        res.render('index', { users, title }) 
    })

// Codigo de font-end
    <% if(title){} %>
        <h1><%= title %></h1>
    <% } %>

    <% if(users){ %>
        <% for (let i = 0; i < users.length; i++) {
            <h3><%= users[i].name %></h3>
        <% } %>
    <%}%>

/** @var USO_DE_INCLUDE_LAYOUTS @_video_4_4 */
// creamos los directorios correspondientes como:
// ./views -> index, admin
        // ./includes -> menu, footer
        // ./layouts -> main

// Para realizar un include colocamos despues e los porcentajes unos -- 
// y la expresion regular include('directorio_del_archivo')

    <%- include('../includes/menu') -%>
        <% if(title){ %>
            <h1><%= title %></h1>
        <% } %>
    <%- include('../includes/footer') -%>

/** @var USO_DE_LAYOUTS */
// Instalamos el paquete que se encarga de manejar los layouts
    // comando -> npm i express-ejs-layouts
// Requerimos el paquete
    const expressLayout = require('express-ejs-layouts')
// Despues de instalar configuramos nuestra app para que use el layouts
    app.set('layout', path.join(__dirname, '/view/layouts/main'))

// Y por ultimo usamos los layouts dentro de nuestra app
    app.use(expressLayout)

// en el archi MAIN.JS
    // aqui va el html - head - body - styles
        <%- include('../includes/menu') -%>
        <%- body -%>
        <%- include('../includes/footer') -%>
    // aqui scrip, cierre de todo 

/** @var MOTORES_DE_PLATILLAS_HANDLEBAR @_video_4_5 */

// Instalamos el paquete que se encarga de manejar los layouts
    // comando -> npm i express-handlebars
// Requerimos el paquete
    const exphbs = require('express-handlebars')
// Despues de instalar configuramos nuestra app para que use el layouts
    app.engine('handlebars', exphbs({defaultLayout: 'main'}))
       app.set('view engine', 'handlebars')

// Nota: todas las extenciones de los archivos de la vistas deben cambiar 
/** a -> .@var handlebars */

// en el archi MAIN.JS
    // aqui va el html - head - body - styles
            {{> menu }}
            {{{ body }}}
            {{> footer }}

    // aqui scrip, cierre de todo 

// en el archi INDEX.JS
            {{#if title }}
                <h1>{{ title }}</h1>
            {{/if }}

             {{#if users }}
                {{#each users }}
                    <h3>{{ this.name }}</h3>
                {{/each }}
            {{/if }}

 