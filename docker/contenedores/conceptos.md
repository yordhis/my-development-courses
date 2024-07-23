# Contenedor

## Estados de un contenedor
 - Created: Creado pero no esta corriendo.
 - Running: Esta ejecutandose.
 - Restarting: Se esta reiniciando
 - Exited: Salida del contenedor
 - Paused: Pausado, suspende todos los procesos por tiempo indefinido
 - Dead: Inactivo estos no se pueden reiniciar

## Comandos
Para visualizar todos los coamando colocamos en la terminal: 
~~~
   c:/users/~ docker  
~~~
~~~
   c:/users/~ docker run --help
~~~
damos ENTER

# Imagenes en contenedores
    Las imagenes de docker son labase de los contenedores.

    Una imagen es una colección ordenada de cambios en el sistema de archivos raiz y los parametros de ejecución
    correspondiente para su uso dentro de un tiempo de ejecucion de contenedor.

#### Giagrama
    Dockerfile -- Build --> Docker image --- Run ---> Docker container


## ¿Por qué utilizar imagenes?
    En otros entornos de maquinas virtuales, las imagenes se denominaría algo asi
    como "instantanea" o "Snapshots". Las imagenes de Docker nunca pueden cambiar. 
    Una vez que haya creado uno, puede ser eliminado, pero no modificado. Si 
    necesitas una nueva version de la instantanea, cree una imagen completamente nueva.

    Esto nos permite siempre mantener la inmutabilidad de nuestras versiones en nuestra
    aplicacion y es perfecto para mantener el "funcionamiento igual en todos lados". 

## Catalogo de imagenes

    Es el centro de almacenamiento de imagenes docker mas grande que puedes utilizar
    para encontrar imagenes docker es el Docker Hub. Este te permite:

  - Alojamiento de las imagenes docker.
  - Autenticacion de usuario.
  - Construcciones de imagenes automatizadas y herramientas de flujo de trabajo,
    como actividades de compilación y enlace web.
  - Entre otras.


## Comandos
- El siguiente comando me permite descargar e instalar una imagen docker 
~~~
   c:/users/~ docker pull image_name 
~~~

- Docker run me permite correr una imagen docker
~~~
   c:/users/~ docker run image_name 
~~~

- Docker ps -a esto muestra todos los contenedores y sin el flag -a muetra solo los que estan corriendo
~~~
   c:/users/~ docker ps -a 
~~~

- Docker rm id_contenedor o name_contendor, Este comando borra el contenedor
~~~
   c:/users/~ docker rm id o name
~~~

- Docker stop id_contenedor o name_contendor, este comando pausa el contendor
~~~
   c:/users/~ docker stop id o name
~~~

- Docker run -d --name mi-contenedor, Esto corre el contendor en modo ditagch y se le asigna un nombre
~~~
   c:/users/~ docker run -d --name mi-contendor
~~~

- Docker exec mi-contenedor command, Esto permite ejecutar comando dentro del contenedor si añadimos el flag -it
puedo ejecutar comando dentro de una sesion de contenedor
~~~
   c:/users/~ docker exec mi-contenedor ls
   c:/users/~ docker exec -it mi-contenedor ls
   c:/users/~ docker exec -it mi-contenedor bash
~~~
