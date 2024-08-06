/**
 * Barinas 10-09-2022 
 * 
 * CURSO DE NODE.JS
 * PROFESOR: PABLO ESPAÑA BRAVO
 * @video 3.6
 * 
 * @_CONFIGURACIONES_Y_MOTORES_DE_VISTAS
 *
 * @PASO_1 CONFIGURAMOS EL NOMBRE DE LA APP
 * EJEMPLO: 
 *          @_CODE app.set('title', 'Mi app en NODE.JS')
 * 
 * @PASO_2 CONFIGURAMOS EL PUERTO DE LA APP
 * EJEMPLO: 
 *          @_CODE app.set('port', 3000)
 * 
 * @PASO_3  CONFIGURAMOS EL MOTOR DE PLANTILLA (VIEWS) DE LA APP CON @_EJS
 * EJEMPLO: 
 *          @_CODE app.set('view engine', 'ejs')
 * 
 * @PASO_4  INSTALAMOS EL PAQUETE DE -> @_EJS
 * EJEMPLO: 
 *          @_COMMAN npm install ejs
 * 
 * @_PASO_5 DESPUES DE INSTALAR @_EJS CREAMOS UNA CARPETA CON EL NOMBRE 
 * / @_VIEWS Y AQUI COLOCAMOS TODOS LOS ARCHIVOS HTML CON LA EXTENCION @_EJS
 * EJEMPLO: 
 *          /views
 *              users.ejs
 *              create-user.ejs
 *              update-user.ejs
 *              delete-user.ejs
 *              index.ejs
 *                 
 * @PASO_6  SE CONFIGURA LA RUTA DE LAS VISTAS EN LA APP
 * EJEMPLO: 
 *          @_CODE app.set('views', path.join(__dirname, 'views'))
 * 
 * @PASO_7  PROCEDEMOS A MODIFICAR LOS CONTROLADORES DE LAS VISTAS pasando los sendFile a render
 * EJEMPLO: 
 *          @_CODE 
 *            @forma_1 const getUsers = (req, res) => {
 *                     res.sendFile('users.html', {root: root})
 *                   }
 * 
 *             @const users = [
 *                  {id: 1, name: "Yordhis", age: 26},
 *                  {id: 2, name: "debora", age: 25},
 *                  {id: 3, name: "rei", age: 24},
 *                  {id: 4, name: "mily", age: 20},
 *              ]
 * 
 *            @forma_2 const getUsers = (req, res) => {
 *                      el segundo parametro es un objeto de elementos 
 *                     res.render('users', {users: users })
 *                   }
 * 
 * @PASO_8  PROCEDEMOS A MANIPULAR LA VISTA ENVIANDO DATOS DE USUARIO 
 * EJEMPLO: 
 *          @_VIEWS
 *                  @_USERS
 *                      @_CODE
 */
            /* con este codigo recorremos un array de objeto de usuarios
                <table class="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>AGE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <% users.forEach((user)=>{ %>

                            <tr>
                                <td scope="row"> <%= user.id %> </td>
                                <td> <%= user.name %>  </td>
                                <td> <%= user.age %> </td>
                            </tr>

                        <%  }) %>
                        
                    </tbody>
                </table>
            */