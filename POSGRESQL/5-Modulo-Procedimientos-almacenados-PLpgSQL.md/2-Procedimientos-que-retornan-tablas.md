# Procedimientos que retornan tablas
## ( Setof table / Composite Type )

## Tarea
Determinar todos los empleados que hayan contratado apartir del año 2020

~~~

-- MODO 1 DE LA FUNCION
CREATE OR REPLACE FUNCTION contratados_apartir_2020()
    -- Aqui usuamos el COMPOSITE TYPE creado anteriormente "contacto_cliente"
    -- El SETOF: Se encarga de volcar la consulta en una tabla.
    RETURNS SETOF contacto_cliente
    LANGUAGE plpgslq AS
    $$
        BEGIN
            RETURN QUERY (
                SELECT emp.nombres, emp.apellidos, emp.telefonos
                FROM empleados AS emp
                WHERE extract(year from emp.fecha_contratacion) >= 2020;
            );
        END;
    $$;

-- Modo 1 muestra todo en una columna
SELECT contratados_apartir_2020();

-- Modo 2 muestra la tabla correctamente
SELECT * FROM contratados_apartir_2020();


-- MODO 2 DE LA FUNCIÓN
CREATE OR REPLACE FUNCTION contratados_apartir_2020_v2(gestion INT)
    -- Asignamos la tabala que queremos volcar
    RETURNS SETOF empleados
    LANGUAGE plpgslq AS
    $$
        BEGIN
            RETURN QUERY (
                SELECT emp.* -- Mostramos todos los campos
                FROM empleados AS emp
                WHERE extract(year from emp.fecha_contratacion) >= gestion;
            );
        END;
    $$;

SELECT * FROM contratados_apartir_2020_v2(2020);
~~~

