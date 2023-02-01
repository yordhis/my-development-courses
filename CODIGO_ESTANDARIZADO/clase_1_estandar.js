/**
 * Barinas, 19/01/2023
 * 
 * @_Profesor @var BETO_QUIROGA
 * 
 * @_Codigo_Estandarizado
 * 
 * El codigo estandarizado es la convención que realizan todos los programadores 
 * para desarrollar un aplicación
 * 
 * A continuación tenemos los tres estandares mas utilizados entre los programdores
 *  
 * @param Javascript_standard_Style
 *      http://standardjs.com
 *      
 *      @param Reglas
 *          http://standardjs.com/rules.html
 * 
 * @param Google_Javascript_Style
 *       
 * 
 * @param Los_dev_De_AIRBNB_IO
 *      http://airbnb.io/projects/javascript
 * 
 *      // Guia del esytandar AIRBNB.IO
 *      https://github.com/airbnb/javascript
 *
 * 
 * @_Paquetes_linter
 * 
 * estos paques estan revisando el codigo de manera constante para evitar terminar el proyecto con
 * muchos errores por resolver, sino que va alertandote de cada error o estandar vialado durante el desarrollo
 * 
 * Unos de los paquetes LINTER  mas usados es:
 * 
 * @param ESlint
 * 
 * @_Paso_1
 *      - Crear o ejecutar 
 *      comando -> npm init -y
 *      Se necesita que este el archivo JSON para poder ejecutar el npx eslint --init
 *  
 *      - Instalar de manera global ESlint
 *      comando -> npm install eslint -g
 * 
 * Nota: @_NPX : Son las siglas de Node Pakage Execute, este comando 
 *              nos permite ejecutar paquetes no instalados y los busca en la nube
 * 
 *      - Usando ESlint en un solo proyecto
 *      comando -> npx eslint --init
 * 
 * @_Paso_2
 *      - Instalamos el plugin dee VSCODE ESlint
 *      - entramos en las configuraciones del plugin    
 *      - y modificamos de @false a @true donde dice @_fixAll = true
 *  
 */
    /** @var setting.json este es el archivo de configuracion de visua estudio code */
        "editor.formatOnSave": false,
        "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true
        },
        "eslint.alwaysShowStatus": true

/** 
 * @_FORMAS_DE_USAR_ESLINT 
 * 
 * 1- comando -> npx eslint --fix index.php
 * 
 * 2- Ctrl + .  -> esto ejecuta el eslint y formatea todos los errores
 * 
 * 3- hover de las lineas con error y puedes acceder al ESLINT
 * 
 * */


/** 
 * @_COMO_DESHABILITAR_REGLAS 
 * Primero nos dirijimos al archivo @var eslinrc.json
 * 
 * @_0 || el cero significa APAGAR regla
 * @_1 el uno significa AALERTAME si incumplo una regla
 * @_2 el dos significa ACTIVO-ESTRICTO las regla
 *
 * y las reglas se modifican en el atributo del objeto RULES de la 
 * siguiente manera:
 */

"rules": {
    // "quotes": 0 // off || disable
    // "quotes": 1 // warning
    // "quotes": 2 este el que viene por defecto // active
    "quotes":[
        0,
        "double" || "single" // Lo que quiero permitir
    ],
    "semi":[
        2,
        "never" || "always"
    ]
}
