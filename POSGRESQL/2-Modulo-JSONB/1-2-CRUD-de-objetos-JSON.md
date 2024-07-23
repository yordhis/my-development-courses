# Insert, Update y delete de Objetos JSON

## Tarea
1. Crear la tabla ventas2

~~~
    CREATE TABLE ventas2
    (
        id SERIAL PRIMARY KEY NOT NULL,
        fecha_de_venta DATE NOT NULL,
        detalles_venta JSONB NOT NULL
    );
~~~

2. Realizar una inserción de venta

~~~
    INSERT INTO ventas2 (fecha_de_venta, detalles_venta) VALUES
    ('2024-07-16', 'AQUI VA EL JSON'),
    ('2024-07-16', 'AQUI VA EL JSON');
~~~

3. Realizar una modificacion a un campo tipo JSONB

- Modificando en una propiedad del JSON de [primer] NIVEL
~~~ 
    UPDATE ventas2 
    SET detalles_venta = jsonb_set(detalles_venta, '{key o propiedad del json}', '"Aqui va el valor a setear"'::jsonb)
    WHERE id=2;
~~~ 

- Modificando en una propiedad del JSON de [segundo] NIVEL
~~~ 
    UPDATE ventas2 
    SET detalles_venta = jsonb_set(detalles_venta, '{key1, key2}', '"Aqui va el valor a setear"'::jsonb)
    WHERE id=2;
~~~ 

- Modificando en una propiedad del JSON de [tercer] NIVEL
~~~ 
    UPDATE ventas2 
    SET detalles_venta = jsonb_set(detalles_venta, '{key1, keyArray[n], key3}', '"Aqui va el valor a setear"'::jsonb)
    WHERE id=2;
~~~ 

4. Eliminar un dato con JSONB
~~~
    DELETE FROM clientes WHERE id=n
~~~

tambien se puede eliminar consultando unas de las propiedades del JSONB como condicional para eliminar

~~~
     DELETE FROM clientes WHERE id=...
~~~