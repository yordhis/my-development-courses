# Funciones condicionales (if-then-case) 
## User Defined Function = UDF = Funciones definidas por el usuario-dev

## Entramos a la programación con el lenguaje "plpgsql"

## Estructura de una función de pgSQL

~~~
    -- Asignamos nombre de la funcion y sus parametros
    CREATE FUNCTION nombre_de_la_funcion(a INTEGER, b INTEGER)

    -- Definimos que es lo que va a retornar
    RETURNS INTEGER

    -- Indicamos en que lenguaje se va a programar
    LANGUAGE plpgsql AS

    -- Expresión regular obligatoria para contenr el código se abre y se cierra
    $$
        -- aqui se declaran las variable locales de la funcion

        -- Expresión regular obligatoria para contenr el código se abre y se cierra
        BEGIN
            -- Aquí dentro va la lógica de la función
            RETURN a+b;
        END;
    $$;
~~~

### Ejercicio 1
- Crear una función que permita validar el precio del producto
- No se acepta precios menores a 10.00

1. Creamos la función
~~~
    CREATE OR REPLACE FUNCTION validad_precio( precio numeric(10,2) )
    RETURNS bool
    LANGUAGE plpgsql AS 

    $$
        -- Declarando variable
        DECLARE respuesta bool := false;

        -- Variable no inicializada
        DECLARE test VARCHAR;

        -- Variable inicializada
        DECLARE age int := 0 -- age=0

        BEGIN
            -- Usamos los condicionales
            IF  precio >= 10.00 
                THEN
                    respuesta := true;
            END IF;

            RETURN respuesta;
        END;
    $$;
~~~

2. Leer la función
~~~
    SELECT validad_precio(10);
~~~

3. eliminar función
~~~
    DROP FUNCTION validad_precio;
~~~


### Ejercicio 2
Crear una función que calcule los precio de promoción para integrar la en 
la vista "productos_y_descuentos_v3" 

1. crear funcion que reciba el parametro categoria y precio y retorne el descuento.

~~~
    CREATE FUNCTION precio_promocion( catNombre varchar(50), precio numeric(10,2) )
    RETURNS numeric
    LANGUAGE plpgsql AS
    $$
        DECLARE respuesta NUMERIC;
        BEGIN

            CASE catNombre
                WHEN 'Electrónica' THEN respuesta := precio - precio * 0.08
                WHEN 'Hogar' THEN respuesta := precio - precio * 0.05
                ELSE respuesta := precio - precio * 0.01
            END CASE;
        END;

        RETURN respuesta;
    $$;
~~~

2. Crear la vista "productos_y_descuentos_v3" e implementar la funcion 
"precio_promocion()"

CREATE OR REPLACE VIEW productos_y_descuentos_v3 AS
    SELECT  prod.nombre AS producto,
            prod.precio AS precio_base,
            LOWER(prov.nombre) AS proveedor,
            prov.correo_electronico AS email,
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
                ( precio_promocion(cat.nombre, prod.precio) ) AS NUMERIC(10, 2) 
            ) AS precio_promocion

            -- PRECIO DE PROMOCION - MODO 2
            precio_promocion(cat.nombre, prod.precio)::NUMERIC(10, 2) AS precio_promocion

    FROM productos AS  prod
        INNER JOIN proveedores AS prov ON prov.id_proveedor = prod.proveedor_id
        INNER JOIN categorias AS prov ON cat.id_categoria = prod.categoria_id;

3. Ver el resultado de la vista
~~~
    SELECT * FROM productos_y_descuentos_v3;
~~~