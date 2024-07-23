# Vistas Comunes
Una vista es una [TABLA_VIRTUAL] que no existe fisicamente en la base de datos, sino que se 
contruye dinamicamente cada vez que se hace una referencia a ella de acuerdo a una consulta SQL.

Las vistas son utiles cuando se necesita realizar una consulta compleja que involucra
varias tablas y/o funciones, y se quiere simplificar el proceso de consulta.

En lugar de escribir la consulta compleja cada vez que se necesita realizar una consulta
se puede crear una vista que contenga la consulta y utilizarla cada vez que se necesita
referencia a los datos.

Existen dos tipo de consultas:
1. Repetitivas 
2. Complejas

si identificamos unas de estos tipos de consultas ahi se puede aplicar las vistas.

## Ejercicio: Caso de uso de las vistas
Se aplicará un descuento a los productos que se tiene de acuerdo a la categoría que tengan, es decir si la categoria es:

- [Electrónica] aplicar un descuento de 8%  
- [Hogar] aplicar un descuento de 5%  
- [demas_categorias] aplicar un descuento de 1%  

Por lo tanto crear un reporte en donde se muestre el nombre del producto, el precio base y el nuevo precio en base al descuento. Adicionalmente mostrar el nombre del proveedor y su email finalmente mostrar las categorias y los descuentos.

### Solución:
- Creamos la vistas
~~~
    CREATE OR REPLACE VIEW productos_y_descuentos AS
    SELECT  prod.nombre AS producto,
            prod.precio AS precio_base,
            prov.nombre AS proveedor,
            prov.correo_electronico AS email,
            cat.nombre AS categoria,
            (
                CASE cat.nombre
                    WHEN 'Electrónica' THEN '8%'
                    WHEN 'Hogar' THEN '5%'
                    ELSE '1%'
                END
            ) AS descuentos
            (
                CASE cat.nombre
                    WHEN 'Electrónica' THEN prod.precio - prod.precio * 0.08
                    WHEN 'Hogar' THEN prod.precio - prod.precio * 0.05
                    ELSE prod.precio - prod.precio * 0.01
                END
            ) AS precio_promocion
    FROM productos AS  prod
        INNER JOIN proveedores AS prov ON prov.id_proveedor = prod.proveedor_id
        INNER JOIN categorias AS prov ON cat.id_categoria = prod.categoria_id;
~~~

- Realizamos la consulta
SELECT * FROM productos_y_descuentos;

