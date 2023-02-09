======================================================================================
## Clase de React.js
======================================================================================


- React.js: Es una libreria de Javascript que trabaja con 
componentes y esta libreria se dedicada al desarrollo de UI (Interfas de Usuario)

======================================================================================
### Formas de crear un proyecto Reac.js
======================================================================================

- [Google] (https://create-react-app.dev/) Esta forma es mas generica y un poco vieja

## Comando de ejecucion de create-react-app

    Inside that directory, you can run several commands:

    npm start
        Starts the development server.

    npm run build
        Bundles the app into static files for production.

    npm test
        Starts the test runner.

    npm run eject
        Removes this tool and copies build dependencies, configuration files
        and scripts into the app directory. If you do this, you can’t go back!

    We suggest that you begin by typing:

    cd react-course
    npm start

Happy hacking!

## Comando de la formaactual esta en el link
- [Google] (https://vitejs.dev/) Esta es la forma mas actual

======================================================================================
## Trabajamos en esta clase con create-react-app
======================================================================================

- comando -> npx create-react-app name_project

======================================================================================
## Estructura de directorios y archivos del proyecto React
======================================================================================

- usamos una extencion de VScode |Material icon| esto es para una mejor visualizacion de los directorios y archivos

- Directorio /public 
    - Contiene el archivo index.html -> aqui es donde se carga las interfaces
    - Dentro de el <div id="root">Aqui se carga todo</div>
    - img, iconos tambien van aqui
    - Tenemos el archivo manifest.json
    - Tenemos el archivo robots.txt

- Directorio /SRC
   - Tenemos el archivos App.css
   - Tenemos el archivos App.js
   - Tenemos el archivos App.test.js
   - Tenemos el archivos index.css
   - Tenemos el archivos index.js
   - Tenemos el archivos logo.svg
   - Tenemos el archivos reportWebVitals.js
   - Tenemos el archivos setupTest.js

======================================================================================
## Inicializar react y mostrar en la web
======================================================================================

~~~
    import React from 'react'
    import  ReactDOM  from 'react-dom/client'
    const root = ReactDOM.createRoot(document.getElementById('root'))
    root.render(<h1>Hola gente</h1>)
~~~

======================================================================================
# Componentes en React
======================================================================================

#### Reglas Basica de react
- Debe existir un componente que contenga a los demas 

### Crear componentes
- Un componente es simplemente una funcion que retorna HTML
    ~~~
    function Greeting(){
        return <h1>hola soy un componente </h1>
    }
    ~~~

### Llamar o usar el componentes
    ~~~
    root.render(<div>
        { Greeting() } // forma 1
        <Greeting></Greeting> // forma 2
        <Greeting/> // forma 3 (Self closing tags)
    <div/>)
    ~~~

======================================================================================
# JSX
======================================================================================

- Estos archivos de React.js nos permiten utilizar javascript con html juntos 

### React.js interpretando codigo JS
- Para esto se utilisa las llaves { aqui va el js }

### Framents <></>
- Esto sirve para decirle a react que omita los div y solo me muestre el contenido del componente

    ~~~
    root.render(<>
        { Greeting() } // forma 1
        <Greeting></Greeting> // forma 2
        <Greeting/> // forma 3 (Self closing tags)
    </>)
    ~~~

======================================================================================
# Ecmascript modulees
======================================================================================

### Convenion de React.js para crear componentes
1. Todos los componentes deben usar PascalCase (Siempre la primera letra debe ser mayuscula) sino no muestra el componente y da error

2. Extension JSX: Se debe utilizar por estandar los archivos de los componentes.jsx

### Tipos de Exports
1. Podemos exportar desde un archivo varios componentes de manera individual con :
    - exports function(){}}
    Esto exporta el componente de manera idividual y se puede usar con la destructuracion {}

    - exports default function(){}
    Este exporta todo el archivo y debemos nombrar manualmente la importacion y si exportamos otro componente aparte del default se puede usar con una coma -> Producto, { DemasDomponentes}

==================================
# props
==================================

- Los props son los parametros que que recibe la funcion
    props = {
        title: "data"
    }
    ~~~
    root.render(<>
        <Greeting title="Hola Mundo" age={2023} />
        <Greeting title="Hola React" name={false} />
        <Greeting title="Hola JSX" name="Rayan Ray" />
        <Greeting 
        title="Hola Javascript" 
        name="Juan Perez" />
    </>)
    ~~~

- Recibiendo los props en los componentes
    ~~~
    function Greeting(props){
        return <h1> { props.title } </h1>
    }

    function Greeting({ title, name, age }){
        return <h1> { title } </h1>
    }
    ~~~

==================================
# props types
==================================

https://www.npmjs.com/package/prop-types

npm i prop-types

- Este paquete nos permite estableser tipos de datos en los props de manera destructurada y ademas podemos validar el tipo de dato que deseamos recibir
    ~~~
    import PropTypes from 'prop-types'

    export function Button({ text, name }) {
        
    }

    Button.PropTypes = {
        text: PropTypes.string,
        name: PropTypes.string
    }

    Button.defaulrProps ={
        name: "Some User"
    }
    ~~~

==================================
# Styles Components
==================================
#### Para crear estilos se pueden desarrollar en un archivo css e importarlos en el componente
    import './taskCard.css'

    export function TaskCard({ ready }) {
        return ( 
            
            > Tambien se puede agregar estilos de linea o en la misma etiqueta

            <div className="card" style={{ borderRadius: '10px' }}>
            <h1>Tarea 1</h1>
            <span className={ ready ? 'bg-green' : 'bg-red' }>
                { ready ? 'Tarea realizada' : 'Tarea Pendiente :D' }
            </span>
        </div>
        )

    }

==================================
# type ComponentsByClass
==================================
Esta es otra forma de creear componentes muy poco usada; pero no esta defasada ni nada solo por buenas practicas se usar el metodo funcional    
    ~~~
    import { Component } from 'react'

    export class ComponentByClass extends Component {
        render(){
            return <h1>Hello World</h1>
        }
    }
    ~~~


====================================================================
# Event Handler ( Manejador de eventos )
====================================================================
### Tenemos distintos eventos para las etiquetas HTML 
Esto nos permite manejar el comportamiento de la interaccion usuario - software 
1. onClick
2. onChange
3. onSubmit
    ~~~
    <button onClick ={(e)=>{ console.log( 'Usted dió click' )}}>
    <input onChange ={(e)=>{ console.log( e.target.value )}}>
    <button onSubmit ={(e)=>{ 
        e.preventDefault()
        console.log( e.target.value )
        }}>
    ~~~

====================================================================
# fetch
====================================================================
  return <button onClick={ () =>{ 
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.error(err))
    }
    }>
