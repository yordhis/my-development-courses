# Funciones de agregación en Objeto JSON

## Funciones de agregación:
- MAX
- MIN
- AVG
- SUM
- COUNT

## Tareas
1. Obtener precio total de todos los productos
~~~
    SELECT ven.detalles_venta->'total' as TOTAL
    FROM ventas2 AS ven;
~~~

2. Sumar todos los totales del objeto JSON
~~~
    -- Primero se debe acceder al valor de la propiedad total; pero esto retorna TEXT(STRING)
    -- Despues se debe castear la respuesta de la propiedad tota ()::type
    -- Y por ultimo usamos la función de agregación SUM para realizar la sumatoria
    SELECT SUM( (ven.detalles_venta->>'total')::NUMERIC ) as TOTAL
    FROM ventas2 AS ven;
~~~

3. Obtener el total mas alto o máximo
~~~
    SELECT MAX( (ven.detalles_venta->>'total')::NUMERIC ) as MAX
    FROM ventas2 AS ven;
~~~

## Ejercicio
Se desea obtener la suma total de los precio de los productos vendidos.

Para dar solucion se debe usar el método:
jsonb_array_elements(array_jsonb) esto retorna el array en filas como sifuera otra [table] 
~~~
    SELECT SUM( (detalle_producto->>'precio')::NUMERIC ) as TOTAL
    FROM ventas2 AS ven,
    jsonb_array_elements(ven.detalles_venta->'productos') AS detalle_producto; 
~~~
 
