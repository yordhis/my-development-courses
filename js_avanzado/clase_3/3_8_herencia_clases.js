/**
 * 
 * Barinas, 16-07-2022
 * video 3.8
 * 
 * profesor: Jonathan Mircha
 * 
 * @_POO_HERENCIA_PROTOTIPICA
 * 
 * 
 */ 

 ((c) => {

    c('******@_POO_CLASES, HERENCIA, POLIMORFISMO, METODOS, CONSTRUCTORES*****')
    c('******SETTERS Y GETTERS, MODIFICACIONES DE ACCESO (PUBLICO, STATICO, PRIVADO)*****')
    c('******SUPER CONSTRUCTORES, SUPER LLAMADAS Y MIXINS*****')

    /**
     *  @_PRIVACIDAD_EN_JAVASCRIPT 
     * 
     * - En JS las propiedades de los objetos son publicos, en las clases es igual
     *   para aislar ciertas propiedades y evitar que puedan ser modificadas de
     *   de forma externa, tenemos que requerir al uso de @WeakMap
     * 
     * - Un @WeakMap es un Map que solo acepta objetos como vlaves, la referencia
     *   a las claves es debil, lo que significa que si no hay otras referecncia al
     *   objetos que actua como clave, el receptor de basura podrá liberarlo
     * 
     * - Revisa el archivo de teoria-es6.md
     */

    /* PRIVADOS */
    let privado = new WeakMap()
    /* TELEFONO */
        class Telefono {
            constructor(marca, modelo, numero){
                this.marca = marca
                this.modelo = modelo
                // this._numero = numero
                privado.set(this, {_numero: numero})
                this.puedoLlamar = true
            }

            llamar () {
                c('riiiiing riiiiing!!')
            }

            /**
             * @_video_3_9
             * @returns_toda_la_info_del_telefono
             */
            verInfo () {
                return c(
                    `${this.constructor.name}\n`,
                    `\t Modelo: ${this.modelo}\n`,
                    `\t Marca: ${this.marca}\n`,
                    `\t Puedo llamar: ${this.puedoLlamar}\n`,
                )
            }


            /** 
             * @_video_3_9
             * Un metodo estatico se puede ejecutar sin necesidad 
             * de instanciar la clase, por lo general, este tipo de metodos
             * se reservan clases que coleccionan utilidades y que 
             * no se espera que sean instanciadas
             * en pocas palabras se esta hablando de los HELPERS habituales
             * de la mayoria de frameworks y librerias
             */
            static queEs () {
                c('El telefono es un dispositivo de telecomunicacion diseñado para transmitir señales acusticas a distancias por medio de señales electricas')

            } 

            /** 
             *   @_video_3_9
             * - Los Setters y Getters son metodos especiales que nos permiten establecer
             *   y obtener los valores de atributos de nuestra clase, aunque son metodos se
             *   acceden por asignacion y no por INVOCACION, es decir como si fueran atributos
             * 
             */
            
            // Setters 
            set numero (numero) {
                privado.get(this)._numero = numero
            }
            // Getters
            get numero () {
                return c(privado.get(this)._numero)
            }
            
        }
        c('******TELEFONO*****')
        // esto se ejecuta exitosamente
        // esto es un metodo estatico
        Telefono.queEs()
        // SIN INSTANCIAR
        // Esto no se ejecuta ya que no se a instanciado un object
        // Telefono.llamar()

        // INSTANCIADO
        let tel = new Telefono('Panasonic', 'kx-ts550', '02735324869')
        tel.llamar()
        
        // Getters se usa con la notacion de propiedad
        tel.numero

        // Setters Se iguala como si fuera un atributo
        // tel.numero()  esto es incorrecto
        tel.numero = '04169733666'
        tel.numero

        tel.verInfo()






    /* CELULAR */
        class Celular extends Telefono { 
            constructor(marca, modelo, numero) {
                // En una clase hija es obligatorio llamar el super antes de utilizar this
                super(marca, modelo, numero)
                this.tengoCable = false
            }

            vibrar () {
                    c('Vbbbbbrrr Vbbbbbrrr!!')
            }

            /**
             * @_Video_3_10_minuto_5_30
             * 
             * @_Polimorfismo
             * Diferentes Clases podrian definir el mismo metodo o propieda
             * y funciona correctamente haciendo lo mismo o con otras funcionalidades
             * 
             */
            verInfo () {

                // Super Invocaciones o super llamadas:
                // con super se manda a llamar el metodo verInfo() 
                // de la clase padre
                /* return super.verInfo() */

                return c(
                    `${this.constructor.name}\n`,
                    `\t Modelo: ${this.modelo}\n`,
                    `\t Marca: ${this.marca}\n`,
                    `\t Puedo llamar: ${this.puedoLlamar}\n`,
                    `\t Tengo cable: ${this.tengoCable}\n`
                )
            }
        }


        c('******CELULAR*****')
        let cel = new Celular('Betelca', 'PLIS-5100', '04129736581')
        cel.llamar()
        cel.numero
        cel.numero = '04161234567'
        cel.numero
        cel.verInfo()
        
     
    /* SMART PHONE */
        class SmartPhone extends Celular {
            constructor(marca, modelo, numero) {
                super(marca, modelo, numero)
                this.tengoInternet = true
            }
            // metodos
           conectar () {
                    c('Conectado a internet!')
            }

            verInfo () {

                return c(
                    `${this.constructor.name}\n`,
                    `\t Modelo: ${this.modelo}\n`,
                    `\t Marca: ${this.marca}\n`,
                    `\t Puedo llamar: ${this.puedoLlamar}\n`,
                    `\t Tengo cable: ${this.tengoCable}\n`,
                    `\t Conectado a internet: ${this.tengoInternet}\n`
                )
            }
        }
       
        
     /* EJECUCION */
     c('******SMART PHONE*****')
        let sm = new SmartPhone('j7', 'PLus-5100', '0412-2055-896')
        sm.verInfo()
        sm.llamar()
        sm.vibrar()
        sm.conectar()
        sm.numero
        sm.numero = '04161234567'
        sm.numero
     
    
    

    


})(console.log)