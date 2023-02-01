/**
 * 
 * Barinas, 27-07-2022
 * video 5.4
 * 
 * profesor: Jonathan Mircha
 * 
 * @_TRANSPARENCIA_REFERENCIAL
 *
 * Otra de las caracteristicas de las funciones puras
 * 
 * - Una funcion es referencialmente transparente si de manera
 *   consistente devuelve los mismos resultados con los mismos
 *   datos de entrada.
 * 
 *   Es decir, que si entra una cadena de texto 
 *   sale una cadena de texto o el mimo tipo de dato
 * 
 *   Si la funcion depende de estados externos, es
 *   complicado que dado unos valores de entrada,
 *   siempre devuelva los mismos resultados de salida
 *   ya que en el camino, todas esas dependencias pueden
 *   cambiar el comportamiento de la funcion
 * 
 * @_INMUTABILIDAD
 * 
 * - El mayor numerode errores en una aplicacion se producen por un
 *   mal control de los estados
 * 
 * - Que un estado pueda cambiar puede hacer que no obtengamos lo esperado
 * 
 * - Por lo tanto controlar los cambios de estados en las aplicaciones es primordial
 * 
 * - Una app perfecta seria aquella en la cual no existieran estados 
 *   y si hubiesen fuera minimos y controlados lo mejor posible
 * 
 * - Lamentablemente en las aplicaciones reales existen datos que 
 *   cambian el estado
 * 
 * - Lo unico que podemos hacer es reducir el numero de estados a los 
 *   indispensables e intentar que sean inmutables
 * 
 * - En JS los tipos simples como string, number o boolean son tipos
 *   inmutables. Cuando se modifica un estado se genera una nueva
 *   referencia del dato en memoria
 * 
 * - Sin embargo, los Array y los Objetos son mutables. La referencia
 *   a su memoria siempre es la misma, si modificamos un atributo
 *   o un elemento el puntero continua
 * 
 * - Esto puede provocar efectos secundarios ya que si a una funcion
 *   que creemos pura, le pasamos un objeto o array como parametro
 *   puede que internamente estemos modificando valores internos y
 *   que el estado de nuestra aplicacion cambie, provocando que se rompa
 *   la transparencia referencial
 * 
 * @_RECURSIVIDAD
 * 
 * - Es una tecnica en programacion para solucionar problemas
 *   complejos que pueden dividirse en partes mas pequeñas e identicas
 *   al problema total pero de menor manitud
 * 
 * - La composicion de todas las soluciones hijas dan el resultado
 *   de la solucion padre
 * 
 * - Suele funcionar autoejecutando funciones con un ambito menos al
 *   problema padre. Es por eso que en toda solución recursiva
 *   contamos con 2 elementos
 * 
 * 1- Un caso base
 * 2- Un caso recursivo
 *   
 * 1- @Un_caso_base
 * 
 *   Es el caso al que toda funcion recursiva tiene que acabar llegando
 *   para dar por resuelto el caso mas simple del problema que se quiere
 *   resolver 
 * 
 *   Si no definimos un caso base dentro de nuestra solucion recursiva
 *   llamaremos a nuestra funcion infinitas veces hasta que acabemos
 *   con todos los recursos del sistema
 * 
 * 1- @Un_caso_recursivo
 * 
 *   Suele ser una funcion que es capaz de autoinvocarse
 * 
 *   La clave de esta autoinvocacion es que los elementos que le 
 *   pasemos tendrán que ser menores que los del problema padre ya
 *   que si no nunca podriamos llegar al caso base
 * 
 *   Es una programacion muy usada en programacion funcional 
 *   porque nos evita el uso de iteraciones
 * 
 *   Se lleva muy bien con estructuras de datos que partan de un nodo
 *   raiz y del que vayan colgando diferentes nodos hijos como los 
 *   arreglos y los objetos
 *
 */