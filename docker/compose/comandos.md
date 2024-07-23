# Comandos

## docker compose up
Nos permite leventar todos los servicio en el archivo compose.yaml

## docker compose up -d
lo deja ejecutando en segundo plano

## docker compose up -f .\myfile-compose.yaml -d
## docker compose up -f .\dev\myfile-compose.yaml -d
en este comando se espesifica la ruta del archivo y tambien se puede buscar el archivo si esta en otra carpeta

## docker ps -a
Muestra todo los contenedores o servcios que estan corriendo

## docker compose down
Da de baja todos los servicios