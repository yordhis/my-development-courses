# Tipos de parametros de entrada y salidad
## (IN - OUT - INOUT - $)

## Ejercicio

### USANDO EL INOUT
~~~
    CREATE OR REPLACE FUNCTION mostrar_productos_con_poco_stock_v2(
       INOUT cant_inventario INTEGER,
       OUT nombre_prod VARCHAR(50),
       OUT descripcion_prod TEXT
    )
    RETURNS SETOF RECORD
    LANGUAGE plpgsql AS
    $$
        DECLARE fila RECORD;
        BEGIN
            FOR fila IN
                SELECT *
                    FROM productos AS prod
                    WHERE prod.cantidad_inventario <= cant_inventario
                
                LOOP
                    nombre_prod := fila.nombre;
                    descripcion_prod := fila.descripcion;
                    cant_inventario := fila.cantidad_inventario;
                    RETURN NEXT;
                END LOOP;
                RETURN;
        END;
    $$;

    -- Llamar la función como si fuera una tabla
    SELECT * 
        FROM mostrar_productos_con_poco_stock_v2(15);
~~~

### USANDO EL DOLAR $
Sino se asignan nombres a los parametros postgreSQL realiza un mapeo interno y los renombra de la siguiente forma: 
- param1 => $1
- param2 => $2
- paramN => $n...
~~~
    CREATE OR REPLACE FUNCTION mostrar_productos_con_poco_stock_v3(
       INOUT  INTEGER,      -- $1
       OUT  VARCHAR(50),    -- $2
       OUT  TEXT            -- $3
    )
    RETURNS SETOF RECORD
    LANGUAGE plpgsql AS
    $$
        DECLARE fila RECORD;
        BEGIN
            FOR fila IN
                SELECT *
                    FROM productos AS prod
                    WHERE prod.cantidad_inventario <= $1
                LOOP
                    $2 := fila.nombre;
                    $3 := fila.descripcion;
                    $1 := fila.cantidad_inventario;
                    RETURN NEXT;
                END LOOP;
                RETURN;
        END;
    $$;

    -- Llamar la función como si fuera una tabla
    SELECT * 
        FROM mostrar_productos_con_poco_stock_v3(15);
~~~