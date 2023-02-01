/**
 * 
 * Barinas, 16-08-2022
 * video 8.1
 * 
 * profesor: Jonathan Mircha
 * 
 * @_TODO_LIST
 * 
 * es un proyecto que se recomienda a hacer para 
 * probar tecnologias ya que permite hacer el CRUD
 * e interactuar con la tecnologia
 * 
 * 
 * 1- Preparar el entorno de trabajo de la clase pasada
 * 
 * 2- Nos dirigimos al index.pug  y lo configuramos
 *      index.pug
 *          @extends includes/layout.pug
 *          @block metatags
 *              title = title
 *              meta(name="descripcion", content=description)
 *          @block content
 *              main.ToDo  // Usamos UperCameCase
 *                  input#task.Task(type="text", placeholder="tarea...", spellcheck)
 *                  ul#list.List
 * 
 * 3- Abrimos Style.scss y de ultimo agregamos los estilos
 * 
 * 4- Nos ubicamos ./src/js aqui va toda la chamba
 *      ./js/ creamos los siguientes archivos
 *          @method helpers.js
 *          @method index.js
 *          @method Task.js
 *          @method ToDoList.js
 * 
 *      Como estamos trabajando con la filosofia de los 
 *      modulos vamos a declarar en el archivo helpers
 *      las siguientes constantes
 *      
 *          @method helpers.js
 *              @const ENTER_KEY = 13,
 *              c = console.log,
 *              d = document,
 *              j = JSON,
 *              ls = localStorage
 * 
 *          // Nos apoyamos con la desestructuracion para exportar todo
 *          
    *          @export {
    *              ENTER_KEY,
    *              c,
    *              d,
    *              j,
    *              ls,
    *          }         
 * 
 * 5- Luego nos vamos al archivo index.js
 * 
 *          @method index.js
 *              @import { d } from './helpers'
 *              @import { ToDoList } from './ToDoList'
 * 
 *              // Mandamos a guardar los elementos del front
 *                  @const task = d.querySelector('#task'),
 *                  list = d.querySelector('#list'),
 *                  todo = new ToDoList('edList')
 * 
 *              // mostramos la lista
 *                  todo.render()
 * 
 * @video_8_3
 * 
 * 6- despues nos ubicamos en el archivo ToDoList.js
 *          ToDoList.js
 *              @import { ENTER_KEY, c, d, j, ls } from './helpers'
 *              @import Task from './Task'             
 * 
 *              @export default class ToDoList {
 *                  constructor (key){
 *                      this.key = key
 * 
 *                      //validamos que tenga nombre la lista o asignamos uno 
 *                      if ( !ls.getItem(key) ) {
 *                          ls.setItem( key, j.stringify([]) )
 *                      }
 * 
 *                      // para evitar errores de alcance de objeto this dentro de un metodo de la clase
 *                      // realizamos un bindeo del metodo con el this
 *                          this.addTask = this.addTask.bind(this)
 *                          this.editTask = this.editTask.bind(this)
 *                          this.removeTask = this.removeTask.bind(this)
 *                  }
 *                  
 *                  // creamos un manejador de eventos
 *                      @method addTask (e) {
 *                          // validamos que el input no este vacio
 *                              if ( !e.target.value )
 *                                  alert('No puede agregar una tarea vacias')
 * 
 *                          // Realizamos la acciones de asignar tarea
 *                              if ( e.keyCode === ENTER_KEY ){
 *                                  let newTask = new Task( e.target.value ),
 *                                  // Retornamos todo lo que hay en local storage y lo parseamos a un objeto                
 *                                      tasks = j.parse( ls.getItem(this.key) )
 *      
 *                                  // Despues añadimos la nueva tarea al objeto tasks
 *                                      tasks.push( newTask )
 *      
 *                                  // Ahora guardamos todas las tareas en local storage
 *                                      ls.setItem( this.key, j.stringify(tasks) )
 *                          
 *                                  // Devolvemos todas las tareas al front y limpiamos el input
 *                                      this.renderTask( newTask )
 *                                      e.target.value = null
 *              
 *                                  //c( tasks, newTask, ls )
 *          
 *                              }
 *                      }  
 *                  // metodo que edita las tareas    
 *                      @method editTask (e) {
 *                         // c( e.target.localName ) -> esto retorna donde uno hace click y necesitamos validar que se ejecute la funcion cuando hagamos click en el LABEL
 *                         if ( e.target.localName === 'label' ) {
 *                            let tasks = j.parse( ls.getItem(this.key) ),
 *                                toEdit = tasks.findIndex( task => task.name === e.taret.textContent ),
 *                                label = d.querySelector(`[data-id="${tasks[toEdit].id}"]`)
 *              
 *                                c(tasks, ToEdit, label)
 * 
 *                             @const saveTask = e => {
 *                                  e.target.textContent = e.target.textContent
 *                                  tasks[toEdit].name = e.target.textContent
 *                                  ls.setItem( this.key, j.stringify(tasks) )
 *                                  // paramos el salto de linea
 *                                  e.target.blur()
 *                             }
 * 
 *                              label.addEventListener( 'blur', e => saveTask(e) )              
 *                              label.addEventListener( 'keyup', e => (e.keyCode === ENTER_KEY) && saveTask(e) )              
 *                         }
 *                      }
 *      
 *                      // Eliminar tareas
 *                      @method removeTask (e) {
 *                          if ( e.target.localName === 'a' ) { 
 *                               let tasks = j.parse( ls.getItem(this.key) ),
 *                                   toRemove = tasks.findIndex( task => task.id.toString() === e.taret.dataset.id )
 *                      
 *                               tasks.splice( toRemove, 1 )
 *                               ls.setItem( this.key, j.stringify(tasks) )   
 *                               e.target.parentElement.remove()                          
 *             
 *                          }
 *                      }
 * 
 *                      // mostrar tarea 
 *                      @method renderTask (task) {
 *                          let template = `
 *                              <li class="list-item ${task.isComplete ? 'complete' : '' }" >
 *                                  <input type="checkbox" id="${task.id}" class="list-checkbox ${task.isComplete ? 'complete' : '' }" >                      
 *                                  <label data-id="${task.id}" class="list-label conteneditable spellcheck" >
 *                                      ${task.name}
 *                                  </label>
 *                                  <a href="#" data-id="${task.id}" class="list-removeLink" >
 *                                      x
 *                                  </a>
 *                              </li>
 *                          ` 
 *                      }    list.insertAdjecentHTML(`beforeend`, templateTask)
 *  
 *                   // Creamos el metodo render
 *                      @render () {
 *                          let tasks = j.parse( ls.getItem(this.key) )
 *          
 *                          tasks.forEach( task => this.renderTask(task) )                         
 *
 *                          // Agregamos tareas escuchando un enter
 *                              task.addEventListener('keyup', this.addTask)
 * 
 *                          // Escuchamos el clic en la lista para editar
 *                              list.addEventListener('click', this.editTask)
 *                         
 *                          // Escuchamos el clic en la lista para editar
 *                              list.addEventListener('click', this.removeTask)
 *                      }
 *              }
 *          
 * 7- Coniguramos la clase Task
 *          
 *          Task.js
 *              export default class Task {
 *                  constructor (name) {
 *                      this.id = new Date().getTime()
 *                      this.name = name
 *                      this.isComplete = false
 *          
 *                      return this
 *                  }
 *              }
 * 
 */