/**
 * 
 * Barinas, 29-07-2022
 * video 6.3
 * 
 * profesor: Jonathan Mircha
 * 
 * @_PROGRAMACION_REACTIVA
 * 
 * - Es un paradigma de programacion orientado a flujo de
 *   datos ASINCRONOS y la propagacion de cambios
 * 
 *   Link www.reactivemanifesto.org/es
 * 
 * - Es un modelo de programacion que pretende dar respuesta a la
 *   demanda creciente de nuesvos sistemas mas flexibles, elasticos
 *   y tolerantes a fallos a partir de los principios propios de la
 *   programacion funcional
 * 
 * - Esto resulta muy ventajoso porque produce desarrollos mas
 *   declarativos y explicitos centrados en las transformaciones que
 *   deben sufrir los datos para su procesamiento
 * 
 * 
 * @_LA_WEB_COMO_MODELO_REACTIVO
 * 
 * - La Web, como plataforma de interaccion, es un sistema reactivo
 * 
 * - El DOM representa en memoria el documento de la pagina que
 *   visualiza el navegador y es un modelo de datos sujeto a cambios 
 *   sobre el que pueden registrarse funciones escuchadoras para cada
 *   uno de los eventos que lanza el navegador
 * 
 * - La programacion basada en escuchadores es el mas basico de los
 *   modelos de la web y es reactivo
 * 
 * @_EL_PATRON_OBSERVADOR
 * 
 * - El paradigma de escuchadores de eventos en JS es la 
 *   manifestacion del patron de diseño Observador o PUB / SUB
 * 
 * - Es un patron de diseño en el que los objetos se suscriben
 *   a un evento y reciben notificaciones cuando este se produce
 * 
 * - El diagrama de @_INFLUENSER y @_FAN que consiste en 
 *   seguir y dejar de seguir. es la piedra angular de la programación
 *   orientada a eventos, incluyendo JS
 * 
 * - Facilita el buen diseño funcional y orientado a objetos
 * 
 * @_LOS_OBJETOS_QUE_PARTICIPAN_EN_ESTE_MODELO_SON_
 * 
 * @param SUBJECT (sujeto)
 * 
 * - Mantiene la lista de observadores. Cualquier numero de 
 *   observadores puede observar un subject
 * - Implementa una interfaz que permite a los objetos de
 *   observacion suscribirse o enviar una notificacion a sus
 *   observadores cuando su estado cambia
 * 
 * @param OBSERVERS (observadores)
 * 
 * - Se asocian al subject y pueden ser invocados cuando se 
 *   produsen eventos (cambios)
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */