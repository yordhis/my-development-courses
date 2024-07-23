
# Procedimientos Almacenados
Esto se usa para que los usuario puedan hacer ediciones y eliminaciones 
con los procedimientos almacenados y no de otra forma para el control de
la data.

## Procedimientos de adición, eliminación y eliminación de filas (Rows)

### Tareas

1. Agregar un registro a la tabla producto

### Nota
Para definir los parametros como entrada, salida o mixto se usa 
las siguientes palabras reservadas:
- IN => ENTRADA
- OUT => ENTRADA
- INOUT => ENTRADA Y SALIDA

~~~
CREATE OR REPLACE PROCEDURE agregar_producto(
    IN nombre VARCHAR,
    IN descripcion VARCHAR,
    IN precio NUMERIC(10,2),
    IN cantidad_inventario INTEGER,
    IN proveedor_id INTEGER,
    IN categoria_id INTEGER
)
LANGUAGE plpgsql AS
$$
    DECLARE
    BEGIN
        INSERTE INTO productos (nombre, descripcion, precio, cantidad_inventario, proveedor_id, categoria_id)
        SELECT nombre, descripcion, precio, cantidad_inventario, proveedor_id, categoria_id;

        --  CONFIRMAR LOS CAMBIOS
        COMMIT;

        -- ROLLBACK; ESTO ES PARA DESHACER LOS CAMBIOS

        -- IMPRIMIMOSEN CONSOLA CON LOS RAISE ERRORS
        RAISE INFO 'Datos insertado EN LA TABLA PRODUCTO correctamente';

    END;
$$;


-- CALL name_function(arguments);
CALL agregar_producto('SMART-TV LG2005', 'SMART-TV LG2005 DE 75 PULGADAS', 350.00, 12, 1, 2);
~~~


2. Eliminar un producto

~~~
    -- CREAMOS EL PROCEDIMIENTO
                                                    -- $1 , $2, $n...
    CREATE OR REPLACE PROCEDURE eliminar_producto(IN prodID INTEGER)
    LANGUAGE plpgsql AS
    $$
        DECLARE sql TEXT;
        BEGIN
            -- Para embeber un parametro en una sentencia SQL recibida en cadena de texto 
            -- se usa $posicion que inicia en 1

            sql := 'DELETE FROM productos WHERE id_producto = $1';
            
            -- el execute convierte el texto en Sentencia SQL y despues se usa el parametro prodID
            -- si se desea usar mas parametros seria asi: EXECUTE sql USING prodID, param2, paramN...
            EXECUTE sql USING prodID;

            RAISE INFO 'Registro eliminado de la tabla productos con exito.';
        END;
    $$;

    -- LLAMAMOS AL PROCEDIMIENTO
    CALL eliminar_producto(6);
~~~
