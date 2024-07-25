# Trigger de AUDITORIA DE BASE DE DATOS

## Tarea
Se require un registro de movimientos de los envios para auditar todas las 
transacciones realizada por los usuario.

1. Crear tabla para alcenar los registros
~~~
    CREATE TABLE audit_detalles_envio(
        id SERIAL PRIMARY KEY,
        usuario VARCHAR(50) NOT NULL,
        fecha_hora TIMESTAMP NOT NULL,
        accion JSONB NOT NULL
    );
~~~

2. Crear una función trigger para el registro automatico de las acciones
INSERT-UPDATE-DELETE.

~~~
    CREATE FUNCTION audit_detalles_envio()
    RETURNS TRIGGER
    LANGUAGE plpgsql AS 
    $auditoria$
        BEGIN
            -- TG_OP es una variable de postgresql que optienes las acciones.
            CASE TG_OP -- 'INSERT - UPDATE - DELETE'
                WHEN 'INSERT' THEN
                    INSERT INTO audit_detalles_envio(usuario, fecha_hora, accion)
                    VALUES(user, now(), row_to_json(NEW));
                    RETURN NEW;
                WHEN 'UPDATE' THEN
                    INSERT INTO audit_detalles_envio(usuario, fecha_hora, accion)
                    VALUES(user, now(), row_to_json(NEW));
                    RETURN NEW;
                WHEN 'DELETE' THEN
                    INSERT INTO audit_detalles_envio(usuario, fecha_hora, accion)
                    VALUES(user, now(), row_to_json(OLD));
                    RETURN OLD;
            END CASE;
        END;
    $auditoria$


    -- Para obtener el usuario se usa:
    SELECT users;

    -- Para obtener la hora:
    SELECT now();

    -- El row_to_json(fila_aqui) esto convierte una fila de una tabla en formato json. 
~~~

3. Crear el trigger
~~~
    CREATE TRIGGER tr_audit_detalles_envio
    AFTER INSERT OR UPDATE OR DELETE
    ON detalle_envio
    FOR EACH ROW
    EXECUTE FUNCTION audit_detalles_envio();
~~~