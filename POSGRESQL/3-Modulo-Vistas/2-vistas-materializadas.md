# Vistas Materializadas

## Ejercicio
Determinar cuál es el empleado que esta haciendo mas ventas
mostrar los datos del empleado:
- Nombre completo
- Nro de ventas

1. Configurar la consulta SQL
~~~
    SELECT  emp.nombres,
            emp.apellidos,
            COUNT(ven.empleado_id) AS total_ventas
    FROM ventas AS ven
        INNER JOIN empleados AS emp ON emp.id_empleado = ven.empleado_id
    GROUP BY emp.nombres, emp.apellidos, ven.empleado_id
    ORDER BY  ven.empleado_id DESC;
~~~

2. terminando de configurar

~~~
CREATE MATERIALIZED VIEW empleado_del_mes AS
    SELECT  CONCAT(emp.nombres,' ',   emp.apellidos) AS empleado,
            COUNT(ven.empleado_id) AS total_ventas
    FROM ventas AS ven
        INNER JOIN empleados AS emp ON emp.id_empleado = ven.empleado_id
    GROUP BY emp.nombres, emp.apellidos, ven.empleado_id
    ORDER BY  total_ventas DESC
    LIMIT 1;
~~~

3. Realizamos la consulta para verificar el resultado
~~~
    SELECT * FROM empleado_del_mes;
~~~