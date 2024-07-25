# Funcion que retorna un tipo de TRIGGER

## ¿Qué es un trigger?
Tambien conocido como DISPARADOR o DESENCADENADOR.

Es un objeto del servidor (script, similar a un procedimiento almacenado) que esta asociado 
con tablas Y/O VISTAS.

## Donde se pueden usar o ejecutar los eventos TRIGGER:
- INSERT
- UPDATE
- DELETE
### Todos los TRIGGER se ejecutan de forma automatica

## Tiempos de ejecución
Se puede definir en que tiempo de la acción de las sentencias pueden ejecutarse antes o despues
con las expresiones:
- BEFORE => ANTES
- AFTER => DESPUES

## OBJETOS que acceden a las columnas de las tablas
Sentencias -------  Objeto  ------- Acceder a la data ---
- INSERT    =>      NEW         =>  NEW.name      
- UPDATE    =>      NEW | OLD   =>  NEW.nombreDeColumna | OLD.nombreDeColumna
- DELETE    =>      OLD         =>  OLD.name


## Ejercicio
Crear un TRIGGER que valide los correos electrónicos

1. Pseudo SQL de inserción
~~~
    INSERT INTO proveedores(nombre, direccion, telefono, correo_electronico) VALUES
        ('Fabricantes de juguetes', 'Toluca Km. 17, Toluca', '772-234-5555', 'emailexamplecom');
~~~

2. Crear el Validador TRIGGER
~~~
    CREATE FUNCTION insertar_proveedor()
        RETURNS TRIGGER
        LANGUAGE plpgsql AS
        $$
            DECLARE regex_email TEXT := '^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$'
            BEGIN
                IF NEW.correo_electronico ~ regex_email
                    THEN
                        RETURN NEW;
                ELSE
                    RAISE EXCEPTION 'El email: "%", no es valido!!! ',  NEW.correo_electronico;
                END IF;
            END;
        $$;
~~~

3. Asociar el TRIGGER con una tabla
~~~
    CREATE TRIGGER tr_nuevo_proveedor
    -- Primero indicamos el tiempo de ejecución
    -- Despues en que acción se va a ejecutar 
        BEFORE INSERT
        -- Indicamos a que tabla se asocia
        ON proveedores
        -- le decimos que recorra las filas y ejecute lo mismo por cada fila
        FOR EACH ROW
        -- indicamos que función vamos a ejecutar
        EXECUTE FUNCTION insertar_proveedor();
~~~
