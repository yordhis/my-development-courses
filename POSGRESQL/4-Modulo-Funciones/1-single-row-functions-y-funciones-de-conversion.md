# Single row functions y funciones de conversion 
## ( Cast function )

Estas funciones operan sólo en filas únicas, actuan en cada fila de la consulta por lo tanto devuelven un resultado por fila.

1. Funciones matemáticas: 
    ABS, ROUND, TRUNC, CEIL Y FLOOR.

2. Funciones de cadena: 
    CONCAT, SUBSTRING, LENGTH, LOWER, UPPER, INITCAP Y TRIM.

3. Funciones de fecha y hora: 
    CURRENT_DATE, DATE_PART, TO_DATE, TO_CHAR Y AGE.

4. Funciones de conversión: 
    CAST

## Tareas
- Crear una nueva vista de productos.
- Mostrar en las columnas categoria todas las letras en mayusculas.
- Mostrar el precio promocional con dos decimales

1. Creando la vista
~~~
    CREATE OR REPLACE VIEW productos_y_descuentos_v2 AS
    SELECT  prod.nombre AS producto,
            prod.precio AS precio_base,
            -- PROVEEDOR - Mostramos todo en minuscula
            LOWER(prov.nombre) AS proveedor,

            prov.correo_electronico AS email,

            -- Aqui se aplica el single row function UPPER
            UPPER(cat.nombre) AS categoria,
            
            -- DESCUENTO
            (
                CASE cat.nombre
                    WHEN 'Electrónica' THEN '8%'
                    WHEN 'Hogar' THEN '5%'
                    ELSE '1%'
                END
            ) AS descuentos,

            -- PRECIO DE PROMOCION - MODO 1
            CAST(
                (
                    CASE cat.nombre
                        WHEN 'Electrónica' THEN prod.precio - prod.precio * 0.08
                        WHEN 'Hogar' THEN prod.precio - prod.precio * 0.05
                        ELSE prod.precio - prod.precio * 0.01
                    END
                ) AS NUMERIC(10, 2) 
            ) AS precio_promocion

            -- PRECIO DE PROMOCION - MODO 2
            (
                CASE cat.nombre
                    WHEN 'Electrónica' THEN prod.precio - prod.precio * 0.08
                    WHEN 'Hogar' THEN prod.precio - prod.precio * 0.05
                    ELSE prod.precio - prod.precio * 0.01
                END
            )::NUMERIC(10, 2) AS precio_promocion

    FROM productos AS  prod
        INNER JOIN proveedores AS prov ON prov.id_proveedor = prod.proveedor_id
        INNER JOIN categorias AS prov ON cat.id_categoria = prod.categoria_id;
~~~

2. Visualizamos que la vistas este retornando bien los datos
~~~
    SELECT * FROM productos_y_descuentos_v2;
~~~

3. Ejemplo de casteo de tipo de datos.
Se debe tomar en cuenta la longitud de carateres permitidos dentro de la columna
no se exeda a limite establecido ya que los decimales forman parte del valor numerico, es decir, si declaramos una longitud de 10 y asignamos dos DECIMALES 
la longitud se divide 8 digitos para los enteros y dos para los decimales.
~~~
    -- Modo 1 de sacar piojo 
    SELECT * FROM CAST(123 AS NUMERIC(10, 2));

    -- Modo 2 de sacar piojo 
    SELECT * FROM 123::NUMERIC(10, 2);

~~~