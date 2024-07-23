# Como utilizar las vistas materializadas
Las vistas materializadas no cambian asi se afecte la otra tabla de donde se sacan los datos, es 
decir, que las vistas materializadas son tables que no perciben los cambios y mantienen su valor.

## ¿Como actualizar una vista materializada?
Se usa la sentencia SQL 
~~~
    REFRESH MATERIALIZED VIEW name_vista_materializada;
~~~