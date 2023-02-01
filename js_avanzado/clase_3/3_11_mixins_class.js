/**
 * 
 * Barinas, 16-07-2022
 * @video_3_11
 * 
 * profesor: Jonathan Mircha
 * 
 * @_POO_HERENCIA_PROTOTIPICA
 * 
 * 
 */ 

 ((c) => {

    c('******@_POO_CLASES, MIXINS*****')
    

    /* PRIVADOS */
    let privado = new WeakMap()
    /* TELEFONO */
        class Telefono {
            constructor(marca, modelo, numero){
                this.marca = marca
                this.modelo = modelo
                privado.set(this, {_numero: numero})
                this.puedoLlamar = true
            }

            llamar () {
                c('riiiiing riiiiing!!')
            }

            verInfo () {
                return c(
                    `${this.constructor.name}\n`,
                    `\t Modelo: ${this.modelo}\n`,
                    `\t Marca: ${this.marca}\n`,
                    `\t Puedo llamar: ${this.puedoLlamar}\n`,
                )
            }

            static queEs () {
                c('El telefono es un dispositivo de telecomunicacion diseñado para transmitir señales acusticas a distancias por medio de señales electricas')

            } 

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

        Telefono.queEs()

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




    /**
     * @_Mixins
     * - En los lenguajes de POO, un mixins es una clase que ofrece
     *   cierta funcionabilidad para ser heredada por una subClases, pero 
     *   que no es ideada para ser autonoma
     * 
     * - Es una especie de clase Abstracta
     * 
     * - Los conceptos de @superClases y @subClase no existen como tipo de objetos concretos
     * 
     * - Una @subClase es la clase que hereda (extiende) de otra (clase hija)
     * 
     * - Una @superClase es la clase apartir de la cual heredan (extienden) otras (clases madres)
     * 
     * - En Js, las clases pueden ser usadas como expresiones
     *   gracias a esto, es posible crear una nueva clase cada vez que dicha
     *   expresion es evaluada
     * - La clausula @extends permite actuar sobre expresiones, lo cual
     *   habilita que una clase extienda de otra creada en tiempo de ejecucion
     *    
     */ 
    // se pueden declarar como constantes de forma de Arrow Function
    /* definiendo mixins */ 
    const Operadora = Superclass => class extends Superclass {
        asignarOperadora( operadora ){
            return c(`La operadora asignada es ${operadora}`)
        }
    }
    const Red = Superclass => class extends Superclass {
        asignarRed( red ){
            return c(`La red asignada es ${red}`)
        }
    }
  

    /* CELULAR */
        // usando mixins
        // Mixin simple: Celular extends Red ( Telefono )
        // mixins anidado: Celular extends Operadora (Red ( Telefono ))

        class Celular extends Operadora (Red ( Telefono )) { 
            constructor(marca, modelo, numero) {
                // En una clase hija es obligatorio llamar el super antes de utilizar this
                super(marca, modelo, numero)
                this.tengoCable = false
            }

            vibrar () {
                    c('Vbbbbbrrr Vbbbbbrrr!!')
            }

            verInfo () {

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
        cel.verInfo()
        cel.llamar()
        cel.asignarRed('4G')
        cel.asignarOperadora('Movistar')
        cel.numero
        cel.numero = '04161234567'
        cel.numero
        
     
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
        sm.asignarOperadora('Movilnet')
        sm.asignarRed('5G')
        sm.numero
        sm.numero = '04161234567'
        sm.numero
     
    
    

    


})(console.log)