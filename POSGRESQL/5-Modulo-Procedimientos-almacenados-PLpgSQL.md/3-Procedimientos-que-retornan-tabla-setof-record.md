# Procedimiento retornando tablas
## SETOF - RECORD
Los Record se consideran como las filas si tienes 100 filas son 100 record

## Tarea
1. Mostrar los nombres, descripcion y cantidad del inventario de aquellos productos
cuya existencia en inventario sea menor a 15.
    - La función recibe 4 parametros
    - Una de entrada (cantidad_inventario)
    - Los demas son de salida para retornar los resultados

~~~
    CREATE OR REPLACE FUNCTION mostrar_productos_con_poco_stock(
       IN inventario INTEGER,
       OUT nombre_prod VARCHAR(50),
       OUT descripcion_prod TEXT,
       OUT cant_inventario INTEGER
    )
    RETURNS SETOF RECORD
    LANGUAGE plpgsql AS
    $$
        DECLARE fila RECORD;
        BEGIN
            FOR fila IN
                -- SENTENCIA SQL
                SELECT *
                    FROM productos AS prod
                    WHERE prod.cantidad_inventario <= inventario
                
                LOOP
                    nombre_prod := fila.nombre;
                    descripcion_prod := fila.descripcion;
                    cant_inventario := fila.cantidad_inventario;
                END LOOP;
                RETURN;
        END;
    $$;

    -- Llamar la función como si fuera una tabla
    SELECT * 
        FROM mostrar_productos_con_poco_stock(15);
~~~ 