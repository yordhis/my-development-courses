# Manejo de errores 2 RAISE ERRORS 
## (WARNING - EXCEPTION)

## Visualizar los log y debug
~~~
    vim nombre_del_archivo_log
~~~

## Tarea
- Manejo de errores II RAISE ERRORS 
- Determinar la cantidad de empleados que se tiene en la DB.

1. Crear la función que determine el total de empleados que tengo

~~~
    -- Sentencia SQL para obtener el total de empleados
        SELECT count(emp.id_empleado) AS cantidad
        FROM empleados AS emp;

    -- Crear la función e integrar la sentencia
        CREATE OR REPLACE FUNCTION cantidad_empleados()
            RETURNS integer 
            LANGUAGE plpgsql AS 
            $$
                DECLARE respuesta int;
                BEGIN
                    -- La sentencia cambia de AS -> INTO
                    SELECT count(prov.id_empleado) INTO respuesta
                            FROM empleados AS prov;
                    
                    -- Manejo de errores
                    
                    -- Estas se muestran en consola
                    -- El simbolo porcentaje hace referencia a la variable, es decir, que se imprime allí.
                    RAISE WARNING ' Cantidad de empleados WARNING: %', respuesta;

                    -- Los Errores WARNING no detienen la app pero si retorna un codigo de error
                    -- que se puede obtener para ser manejado el error y personalizado

                    RETURN respuesta;
                END;

            $$;

    -- EJECUTAR LA FUNCIÓN
    SELECT cantidad_empleados();
~~~


2. Crear una función que determine el si el precio del producto es mayor a 10

~~~
    CREATE OR REPLACE FUNCTION validar_precio_v2( precio NUMERIC(10, 2) )
    RETURNS bool
    LANGUAGE plpgsql AS
    $$
        DECLARE  respuesta BOOL := false;
        BEGIN
            IF precio >= 10 THEN
                respuesta := true;
            END IF;

            -- Este error si detiene la ejecucion de la app
            -- se muestra en (rojo)
            RAISE EXCEPTION 'El precio del recibido: % debe ser mayor a 10', precio;
        END;
    $$;

    -- LEER LA FUNCIÓN
    SELECT validar_precio(15);
~~~