# Desarrollando el Boilerplate

# Dependecia usadas
npm i --save-dev @types/styled-components

La idea es crear una especie de login usando la api-rest de RICK AND MORTY

# Paso 1
Crear el servicio de conexión a la api de rick and morty

# Paso 2
Crear el modelo o interfaz de user en el directorio models

# Paso 3
Crear un adapter para depurar la informacion recibida

# Paso 4
Creamos una PAGES Login.tsx esta es la vista del login donde estaremos solicitando los datos

# Paso 5 
Crear la logica de los estados en el directorio de REDUX en esta seccion tenemos un 
store.ts global y el directorio /states contendrá todas la entidades o medelos de datos de la app por archivo user.ts planet.ts y pare de contar  

# Paso 6 
Se configura el archivo ./states/user.ts
1. Creamos la constante UserEmptyState
    Esta constante almacena los datos del modelo User
2. Creamos la constante UserSlice
    Esta otra constante nos permite controlar todas las acciones del estado y es de aqui que se edita el estado

# React-router-DOM
- Extención  
   1. Create-components
   2. ES7 + React/redux/React-native snippets 
       - rfce: Esto nos crea una funcion ya exportada bien estructurada
       - nos dirigimos a las configuraciones de ES7 y desactivamos el auto import


# Lazy Loading
Esto sirve para realizar una carga perezosa y me permite solo cargar el componente solicitado

donde se debe hacer o aplicar LAZY LOADING solo en el componente padre de cada ruta ejemplo 
Login, Home, Dashboard, Products y etc.