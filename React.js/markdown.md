==================================================================================
# Documentacion de Markdown #
==================================================================================

### Es un lenguaje de marcado para crear documentaciones para Github
- https://markdown.es/sintaxis-markdown/

==================================================================================
# Sintaxis Basica #
==================================================================================

## Título
### Subtítulo
Creamos una lista:
- Elemento 1
- Elemento 2
- Elemento 3
Creamos una lista con numeros:
1. Elemento 1
2. Elemento 2
3. Elemento 3
Al texto en Markdown puedes añadirle formato como **negrita** o *cursiva* de una manera muy sencilla.

==================================================================================
# Encabezados #
==================================================================================

# Encabezado 1
## Encabezado 2
### Encabezado 3
#### Encabezado 4
##### Encabezado 5
###### Encabezado 6

Consiste en subrayar los encabezados con el símbolo = (para el encabezado 1), o con guiones - para el encabezado 2.
Esto sería un encabezado 1
===
Esto sería un encabezado 2
—-

==================================================================================
# Incluso puedes concatenar varios >> para crear citas anidadas. #
==================================================================================

> Esto sería una cita como la que acabas de ver.
> 
> > Dentro de ella puedes anidar otra cita.
> 
> La cita principal llegaría hasta aquí. 

==================================================================================
# Listas desordenadas #
==================================================================================

##### Para crear listas desordenadas utiliza * asteriscos, - guiones, o + símbolo de suma.

- Elemento de lista 1
- Elemento de lista 2
* Elemento de lista 3
* Elemento de lista 4
+ Elemento de lista 5
+ Elemento de lista 6


##### Para generar listas anidadas dentro de otras, simplemente tendrás que añadir **cuatro espacios en blanco antes del siguiente *, - o +.

- Elemento de lista 1
- Elemento de lista 2
    - Elemento de lista 3
    - Elemento de lista 4
        - Elemento de lista 5
        - Elemento de lista 6

==================================================================================
# Listas ordenadas #
==================================================================================

##### Para crear listas ordenadas debes utilizar la sintaxis de tipo: «número.» 1.. Al igual que ocurre con las listas desordenadas, también podrás anidarlas o combinarlas.

1. Elemento de lista 1
2.  Elemento de lista 2
    - Elemento de lista 3
    - Elemento de lista 4
        1. Elemento de lista 5
        2. Elemento de lista 6

==================================================================================
# Códigos de bloque #
==================================================================================

##### Si quieres crear un bloque entero que contenga código. Lo único que tienes que hacer es encerrar dicho párrafo entre dos líneas formadas por tres ~ virgulillas.

###### Tal que así:

~~~
Creando códigos de bloque.
Puedes añadir tantas líneas y párrafos como quieras.  
~~~

==================================================================================
# Reglas horizontales #
==================================================================================

##### Las reglas horizontales se utilizan para separar secciones de una manera visual. Las estás viendo constantemente en este artículo ya que las estoy utilizando para separar los diferentes elementos de sintaxis de Markdown.

##### Para crearlas, en una línea en blanco deberás incluir tres de los siguientes elementos: asteriscos, guiones, o guiones bajos.

##### Es decir

***
---
___

##### También puedes separarlos mediante un espacio en blanco por pura estética.

* * *
- - -
_ _ _

==================================================================================
# Elementos de línea #
### Énfasis (negritas y cursivas) ###
==================================================================================

Markdown utiliza asteriscos o guiones bajos para enfatizar.

Simplemente tendrás que envolver palabras o textos en éstos símbolos para conseguir cursivas o negritas.
Markdown	Resultado
*cursiva*	cursiva
_cursiva_	cursiva
**negrita**	negrita
__negrita__	negrita

Por supuesto si quieres utilizar los dos tipos de énfasis no tienes más que combinar la sintaxis, envolviendo la palabra entre tres asteriscos o tres guiones bajos.
Markdown	Resultado
***cursiva y negrita***	cursiva y negrita
___cursiva y negrita___	cursiva y negrita

==================================================================================
# Links o enlaces como referencia #
==================================================================================

[nombre que quieres darle a tu enlace][nombre de tu referencia]
[nombre de tu referencia]: http:www.tuenlace.com


# Texto preformateado <pre> #

La otra manera de añadir código en Markdown es comenzar el párrafo con cuatro espacios en blanco. Esto se corresponde con la etiqueta HTML <pre>