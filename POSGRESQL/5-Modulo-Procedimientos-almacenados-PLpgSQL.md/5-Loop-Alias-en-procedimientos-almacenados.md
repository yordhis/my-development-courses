# Loop y Alias en procedumientos almacenados 
## ( LOOP - ALIAS FOR $1 )

## Ejercicio

~~~
    CREATE OR REPLACE FUNCTION mostrar_productos_con_poco_stock_v4(
        IN INTEGER 
    )
    RETURNS TABLE(producto VARCHAR(50), descripcion TEXT, stock INTEGER)
    LANGUEGE plpgsql AS 
    $$
        DECLARE fila RECORD;
        -- Al declarar variable econ el ALIAS FOR le asignamos un nombre al mapin de dolar $1
        DECLARE inventario ALIAS FOR $1;
        
        BEGIN
            FOR fila IN
                SELECT prod.nombre, prod.descripcion, prod.cantidad_inventario
                FROM productos AS prod
                WHERE prod.cantidad_inventario <= inventario

                LOOP
                    producto := fila.nombre;
                    descripcion := fila.descripcion;
                    stock := fila.cantidad_inventario;

                    -- MODO 1 -> RETORNA TODA LA SALIDA
                    RETURN NEXT;
                    -- MODO 2 -> ESPECIFICAR QUE SE QUIERE RETORNAR EN LA SALIDA
                    -- RETURN NEXT(producto,des,N...)
                END LOOP;
                RETURN;

        END;
    $$

~~~