====================================================================
# Uso de Modulos de Terceros
====================================================================
    npm install react-icons
    npm install boxicons --save
    <box-icon 
    type = "regular|solid|logo"
    name="adjust|alarms|etc...."
    color="blue|red|etc..."
    size="xs|sm|md|lg|cssSize"
    rotate="90|180|270"
    flip="horizontal|vertical"
    border="square|circle"
    animation="spin|tada|etc..."
    animation="spin|tada|etc..."
    pull = "left|right"
    ></box-icon

====================================================================
# Array
====================================================================
1. Para recorrer array en react se usa 
    - reduce
    - map(value, index)
    - forEach
    - filter
    - sort
2. El KEY siempre debe estar en el elemento padre porque es el que se repite

====================================================================
# React Hooks
====================================================================
 Son funciones que me permiten guardar datos

## Hooks Basic
1. useState
   [import] React, {useState} from 'react'
   - El primer parametro es una variable y el segundo es una funcion o metodo
   [const] [counter, setCounter ] = useState(10)
   - Aqui usamos el metodo para incrementar el contador 
   [setCounter](counter + 1)

2. useEffect
    [import] React, {useEffect} from 'react'
    - El useEffect lo que hace es detectar cuando el componente cambia y se ejecuta automaticamente
    [useEfect](() => {
        console.log('render')
    }, [dependecia])
        - [dependencia] Esta parte es que si esto cambia se ejecuta el useEffect
        - [ ] Se ejecuta una sola ves useEffect

