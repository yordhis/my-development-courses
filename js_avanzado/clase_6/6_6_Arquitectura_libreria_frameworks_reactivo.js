/**
 * 
 * Barinas, 29-07-2022
 * video 6.6
 * 
 * profesor: Jonathan Mircha
 * 
 * @_6_6_Arquitectura_libreria_frameworks_reactivo
 * 
 * @_Arquitectura_web_reactiva
 * 
 * - Son sistemas que operan en reacion a los eventos ocurridos sobre
 *   el modelo de datos DOM
 * 
 * - Cada evento atraviesa una cadena de transformación funcional
 *   para su procesamiento
 * 
 * - Como evolucion del modelo de construccion basado en 
 *   la propagacion de escuchadores, emergieron una serie de 
 *   arquitecturas que se recogen en el acronimo MV* por sus
 *   similitudes entre si
 * 
 * - Todas ellas comparte la premisa de que estan centradas en
 *   un modelo interno cuyos cambios son atendidos por la vista
 *   a traves de cierta logica de control
 * 
 * - Esto viene del MVC que en el lado del front se a querido implementar
 *   como:
 * 
 * @_MVA (Modelo, Vista, Adaptador)
 * 
 * - Este no se comunica con la vista es el adaptador 
 *   el encargado de propagar los cambios en ambas partes
 * 
 * @_HMVC (Model View Controller Jerarquico)
 * 
 * - Los modelos MVC se distribuyen entre el aplicativo
 *   para cada componente que se organizan agregativamente
 * 
 * @_MVP (Model View Presenter)
 * 
 * - Como extencion del MVA, el patron MVP hace que el 
 *   controlador se mantenga a los escuchadores de los 
 *   cambios en la vista y el modelo
 * 
 * @_MVVM (Model View View-Model)
 * 
 * - La vista y el modelo permanecen sincronizados a
 *   traves de una arquitectura de observadores y mutadores
 * 
 * @_LIBRERIAS_Y_FRAMEWORKS_REACTIVOS
 * 
 * @_POPULARES
 * 
 * - Angular (Frame)
 * - VUE (Frame)
 * - React (Libreria)
 * 
 * @_NO_TAN_POPULARES
 * 
 * - Elm (Compila a JS)
 * - ReactiveX + RxJS (Es una libreria)
 * - Reactive.js ()
 *  
 * 
 * @param LINK www.cdnjs.com
 */