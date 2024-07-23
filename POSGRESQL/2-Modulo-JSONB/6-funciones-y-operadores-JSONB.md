# Funciones y operadores de JSONB

## Operadores

1. ->'return_propiedad'
2. ->>'return_propiedad_en_texto'
3. #>'{address, return_propiedad}' Acceso anidado
4. #>>'{address, return_propiedad_en_texto}' Acceso anidado

## Funciones

1. jsonb_agg: Esta funcion sirve para agregar multiples objetos JSONB en un solo objeto JSON
    - Ejemplo:
    ~~~
        SELECT jsonb_agg(data) 
        FROM my_table; 
    ~~~ 
Esto devolverá un JSONB que contiene todos los objetos JSONB almacenados en la columna data de 
la tabla mytable.

2. jsonb_array_element(array, posicion[0]): Esta retorna el objeto dentro de un array

3. jsonb_array_elements(array): Esta funcion se utiliza para convertir un array JSON en una tabla

4. jsonb_extract_path: Esta función se utiliza para obtener un valor de una clave anidada en un objeto JSONB.
    - Ejemplo:
    ~~~
        SELECT jsonb_extract_path(data, 'address', 'city')
        FROM my_table;
    ~~~
    Esto devolvera el valor de la clave city que se encuentra dentro del objeto address en la 
    columna data de la tabla my_table.

5. jsonb_extract_path_text: esta funcion se utiliza para obetener el valor de una clave anidad en formato text.
    - Ejemplo:
    ~~~
        SELECT jsonb_extract_path_text(data, 'address', 'city')
        FROM my_table;
    ~~~
    Esto devolvera el valor de la clave city que se encuentra dentro del objeto address en la 
    columna data de la tabla my_table en formato TEXT.