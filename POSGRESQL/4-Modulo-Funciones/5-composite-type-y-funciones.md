# Composite Type y funciones
## ( Custom Type ) -> Tipos personalizado

Esto consiste en crear tipos de datos personalizados compuestos (DATA TYPES) 

### Estructura para declarar o crear un COMPOSITE TYPE
~~~
    CREATE TYPE contacto_cliente AS (
        nombres VARCHAR(50),
        apellidos VARCHAR(50),
        telefono VARCHAR(20)
    );
~~~

## Tarea
1. Imprimir en pantalla los nombres, apellidos y telefonos del cliente.

~~~
    -- Sentencia SQL para obtener los clientes
    SELECT  cli.nombres AS nombres,
            cli.apellidos AS apellidos,
            cli.telefono AS telefono
        FROM clientes AS cli
        WHERE cli.id_cliente = 5;

    -- Crear la función
    CREATE FUNCTION imprimir_datos_del_cliente(idCliente INTEGER)
    RETURNS VOID
    LANGUAGE plpgsql AS
    $$
        -- Aqui se usa el tipo creado por nosotros 
        DECLARE client_data contacto_cliente;
        BEGIN
            SELECT  cli.nombres,
            cli.apellidos,
            cli.telefono INTO client_data
            FROM clientes AS cli
            WHERE cli.id_cliente = idCliente;

            RAISE INFO 'Cliente -> Nombres: %, Apellidos: %, Telefono: %', 
            client_data.nombres, client_data.apellidos, client_data.telefono;
        END;
    $$;

~~~