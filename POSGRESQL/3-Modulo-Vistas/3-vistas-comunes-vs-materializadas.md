# Vistas comunes VS materializadas

## Tipos de Vistas en PostgreSQL
En PGSQL existen dos tipos de vistas: materializada y las comunes

### Vista Comunes
Son vistas que no se almacenan fisicamente los datos, sino que se construyen los resultados de la consulta cada vez que se hace consultas a la vista

### Vista Materializada 
Son vistas que si se almacenan fisicamente los datos de las consultas, lo que permite una 
respuesta mas rapida a las consultas posteriores a la vista.

#### Recomendaciones de uso 
 - Las vistas Comunes se deben usar cuando una consulta es compleja y repetitiva.
 - Las vistas Materializadas se requiren cuando se desea congelar datos.

Para verificar el punto de que si se almacena las vistas materializas y las comunes no:
~~~
    SELECT pg_relation_filepath('find_table');
~~~