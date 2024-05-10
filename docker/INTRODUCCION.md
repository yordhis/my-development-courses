# Docker


# Contenedores
Los contenedores son una forma de virtualización del sistema operativo. Un solo contenedor se puede usar para ejecutar cualquier cosa, desde un microservicio o un proceso de software a una aplicación de mayor tamaño. Dentro de un contenedor se encuentran todos los ejecutables, el código binario, las bibliotecas y los archivos de configuración necesarios. Sin embargo, en comparación con los métodos de virtualización de máquinas o servidores, los contenedores no contienen imágenes del sistema operativo. Esto los hace más ligeros y portátiles, con una sobrecarga significativamente menor. En implementaciones de aplicaciones de mayor tamaño, se pueden poner en marcha varios contenedores como uno o varios clústeres de contenedores. Estos clústeres se pueden gestionar mediante un orquestador de contenedores, como Kubernetes.

Ejemplo: puede estar alojados Html, node y de mas cosas.

Los contenedores son protable es decir que se pueden compartir

leer mas [docker] https://www.netapp.com/es/devops-solutions/what-are-containers/

## Donde se almacenan los contenedores: 
Se almacenan en Repositorio para contenedores
existen dos tipo de repositorios
- publico
   > Docker hub (nodejs, postgres, golandg, etc...)
- privado

## Proceso con contenedores
1. El equipo de Devs y Ops se encargan de crear una IMAGEN el cual se ejecuta con [runtime_doker] y [Pipeline] (git, gitlab)
2. Para produc