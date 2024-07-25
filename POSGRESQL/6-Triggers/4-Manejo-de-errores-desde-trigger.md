# Manejo de errores desde trigger 
## ( EXCEPTION )

## Ejercicio 
Crea una función trigger y el trigger que no permita eliminar el dia miercoles
ya que el sistema esta en mantenimeinto.

1. Crear la funcion trigger

~~~
    CREATE FUNCTION elimina_producto()
    RETURNS TRIGGER
    LANGUAGE plpgsql AS
    $$
        DECLARE dia_de_la_semana INTEGER;
        BEGIN
            SELECT date_part('dow', current_date) INTO dia_de_la_semana;

            IF dia_de_la_semana = 3
                THEN
                    RAISE EXCEPTION 'Sistema en mantenimiento, no puedes eliminar registros.';
            END IF;
            RETURN OLD;
        END;
    $$
~~~

2. Crear el trigger
~~~ 
    CREATE TRIGGER tr_elimina_producto
    BEFORE DELETE
    ON productos
    FOR EACH ROW
    EXECUTE FUNCTION elimina_producto();
~~~