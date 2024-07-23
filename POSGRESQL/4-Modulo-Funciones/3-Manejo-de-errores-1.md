# Manejo de errores 1 
## Raise errors ( Debug, log, info/notice )

## RAISE
Es una instrucción en PostgreSQL que permite generar mensajes de error, excepciones o depuración durante la ejecución de una función o procedimiento.

## ESTADOS DE LAS RESPUESTAS
1. RAISE EXCEPTION: 
    Permite generar una "excepción" personalizada con un mensaje de error específico.

2. RAISE NOTICE - INFO:
    Permite generar un mensaje de "notificación" para la salida de depuración.

3. RAISE DEBUG:
    Permite generar un mensaje de "depuración" para la salidad de depuración.

4. RAISE LOG:
    Permite generar un mensaje de "registro" para el archivo de registro de PostgreSQL.

5. RAISE WARNING:
    Permite generar una "advertencia" con un mensaje específico.

## Tarea
- Manejo de errores I RAISE ERRORS 
- Determinar la cantidad de proveedores que se tiene en la DB.

1. Crear la función que determine el total de proveedores que tengo

~~~
-- Sentencia SQL para obtener el total de proveedores
    SELECT count(prov.id_proveedor) AS cantidad
    FROM proveedores AS prov;

-- Crear la función e integrar la sentencia
    CREATE OR REPLACE FUNCTION cantidad_proveedores()
        RETURNS integer 
        LANGUAGE plpgsql AS 
        $$
            DECLARE respuesta int;
            BEGIN
                -- La sentencia cambia de AS -> INTO
                SELECT count(prov.id_proveedor) INTO respuesta
                        FROM proveedores AS prov;
                
                -- Manejo de errores
                
                -- Estas se muestran en consola
                -- El simbolo porcentaje hace referencia a la variable, es decir, que se imprime allí.
                RAISE INFO ' Cantidad de proveedores INFO: %', respuesta;
                RAISE NOTICE ' Cantidad de proveedores NOTICE: %', respuesta;

                -- Estas se registran en un archivo de la DB y no se muestra en consola
                RAISE DEBUG ' Cantidad de proveedores DEBUG: %', respuesta;
                RAISE LOG ' Cantidad de proveedores LOG: %', respuesta;

                RETURN respuesta;
            END;

        $$;

~~~

2. VER RESULTADO
~~~
    -- ejecutamos la función
    SELECT cantidad_proveedores();

    -- Esta sentencia se usa para ver la direccion del archivo de la DB data/bin/log
    SHOW data_directory;
~~~