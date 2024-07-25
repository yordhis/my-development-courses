# Trigger escalares BEFORE | AFTER

## Tarea
Validar que el nuevo precio sea mayor o igual que 10

1. Creamos la función que retorna un trigger usando la función que valida precio antes creada.

~~~
    CREATE FUNCTION modifica_precio_producto()
        RETURNS TRIGGER
        LANGUAGE plpgsql AS
        $$
            BEGIN
                -- Llamamos la función valida precio para validar el precio enviado por el cliente
                IF  valida_precio(NEW.precio)
                    THEN
                        RETURN NEW;
                    ELSE
                        -- si no cumple con la condición se asigna el valor 10
                        NEW.precio := 10::NUMERIC(10,2);
                        RETURN NEW;
                END IF;    
            END;
        $$;
~~~

2. Crear el trigger y asociarla a una tabla
~~~
    CREATE TRIGGER tr_actualiza_precio_producto
    BEFORE UPDATE
    ON productos
    FOR EACH ROW
    EXECUTE FUNCTION modifica_precio_producto();
~~~
