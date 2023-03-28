# Front End Clean Archetecture
Es una forma para poder ordenar nuestros proyecto de manera desente.

# Estructura
1. Externo ( Servicio externos )
2. Adaptadores 
3. caso de uso ( Componentes )
4. Dominio ( Modelo / State )

### Definiciones
1. Externo ( Servicio externos ): Llamados a las api
 - Directorios
       - services 

2. Adaptadores: Se crean los objetos como se van a utilizar en la app
 - Directorios
       - adapters 
       - interseptors 

3. caso de uso ( Componentes ): Es donde esta ubucada la logica de negocios estos accionan
    - Directorios
       - utilities 
       - components 
       - hooks 
       - styled-components 

4. Dominio ( Modelo / State ): 
modelo: Son todas las entidades
state: Es donde se guarda todas las entidades
   - Directorios
       - redux 
       - contexts 
       - models 

# Easy loading
Para utilizar la carga perezosa se debe 
transformar esta arquitectura en modular es 
decir, que los mismos directorios de el root se 
usan en las PAGES de login pero se crea esos 
modulos que solo van a hacer vida alli 

diferencia entre un adapters de login a uno root 
es que el adapters root se usa en toda la app y 
el de login solo hace vida en el login


# Assets
Este directorio es donde va todo el contenido multimedia

# Context
Es una forma de manejar el estado pero solo para 
cosas de la vista super sencillas

# hooks (Custom hooks)
Es una nueva forma de controlar los ciclos de vida de un componentes, y esto lo que hace es utilizar una logica y exportarla.

Err: Esto lo que hace es solucionar un problema 
con los ciclos de vida de un componente y si se 
hace clic en taks y despues en otra el componente 
anterior se destruye y eso es un problema porque 
la llamada de la taks queda activa y a la hora de 
ejecutar el codigo el codigo no existe y explota 
la app 

# Interceptors
Esto se encarga de interceptar peticiones al 
servidor y si hay un problema lo busca y da una respuesta coerente al usuario

# Models
Esta son interfaces de datos para un objeto

~~~
    export interface SelectOption {
        label: string;
        value: string;
    }

    export interface Action {
        type: string;
        payload: T;
    }
~~~

# Pages
son las vistas

# Redux (Opcional)
En esta seccion es donde semanejan los estados y el store.

  - Directorios
       - states 
          - index.ts 
          - users.tsx 
       - store.tsx

### Codigo

~~~
import { User } from '@models';
import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './state/user';

export interface AppStore{
    user: User;
}
// ----------------------
export default configureStore<AppStore>({
    reducer:{
        user: userSlice.reducer
    }
});
~~~

# Services
Aqui va estar ubicado todas las llamadas a las APIS-REST

# Styled-components
Aqui se puede ubicar un layout y estilos de algunas secciones de componentes

# Utilities
Son funciones muy espesificas que resuelven una sola cosa.

- Directorios
       - utilities 
          - fotmat-date-mmmd.utility.tsx 
          - fotmat-snake-case.utility.tsx 
          - get-yesterday-unix.utility.tsx 
       - index.ts

~~~
export const FormatDateMMMD = (dateString: string): string => {
    const date = new Date(dateString);

    return `${date.toLocaleDateString('en-us', { month: 'short' })} ${date.getDate()} `;
};
~~~