========================================================================================================================================
# ---------------------------------------------  Aplicacion con VITE -------------------------------------------------------------------
========================================================================================================================================
- Documentacion: https://vitejs.dev/guide/

1. npm create vite
2. Configurar
3. Despues de tener el proyecto ejecutamos [npm-install]
4. Extencionespara el editor
   - es7

====================================================================
## Retornando Listas
====================================================================

   ~~~
    // creamos el estado
    const [tasks, setTasks] = useState([])

    // Se cargan los datos en el estado 
    useEffect(()=>{ setTasks(data) }, [])

    // Validamos que halla datos en el estado
    if( tasks.length === 0 ) { return <h1>No hay tareas</h1> }

    return ({   tasks.map( (task) => ( <h1>{ task.title }</h1> ) )   })
   ~~~

====================================================================
## Añadir tareas Listas
====================================================================

### Arbol de componentes (UI Components Tree)
Esto hace referencia a la manipulacion de datos entre componentes y en este caso tenemos tres componentes

1. [App]
2. [Tasks] el arreglo lo tenemos aqui de las listas [arreglo]
3. [TasksForm]

Ahora si el arreglo esta en [Tasks] el [TasksForm] y [App] no pueden acceder porque el el dato esta en un nivel muy bajo 
no accecible por lo tanto debemos subir nuestro [arreglo] a [App] 

1. [App] subimos el arreglo de las listas al nivel mas alto de la seccion [arreglo]
2. [Tasks] y se puede usar con los [props] en cada componente
3. [TasksForm]  y se puede usar con los [props] en cada componente

====================================================================
## Separar componentes
====================================================================
1. src/[App] 
2. src/components/[Tasks] 
3. src/components/[TasksCard] este es un sub-componentes de Tasks
4. src/components/[TasksForm]

====================================================================
## Eliminar Tarea
====================================================================
Para poder eliminar una tarea de la lista debemos crear un metodo deleteTask
y como sabemos que el arreglo esta en [App] debemos crear el metodo al nivel mas alto
1. src/[App] 
2. src/components/[Tasks] 
3. src/components/[TasksCard] en el card ejecutamos el boton eliminar y le añadimos el taskId

====================================================================
# CONTEXTO EN REACT
====================================================================
Esto es cambiar el rumbo de la flecha, es decir, que en ves de enviar la funcion por los componentes
para acceder al estado de en [App] simplemente se crea un contexto que permita contener todos los componentes
hijos y que todos puedan acceder a los valores del contexto.

1. Creamos un directorio de contextos ./context
2. Creamos un archivo TaskContext.jsx

### 3 Crear Contexto
    ~~~
        import { createContext } from "react";

        export const TaskContext = createContext() // este es el nombre del contexto

        export const TaskContextProvider = (props) => { // Este seria el nombre del componente
            let x = 20
            return (
                <TaskContext.Provider value={x}> { props.children } </TaskContext.Provider> // Esto es lo que me permite englobar todos los       
                                                                                            // componentes
            )
        }
    ~~~

### 4 Configurar el main para dejar el contexto de manera global
    ~~~
        import { TaskContextProvider } from './context/TaskContext'

        ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
            <TaskContextProvider>
            <App />
            </TaskContextProvider>
        </React.StrictMode>,
        )
    ~~~

### 5 Usar los componentes
    importamos el nombre del contexto y el useContext
    ~~~
        import { useContext } from 'react'
        import { TaskContext } from '../context/TaskContext'
        
        function Tasks({ tasks, deleteTask }){
            const valor = useContext(TaskContext) // con esto accedemos a los valores del CONTEXTO
            console.log(valor)
        }
    ~~~

====================================================================
# TAILWIND CSS
====================================================================

### Documentacion de como instalar lo: 
[Tailwind](https://tailwindcss.com/docs/installation)
[Framework-Vite](https://tailwindcss.com/docs/guides/vite)

#### Estencion para el autocompletado 
- tailwindcss

====================================================================
# DEPLOY DEL PROYECTO A GITHUB
====================================================================



====================================================================
# Para seguir estudiando
====================================================================

https://www.faztweb.com/react