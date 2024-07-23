# Uso del operador JSON en la clausula SELECT

## Tareas
1. Consulta basica con alias trallendo todos los datos
~~~
    SELECT ven.*
    FROM ventas2 as ven;
~~~

2. Consulta con alias trallendo datos espesificos
~~~
    SELECT ven.id, ven.fecha_de_venta, ven.detalles_venta, 
    FROM ventas2 as ven;
~~~

3. Consulta con alias trallendo datos espesificos de los [JSONB]
Operadores de acceso:
##### -> con un solo mayor que se apunta a la propiedad JSONB
##### ->> con dos mayor que, se apunta al valor directamente
~~~
    SELECT  ven.id, 
            ven.fecha_de_venta, 
            ven.detalles_venta->'cliente' AS cliente, 
            ven.detalles_venta->>'total' AS total, 
    FROM ventas2 AS ven;
~~~

4. Mostrando la propiedad de tipo array [productos] del objeto JSON
~~~
    SELECT  ven.id, 
            ven.fecha_de_venta, 
            ven.detalles_venta->'cliente' AS cliente, 
            -- Primero se apunta al array > despues > se define la posicion que queremos leer y por ultimo >> accedemos al valor
            ven.detalles_venta->'productos'->0->>'nombre' AS nombre_producto, 
    FROM ventas2 AS ven;
~~~

5. Mostrando la propiedad de tipo array [productos] del objeto JSON usando [METODOS]
> method: jsonb_array_element(array_jsonb, position[0]) 
~~~
    SELECT  ven.id, 
            ven.fecha_de_venta, 
            ven.detalles_venta->'cliente' AS cliente, 
            
            -- Accediendo a un nivel mas dentro del json
            ven.detalles_venta->'direccion'->>ciudad AS direccion, 

            -- Usando el método
            jsonb_array_element(ven.detalles_venta->'productos', 0)->>'nombre' AS nombre_producto, 
    FROM ventas2 AS ven;
~~~

6. Eliminando un registro apuntando a una propiedad del OBJETO JSON
DELETE FROM ventas2
WHERE detalles_venta->>'cliente' = "nombre_cliente";