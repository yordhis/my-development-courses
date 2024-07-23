# Multiples Objetos JSONB


## Tareas
1. Crear Tabla productos2
~~~
    CREATE TABLE productos2 (
        id SERIAL PRIMARY KEY NOT NULL,
        descripcion JSONB NOT NULL,
        opciones JSONB NOT NULL
    );
~~~

2. Realizar una inserción de dos Objetos JSON para realizar analisis y pruebas
~~~
INSERT INTO productos2 (descripcion, opciones) 
VALUES (
    '{"nombre": "Monitor LCD Lenovo", "precio":2000.99, "categoria":"Electrónica"}',
    '{"tamanio": ["13 pulgadas","17 pulgadas","27 pulgadas"], "color":["negro", "blanco", "azul"] }'
);
~~~

3. Mostrar cada producto con sus precios, tamaños y categoria

SELECT  prod.descripcion->>'nombre' as NOMBRE,
        prod.descripcion->>'precio' as PRECIO,
        jsonb_array_elements(prod.opciones->'tamanio') AS TAMANIO,
        prod.descripcion->'categoria' as CATEGORIA
FROM productos2 as prod;